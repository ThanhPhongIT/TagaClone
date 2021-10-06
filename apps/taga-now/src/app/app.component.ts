import { Component, ElementRef, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ResolveEnd, Router } from '@angular/router';
import {
  CiAuthService,
  CiAuthStateService,
  getDeepestChildSnapshot,
} from '@consult-indochina/auth';
import { AppService } from '@taga-now/shared/app-config';
import { filter } from 'rxjs/operators';
import { AppConfigService } from './utils/services/app-config.service';
@Component({
  selector: 'tgn-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  constructor(
    private appService: AppService,
    private _elementRef: ElementRef,
    private readonly router: Router,
    private title: Title,
    private ciAuthStateService: CiAuthStateService,
    private authService: CiAuthService
  ) {
    this.appService.init({ splashScreen: true });
  }

  ngOnInit() {
    console.log(AppConfigService.settings);
    // this._elementRef.nativeElement.removeAttribute('ng-version');

    // let rtokexp = +JSON.parse(localStorage.getItem('tokenData')).accessToken.payload.exp|| null;
    // if (rtokexp && rtokexp > new Date().getTime()) {
    //   localStorage.clear();
    //   this.router.navigate(['/log-in']);
    // }
    setTimeout(()=>{this.appService.hideSplashScreen()}, 1000)

    // this.setupRouteTitleListener();
    // this.authService.retrieveTokenOnPageLoad(); // setup authState
    // this.ciAuthStateService.isAuthorized$.subscribe(() => {
    //   this.appService.hideSplashScreen();
    // });
  }

  private setupRouteTitleListener() {
    this.router.events
      .pipe(filter((ev) => ev instanceof ResolveEnd))
      .subscribe((ev: ResolveEnd) => {
        const { data } = getDeepestChildSnapshot(ev.state.root);
        if (data && data.title) this.title.setTitle(data.title + ' | TAGANOW');
      });
  }
}
