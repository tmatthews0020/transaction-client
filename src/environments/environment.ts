// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  createTransactionApiUrl:
    "https://60l83ivu1c.execute-api.us-east-1.amazonaws.com/dev/transaction/create",
  listTransactionsApiUrl:
    "https://60l83ivu1c.execute-api.us-east-1.amazonaws.com/dev/transaction/list",
  createCategoryApiUrl:
    "https://ppekqeriok.execute-api.us-east-1.amazonaws.com/dev/category/create",
  listCategoriesApiUrl:
    "https://ppekqeriok.execute-api.us-east-1.amazonaws.com/dev/category/list",
  authUrl:
    "https://login.tmatthews.dev/login?client_id=53gif49rs1d5hnefoq77c7a5ui&response_type=token&scope=aws.cognito.signin.user.admin+openid+phone+email+profile&redirect_uri=http://localhost:4200/auth",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
