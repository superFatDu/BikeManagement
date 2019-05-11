import jp from "jsonp";

export default class JsonP {
  static jsonp(options) {
    return new Promise((resolve, reject) => {
      jp(options.url, {
        param: "callback"
      }, (err, res) => {
        if (res.status === "1") {
          resolve(res.forecasts[0].casts[0]);
        }
      })
    })
  }
}