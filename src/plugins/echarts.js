import echarts from "echarts"
import worldMap from "../data/worldMap";

const install = function (Vue) {
    Object.defineProperties(Vue.prototype, {
        $charts: {
            get() {
                return {
                    chinaMap(id, data) {
                        this.chart = echarts.init(document.getElementById(id));
                        var option = {
                            // 提示信息,小灰片
                            tooltip: {
                                triggerOn: "click",
                                enterable: true,    // 小灰片还能不能继续点
                                formatter(data) {
                                    return "<a style='color:#fff' href='#/city/" + data.name + "'><div><p>" + data.seriesName + ":  " + data.name + "</p><p>确诊:  " + data.value + "</p><p>点击详情</p></div></a>"
                                }
                            },
                            // 映射-颜色  http://echarts.apache.org/zh/option.html#visualMap
                            visualMap: [{
                                orient: "vertical",   // hertical水平
                                type: "piecewise",    // 类型为分段型。
                                pieces: [
                                    { min: 0, max: 0, color: "#FFFFFF" },
                                    { min: 1, max: 10, color: "FDFDCF" },
                                    { min: 10, max: 100, color: "#FE9E83" },
                                    { min: 100, max: 500, color: "#E55A4E" },
                                    { min: 500, max: 10000, color: "#4F070D" },
                                ]
                            }],
                            series: [{
                                name: "省",
                                type: 'map',
                                map: "china",
                                roam: false,
                                zoom: 1.2,
                                label: {
                                    normal: {
                                        show: true,
                                        textStyle: {
                                            fontSize: 8
                                        }
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        areaColor: 'rgba(0,255,236,0)',
                                        borderColor: 'rgba(0,0,0,0.2)',
                                    },
                                    emphasis: {
                                        areaColor: 'rgba(255,180,0,0.8)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                },
                                data: data
                                // data:[
                                //     {name:"北京",value:191,itemStyle:{ normal:{ areaColor:"#ff0000" } }},
                                //     {name:"内蒙古",value:191,itemStyle:{ normal:{ areaColor:"#ff0000" } }}
                                // ]
                            }]
                        }
                        this.chart.setOption(option)
                    },
                    worldMap(id, data) {
                        var myEcharts = echarts.init(document.getElementById(id));
                        var option = {
                            tooltip: {
                                triggerOn: "click",
                                enterable: false,    // 鼠标是否可进入提示框浮层中，默认为false，如需详情内交互，如添加链接，按钮，可设置为true。
                                formatter(data) {   // href:设置和router-link一样能跳转的路由，
                                    return "<a style='color:#fff' href='#/city/" + data.name + "'><div><p>" + data.seriesName + ":" + data.name + "</p><p>确诊:" + data.value + "</p></div></a>"
                                }
                            },
                            // 映射-颜色  http://echarts.apache.org/zh/option.html#visualMap
                            visualMap: [{
                                orient: "vertical",   // hertical水平
                                type: "piecewise",    // 类型为分段型。
                                pieces: [
                                    { min: 0, max: 0, color: "#FFFFFF" },
                                    { min: 1, max: 4999, color: "#ffe5db" },
                                    { min: 5000, max: 9999, color: "#ffc4b3" },
                                    { min: 10000, max: 100000, color: "#ff9985" },
                                    { min: 100000, max: 1000000, color: "#ff6a57" },
                                    { min: 1000000, max: 5000000, color: "#e83132" },
                                    { min: 5000000, max: 10000000, color: "#b80909" },
                                    { gt: 10000000, color: "#8a0808" },
                                ]
                            }],
                            series: [{
                                name: "国家",
                                type: 'map',  // 配置图表类型
                                map: "world",// 地图类型
                                roam: true, // 是否允许缩放  
                                zoom: 1.2,   // 地图缩放比例
                                label: {     // 配置地图
                                    normal: {
                                        show: false,     // 控制地图显示名字
                                        textStyle: {
                                            fontSize: 8
                                        }
                                    }
                                },
                                nameMap: worldMap.nameMap,
                                itemStyle: {       // 配置地图样式
                                    normal: {
                                        areaColor: 'rgba(0,255,236,0)',
                                        borderColor: 'rgba(0,0,0,0.2)',
                                    },
                                    emphasis: {    // 选中区域颜色及阴影效果等
                                        areaColor: 'rgba(255,180,0,0.8)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                },
                                data: data
                            }]

                        }

                        myEcharts.setOption(option)

                    },
                    provinceMap(id, cityName, data) {
                        this.chart = echarts.init(document.getElementById(id));
                        var option = {
                            tooltip: {
                                triggerOn: "click",
                                enterable: false,
                                formatter(data) {
                                    return "<div><p>" + data.name + "</p><p>现存确诊: " + data.value + "</p></div>"
                                }
                            },
                            // 映射-颜色  http://echarts.apache.org/zh/option.html#visualMap
                            visualMap: [{
                                orient: "vertical",   // hertical水平
                                type: "piecewise",    // 类型为分段型。
                                pieces: [
                                    { min: 0, max: 0, color: "#FFFFFF" },
                                    { min: 1, max: 10, color: "FDFDCF" },
                                    { min: 10, max: 100, color: "#FE9E83" },
                                    { min: 100, max: 500, color: "#E55A4E" },
                                    { min: 500, max: 10000, color: "#4F070D" },
                                ]
                            }],
                            series: [{
                                name: "省",
                                type: 'map',
                                map: cityName,  // 只能用中文
                                roam: false,
                                zoom: 1.2,
                                label: {
                                    normal: {
                                        show: true,
                                        textStyle: {
                                            fontSize: 8
                                        }
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        areaColor: 'rgba(0,255,236,0)',
                                        borderColor: 'rgba(0,0,0,0.2)',
                                    },
                                    emphasis: {
                                        areaColor: 'rgba(255,180,0,0.8)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                },
                                data: data

                            }]
                        }
                        this.chart.setOption(option)
                    }
                }
            }
        }
    })


}
export default install