import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CiAuthStateService } from '@consult-indochina/auth';

@Injectable()
export class UserDropdownStore extends ComponentStore<Record<string, string>> {
  userName$: Observable<string | undefined>;
  userAvatar$: Observable<string>;

  constructor(private ciAuthStateService: CiAuthStateService) {
    super({});
    this.userName$ = this.ciAuthStateService.currentName$;
    this.userAvatar$ = this.ciAuthStateService.currentAvatar$;
  }
}
