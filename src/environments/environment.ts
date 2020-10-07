// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiBase: "https://apiv2.apifootball.com/?action=",
  apiKey:
    "&APIkey=3d9d1a1e7852e4a9c72641af14afa412dcdbe72ce90aeef0b0da8289600dc197",
  api1: "fd67343efddc02187d86d13f23d14ce2b6f138e91d340a42d4093dddf6834d7d",
  api2: "3d9d1a1e7852e4a9c72641af14afa412dcdbe72ce90aeef0b0da8289600dc197",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
// {
//   "country_id": "41",
//   "country_name": "England",
//   "league_id": "148",
//   "league_name": "Premier League"
// },

// https://apiv2.apifootball.com/?action=get_leagues&country_id=41&APIkey=fd67343efddc02187d86d13f23d14ce2b6f138e91d340a42d4093dddf6834d7d
// https://apiv2.apifootball.com/?action=get_leagues&id=148&APIkey=fd67343efddc02187d86d13f23d14ce2b6f138e91d340a42d4093dddf6834d7d

// https://apiv2.apifootball.com/?action=get_standings&league_id=148&APIkey=fd67343efddc02187d86d13f23d14ce2b6f138e91d340a42d4093dddf6834d7d
// https://apiv2.apifootball.com/?action=get_standings&league_id=148&APIkey=fd67343efddc02187d86d13f23d14ce2b6f138e91d340a42d4093dddf6834d7d

// https://apiv2.apifootball.com/?action=get_events&fleague_id=148&APIkey=fd67343efddc02187d86d13f23d14ce2b6f138e91d340a42d4093dddf6834d7d

// https://apiv2.apifootball.com/?action=get_events&from=2020-06-26&to=2020-06-27&league_id=148&APIkey=fd67343efddc02187d86d13f23d14ce2b6f138e91d340a42d4093dddf6834d7d

// https://apiv2.apifootball.com/?action=get_teams&team_id=2611&APIkey=fd67343efddc02187d86d13f23d14ce2b6f138e91d340a42d4093dddf6834d7d
