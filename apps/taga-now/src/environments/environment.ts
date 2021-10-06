// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // baseURL: 'http://54.169.107.162/taganow',
  baseURL: 'https://b72s5wcbsk.execute-api.ap-southeast-1.amazonaws.com/Dev',
  s3Url: '',
  socketEndpoint: '',
  cognitoUserPoolId: 'ap-southeast-1_qVdTdUdEN',
  cognitoAppClientId: '737mpg4cbv9gos2ou76hljvasg',
  CHAT_SOCKET_ENPOINT:
    'wss://trr3pxeqx2.execute-api.ap-southeast-1.amazonaws.com/Dev/?Auth=',
  reconnectInterval: 5000,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
