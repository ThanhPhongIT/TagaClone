import { EventEmitter, Inject, Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { AppConfig, APP_CONFIG } from '@taga-now/shared/app-config';
import { CiAuthStateService } from '@consult-indochina/auth';
import { take } from 'rxjs/operators';
import { MessageChat } from '../models/message.model';
@Injectable({
  providedIn: 'root',
})
export class ChatService {
  messageReceived = new EventEmitter<any>();
  connectionEstablished = new EventEmitter<boolean>();

  private connectionIsEstablished = false;
  private _hubConnection!: HubConnection;
  token = '';
  constructor(
    @Inject(APP_CONFIG) private appConfig: AppConfig,
    private ciAuthState: CiAuthStateService
  ) {
    this.ciAuthState.token$.pipe(take(1)).subscribe((res) => {
      this.token = res;
      this.createConnection();
      this.registerOnServerEvents();
      this.startConnection();
    });
  }

  sendMessage(message: MessageChat) {
    this._hubConnection.invoke('SendUserMessage', message);
  }

  private createConnection() {
    this._hubConnection = new HubConnectionBuilder()
      .withUrl(this.appConfig.baseURL + '/chatHub', {
        withCredentials: false,
        accessTokenFactory: () => this.token,
      })
      .build();
  }

  async getToken() {
    this.token = await this.ciAuthState.token$.toPromise();
  }

  private startConnection(): void {
    this._hubConnection
      .start()
      .then(() => {
        this.connectionIsEstablished = true;
        console.log('Hub connection started');
        this.connectionEstablished.emit(true);
      })
      .catch((err) => {
        console.log('Error while establishing connection, retrying...');
        setTimeout(() => {
          this.startConnection();
        }, 5000);
      });
  }

  private registerOnServerEvents(): void {
    this._hubConnection.on('ReceiveUserMessage', (data: any) => {
      console.log(data);
      this.messageReceived.emit(data);
    });
  }
}
