import axios, { AxiosResponse } from "axios";

export class NacharbeitFetcher {
  constructor() {}

  // Gets data for nacharbeit dashboard including 16 barCharts and 16 QStables.
  async getData() {
    // console.log(dataRequests)
    return axios({
      method: "POST",
      url: "https://quickchart.io/apex-charts/render",
      headers: {
        "responseType": 'array/buffer'
      },
      data: {
        width: 600,
        height: 450,
        config: {
            chart: { type: "line" },
            series: [
              { name: "sales", data: [31, 40, 35, 50, 49, 60, 70, 91, 125] },
            ],
            xaxis: {
              categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
            },
        }
      },
      validateStatus: function (status) {
        return status >= 200 || status <= 300 || status === 401 ? true : false;
      },
    })
      .then((res) => {
        if (res.status === 401)
          throw new Error("Not authorized to access resource");
        if (res.status >= 300)
          throw new Error(
            `Server responded with: ${res.status} ${res.data.message}`
          );
        // console.log(res.data)
        return res;
      })
      .catch((e) => {
        throw e;
      });
  }
}
