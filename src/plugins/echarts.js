import echarts from "echarts"

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
                                enterable: false,    // 小灰片还能不能继续点
                                formatter(data) {
                                    return "<a style='color:#fff' href='#/city/" + data.name + "'><div><p>" + data.seriesName + ":" + data.name + "</p><p>确诊:" + data.value + "</p></div></a>"
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
                                name: "地区",
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
                    // line: function (id) {
                    //     var dom = document.getElementById(id);
                    //     var myChart = echarts.init(dom);
                    //     var option = {
                    //         xAxis: {
                    //             type: 'category',
                    //             data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    //         },
                    //         yAxis: {
                    //             type: 'value'
                    //         },
                    //         series: [
                    //             {
                    //                 data: [150, 230, 224, 218, 135, 147, 260],
                    //                 type: 'line'
                    //             }
                    //         ]
                    //     }
                    //     myChart.setOption(option);
                    // }
                }
            }
        }
    })

}
export default install