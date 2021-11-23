import axios from "axios";

const base = {
    baseUrl: "http://api.tianapi.com",
    casenum: "/ncov/index",
    // casenum: "/txapi/ncovcity/index",
    ncovabroad: "/ncovabroad/index"
}

const api = {
    // 中国疫情
    getCaseNum(params) {
        return axios.get(base.baseUrl + base.casenum, {
            params
        })
    },
    // 抗击疫情数据
    getNcov() {
        return axios.get("api/news/wap/fymap2020_data.d.json"
        )
    },
    // 世界疫情
    getNcovabroad(params) {
        return axios.get(base.baseUrl + base.ncovabroad, {
            params
        })
    },

}
export default api