// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  newsChnnels: ['cnn', 'google-news', 'the-washington-times', 'the-new-york-times', 'national-geographic',
  'fox-news', 'usa-today', 'the-wall-street-journal', 'mtv-news'],
  sourcesURL: 'https://newsapi.org/v2/sources?apiKey=e3215bd34807454996b9c3b1444aa82a',
  apiKey: '&apiKey=e3215bd34807454996b9c3b1444aa82a',
  topHeadlines: 'https://newsapi.org/v2/top-headlines?sources=',
  localService: 'http://localhost:3000/',
  localServiceNews: 'http://localhost:3000/news/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
