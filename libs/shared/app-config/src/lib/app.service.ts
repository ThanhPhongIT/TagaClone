import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface AppOptions {
  splashScreen?: boolean | string;
}

/**
 * General app related methods
 */
@Injectable({
  providedIn: 'root',
})
export class AppService {
  private options: AppOptions = {};

  // custom data
  customData: Record<string, unknown> = {};

  // auto data
  host = '';

  init(
    options: AppOptions = {},
    customData: Record<string, unknown> = {},
    dataLoader?: Observable<Record<string, unknown>>
  ) {
    this.options = options;
    this.customData = customData;
    // remote custom data
    if (dataLoader) {
      dataLoader.subscribe(
        (remoteData) =>
          (this.customData = {
            ...this.customData,
            ...remoteData,
          })
      );
    }

    // set app host
    this.setHost();
    // done
    return this as AppService;
  }

  getData<Value>(key: string) {
    return (this.customData || {})[key] as Value;
  }

  hideSplashScreen() {
    if (this.options.splashScreen) {
      const elm = document.getElementById(
        typeof this.options.splashScreen === 'string'
          ? this.options.splashScreen
          : 'app-splash-screen'
      );
      if (elm) {
        elm.classList.add('hidden');
        setTimeout(() => elm.parentNode?.removeChild(elm), 1000);
      }
    }
  }

  private setHost() {
    const baseHref = (
      (document.getElementsByTagName('base')[0] || {})['href'] || ''
    ).slice(0, -1);
    if (baseHref) {
      this.host = baseHref;
    } else {
      const hrefSplit = window.location.href.split('/').filter(Boolean);
      this.host = hrefSplit[0] + '//' + hrefSplit[1];
    }
  }

}
