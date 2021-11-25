<template>
  <div class="home">
    <Header></Header>
    <Covid19InfoVue :infoData="infoData"/>
    <CaseNumVue :modifyTime="modifyTime" :caseNumData="caseNumData"/>
    <MapVue />
    <Swiper />
    <SpringTravel />
    <div></div>
  </div>
</template>

<script>
// @ is an alias to /src
import api from "../api/index"
import Header from "../components/Header.vue"
import Covid19InfoVue from "../components/Covid19Info.vue"
import CaseNumVue from "../components/CaseNum.vue"
import MapVue from "../components/Map.vue"
import Swiper from '../components/Swiper.vue'
import SpringTravel from "../components/SpringTravel.vue"
export default {
  data(){
    return {
      infoData:{},
      modifyTime: 1,
      caseNumData:{},
    }
  },
  name: 'Home',
  components: {
    Header,
    Covid19InfoVue,
    CaseNumVue,
    MapVue,
    Swiper,
    SpringTravel
},
  mounted() {
    api.getCaseNum({
      key: "99a7d7eb3f723f31812ba4ccdf646da6",
    }).then((res) => {
      // console.log(res)
      if(res.status===200){
        this.infoData = {
        note1:res.data.newslist[0].desc.note1,
        note2:res.data.newslist[0].desc.note2,
        note3:res.data.newslist[0].desc.note3,
        remark1:res.data.newslist[0].desc.remark1,
        remark2:res.data.newslist[0].desc.remark2,
        remark3:res.data.newslist[0].desc.remark3
        }
        this.modifyTime=res.data.newslist[0].desc.modifyTime
         this.caseNumData = {
        modifyTime:res.data.newslist[0].desc.modifyTime,
        currentConfirmedCount:res.data.newslist[0].desc.currentConfirmedCount, // 	相比昨天现存确诊人数
        suspectedCount:res.data.newslist[0].desc.suspectedCount, // 累计境外输入人数
        seriousCount:res.data.newslist[0].desc.seriousCount, // 	现存无症状人数
        confirmedCount:res.data.newslist[0].desc.confirmedCount, // 	累计确诊人数
        deadCount:res.data.newslist[0].desc.deadCount, // 	累计死亡人数
        curedCount:res.data.newslist[0].desc.curedCount, // 	累计治愈人数
        currentConfirmedIncr:res.data.newslist[0].desc.currentConfirmedIncr, //  	相比昨天现存确诊人数
        suspectedIncr:res.data.newslist[0].desc.suspectedIncr, // 新增境外输入人数
        seriousIncr:res.data.newslist[0].desc.seriousIncr, // 	相比昨天现存无症状人数
        confirmedIncr:res.data.newslist[0].desc.confirmedIncr, // 	相比昨天累计确诊人数
        deadIncr:res.data.newslist[0].desc.deadIncr, // 	相比昨天新增死亡人数
        curedIncr:res.data.newslist[0].desc.curedIncr, // 	相比昨天新增治愈人数

      }
      }
    }).catch((error) => {
      console.log(error)
    })

  }
}
</script>
