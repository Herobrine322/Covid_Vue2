import axios from "axios";

const base = {
    baseUrl: "http://api.tianapi.com",
    ncov: "/ncov/index",
    casenum: "/txapi/ncovcity/index"

}

const api = {
    getNcov(params) {
        return axios.get(base.baseUrl + base.ncov, {
            params
        })
    },
    getCaseNum() {
        return axios.get("api/news/wap/fymap2020_data.d.json"
        )
    }
}
export default api