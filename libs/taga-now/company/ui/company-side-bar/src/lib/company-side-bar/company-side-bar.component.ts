import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  CompanyApiService,
  getCompanies,
  getCompanyById,
  loadCompanies,
  selectAll,
  selectIds,
  setCompany,
  updateCompany,
} from '@taga-now/taga-now/company/data-access';
@Component({
  selector: 'tgn-company-side-bar',
  templateUrl: './company-side-bar.component.html',
  styleUrls: ['./company-side-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanySideBarComponent implements OnInit {
  companies$ = this.store.pipe(select(getCompanies));
  companyId$ = this.store.pipe(select(getCompanyById));
  constructor(
    private store: Store,
    private companyApiService: CompanyApiService
  ) {}

  ngOnInit() {
    //gọi thử thẳng service không được
    this.companyApiService
      .createCompany({ name: 'Consult Indochina' })
      .subscribe((res) => {
        console.log(res);
      });
    // this.setNewCompany();
    this.store.dispatch(loadCompanies());
    this.companies$.subscribe((res) => console.log(res));
    this.companyId$.subscribe((res) => console.log(res));
    this.updateCompany();
  }

  setNewCompany() {
    this.store.dispatch(
      setCompany({
        company: {
          // AddressDetail: 'null',
          // AddressId: 54,
          // Description: '',
          // Email: 'cuongt321hin121221h@cuongthinh.com',
          Name: 'Consult Indochina',
          // PhoneNumber: '0211199933',
          // ShortName: 'null',
          // Status: 1,
          // Type: 1,
        },
      })
    );
  }
  updateCompany() {
    this.store.dispatch(
      updateCompany({
        company: {
          changes: {
            AddressDetail: 'null',
            AddressId: 54,
            Description: '',
            Email: 'cuongt321hin121221h@cuongthinh.com',
            Name: 'Duy Phương',
            PhoneNumber: '0211199933',
            ShortName: 'null',
            Status: 1,
            Type: 1,
          },
          id: 3,
        },
      })
    );
  }
}
