<template>
    <div>
        <p class="title">
            <i></i> 疫情地图
        </p>
<div id="app">
    <tabs :currentIndex="currentIndex" @onIndex="getCurrentIndex" >
        <tab index="1" label="国内疫情">
            <div id="chinaMap"></div>
        </tab>
        <tab index="2" label="国外疫情">
            <div id="worldMap"></div>
        </tab>
    </tabs>  
</div>
    </div>
</template>

<script>
import api from "../api/index"

// 处理并发网络请求
import axios from "axios";
export default {
    name: "Map",
    data() {
        return {
            cityMapData: [],
            currentIndex:1,

            windowWidth: document.documentElement.clientWidth,  //实时屏幕宽度
            windowHeight: document.documentElement.clientHeight,   //实时屏幕高度
        };
    },
    mounted() {
        var that = this;
        // 并发网络请求
        function Ncov(){
            return axios.get("api/news/wap/fymap2020_data.d.json")
            
        }
        function NocvaBroad(){
            return axios.get("http://api.tianapi.com/ncovabroad/index?key=99a7d7eb3f723f31812ba4ccdf646da6")
        }   
        // 合并网络请求
         axios.all([Ncov(),NocvaBroad()]).then(
             axios.spread((Ncov,NocvaBroad)=>{
             // 现在两个请求都执行完成了
            //  处理第一个请求
                console.log(Ncov.data.data)
                for (let i = 0; i < Ncov.data.data.list.length; i++) {
                    var temp = {
                        name: Ncov.data.data.list[i].name,
                        value: Ncov.data.data.list[i].econNum,
                        itemStyle: {
                            normal: {
                                areaColor: this.setColor(
                                    Ncov.data.data.list[i].econNum
                                )
                            }
                        }
                    };
                    this.cityMapData.push(temp);
                }
                //{name:‘俄罗斯’，value：28397.812}，
                let worlds = [];
                console.log(NocvaBroad)
                for (let j = 0; j < NocvaBroad.data.newslist.length; j++) {
                    let temp = {
                        name: NocvaBroad.data.newslist[j].provinceName,
                        value: NocvaBroad.data.newslist[j].currentConfirmedCount
                    }
                    worlds.push(temp)
                    
                }
                console.log(worlds)
                this.$charts.chinaMap("chinaMap", this.cityMapData);
                this.$charts.worldMap("worldMap", worlds)
            

         }))


// 地图组件这里不能在这里渲染，避免多次渲染，因为地图请求拿到数据又会渲染一次
// 网络请求拿疫情数据
        // api.Ncov()
        //     .then(res => {
        //         console.log(res.data.data)
        //         for (let i = 0; i < res.data.data.list.length; i++) {
        //             var temp = {
        //                 name: res.data.data.list[i].name,
        //                 value: res.data.data.list[i].econNum,
        //                 itemStyle: {
        //                     normal: {
        //                         areaColor: this.setColor(
        //                             res.data.data.list[i].econNum
        //                         )
        //                     }
        //                 }
        //             };
        //             this.cityMapData.push(temp);
        //         }
        //         this.$charts.chinaMap("chinaMap", this.cityMapData);
        //         this.$charts.worldMap("worldMap")
        //     }).catch(res => {
        //         console.log(res)
        //     }),
            
        // <!--把window.onresize事件挂在到mounted函数上-->
        window.onresize = () => {
            return (() => {
              window.fullHeight = document.documentElement.clientHeight;
                window.fullWidth = document.documentElement.clientWidth;
              that.windowHeight = window.fullHeight;  // 高
              that.windowWidth = window.fullWidth; // 宽
            })()
          };
    },
    methods: {
        setColor(value) {
            let currentColor = "";
            switch (true) {
                case value == 0:
                    currentColor = "#fff";
                    break;
                case value > 0 && value < 10:
                    currentColor = "#FDFDCF";
                    break;
                case value >= 10 && value < 100:
                    currentColor = "#FE9E83";
                    break;
                case value >= 100 && value < 500:
                    currentColor = "#E55A4E";
                    break;
                case value >= 500 && value < 10000:
                    currentColor = "#4F070D";
                    break;
            }
            return currentColor;
        },
         getCurrentIndex(index){
      this.currentIndex = index;
    }
    },
    // <!--在watch中监听实时宽高-->
    watch: {
      windowHeight (val) {
        let that = this;
        console.log("实时屏幕高度：",val, that.windowHeight );
      },
      windowWidth (val) {
        let that = this;
        console.log("实时屏幕宽度：",val, that.windowHeight );
      }

}
}
</script>

<style>
#worldMap{
    width: 1371px;
    height: 400px; 
}
#chinaMap {
    width: var (--windowwidth);
    height: 400px;
}
.title {
    border-top: 0.005rem solid #ebebeb;
    border-bottom: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    height: 0.44rem;
    padding: 0 0.16rem;
    font-weight: 500;
    font-size: 0.17rem;
    line-height: 0.44rem;
    background: #fff;
}
.title::before{
    content:"";
    width: 5px;
    height: 20px;
    background: #4169e2;
    margin-right: 10px;
}
</style>