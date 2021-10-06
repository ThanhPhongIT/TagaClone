import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class CompanyApiService {
  constructor(protected http: HttpClient) {}

  createCompany(data: any) {
    return this.http.post(`organization-create`, data).pipe(map((res) => res));
  }
  getAllCompanies(startWidth: string) {
    return this.http.get(`organization-get-list?start_with=${startWidth}`);
  }

  updateCompany(company: any, companyId: any) {
    return this.http.put(company, {
      params: {
        companyId: companyId,
      },
    });
  }
}
