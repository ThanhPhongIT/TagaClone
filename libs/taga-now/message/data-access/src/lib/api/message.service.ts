import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseApiService } from '@consult-indochina/base';
import { MessageChat } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MessageService extends BaseApiService<MessageChat>{

  constructor(protected http: HttpClient) {
    super(http, 'message');
  }
  // updateCompany(company: any, companyId: any) {
  //   return this.http.put(this.actionUrl, company, {
  //     params:{
  //       companyId: companyId
  //     }
  //   })
  // }
}
