<template>
    <div>
        <div id="city"></div>
    </div>
</template>

<script>
import api from "../api/index"
export default {
    name: "City",
    props:{
      city:{
        type:String,
        default:""
      }

    },
    data() {
        return {
            cityData:[]
        }
    },
    mounted() {
            api.getNcov().then(res => {
              console.log(res)
              for (let i = 0; i < res.data.data.list.length; i++) {
                if(res.data.data.list[i].name === this.city){
                  for (let j = 1; j < res.data.data.list[i].city.length; j++) {
                    var temp = {
                      name: res.data.data.list[i].city[j].name+"市",
                      value: res.data.data.list[i].city[j].conNum
                      // itemStyle: {
                      //       normal: {
                      //           areaColor: this.setColor(
                      //               res.data.data.list[i].econNum
                      //           )
                      //       }
                      //   }

                      // 这里为什么拿到数据了，显示不了颜色什么呢，感觉那个世界地图炸了,你官方的腾讯疫情自己也不用世界地图
                    }
                      this.cityData.push(temp)
                  }                
                }
              }     
           })
           console.log(this.cityData)
           this.$charts.provinceMap("city",this.city,this.cityData)
    }
 
}
</script>

<style scoped>
#city {
    width: 375px;
    height: 400px;
}
</style>