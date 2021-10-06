import { APP_INITIALIZER, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfigInterface } from '../model-global/AppConfigInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  static settings: AppConfigInterface;

  constructor(private http: HttpClient) {}
  getJSON(jsonUR): Observable<any> {
    return this.http.get(jsonUR);
  }
  loadSetting() {
    const jsonFile = 'environments/app-config.json';
    this.getJSON(jsonFile).subscribe((data) => {
        console.log(data);
       });
    return new Promise<void>((resolve, reject) => {
      this.http
        .get(jsonFile)
        .toPromise()
        .then((response: AppConfigInterface) => {
          AppConfigService.settings = response as AppConfigInterface;
          resolve();
        })
        .catch((response: any) => {
          reject(
            `Could not load config file '${jsonFile}': ${JSON.stringify(
              response
            )}`
          );
        });
    });
  }
}
export function ConfigFactory(config: AppConfigService) {
  return () => config.loadSetting();
}

export function init() {
  return {
    provide: APP_INITIALIZER,
    useFactory: ConfigFactory,
    deps: [AppConfigService],
    multi: true,
  };
}

const ConfigModule = {
  init: init,
};

export { ConfigModule };
