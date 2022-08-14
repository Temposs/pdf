import axios, { AxiosResponse } from "axios";


export class NacharbeitFetcher {
    constructor() {}

    // Gets data for nacharbeit dashboard including 16 barCharts and 16 QStables.
    async getData() {
        // console.log(dataRequests)
        return axios({
            method: 'POST',
            url: "https://quickchart.io/apex-charts/render?config={%20chart:%20{%20type:%20%27line%27%20},%20series:%20[{%20name:%20%27sales%27,%20data:%20[31,40,35,50,49,60,70,91,125]%20}],%20xaxis:%20{%20categories:%20[1991,1992,1993,1994,1995,1996,1997,%201998,1999]%20}%20}",
            headers: {
                "Access-Control-Allow-Origin": '*',
                "Content-Type": "multipart/form-data",
                Accept: 'application/json',
                "mode": 'no-cors'
            },
            validateStatus: function (status) {
                return status >= 200 || status <= 300 || status === 401 ? true : false
            }
        }).then((res) => {
            if (res.status === 401) throw new Error("Not authorized to access resource");
            if (res.status >= 300) throw new Error(`Server responded with: ${res.status} ${res.data.message}`);
            // console.log(res.data)
            return res.data
        }).catch((e) => {
            throw e
        })
    }
}