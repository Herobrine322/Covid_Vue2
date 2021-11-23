<template>
  <div class="chart">
      <h3 class="title">全国</h3>
      <!-- red: #访问子组件实例或子元素尽管存在prop和事件，有的时候你仍可能需要在JavaScript里直接访问一个子组件。为了达到这个
目的，你可以通过添加ref属性, 比如这里的<swiper />可以通过：this.$refs.mySwiper来拿到 -->
      <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="(slide,index) in swiperData" :key="index">
              <img :src="slide.imgUrl" alt="">
          </swiper-slide>
          <!-- <div class="swiper-pagination" slot="pagination"></div> -->
      </swiper>
      <ul class="navigator">                        
             <!-- changePage是改变点击按钮时，下标要怎么哪呢? swiper轮播图里有个on自定义事件slideChangeTransitionEnd可以拿，
                  定义currentIndex表示现在的下标，然后根据是否要添加active来改变样式 -->
          <li @click="changePage(index)" :class="{ active:index === currentIndex }"
            class="navigatorItem"
            v-for="(item,index) in swiperData"
            :key="index"
          >{{ item.title }}</li>
      </ul>
  </div>
</template>

<script>
// 按需引入
import{ Swiper, SwiperSlide, directive } from "vue-awesome-swiper";

// 根据你的swiper的版本来引入：
//import style(>=Swiper 6.x) import ' swiper/swiper-bundle. css'
//import style(<=Swiper 5.x) import ' swiper/css/swiper. css'
import 'swiper/css/swiper.css';
export default {
    data(){
        let that = this;
        return{
            currentIndex:0,    // 当前滚动到哪的下标
            swiperOptions:{     // 配置swiper
              pagination: {
                el: ".swiper-pagination",
              },
              autoplay: true,    // 自动播放
                on:{             // 自定义事件，this指的是swiper对象 slideChangeTransitionEnd的swiper对象能直接拿activeIndex
                    slideChangeTransitionEnd(){
                        that.currentIndex = this.activeIndex
                    }
                }
            },
            swiperData:[
                 {
                    imgUrl:
                        "https://img1.dxycdn.com/2020/0220/014/3397684583507458039-135.png",
                    title: "新增疑似/新增确诊"
                },
                {
                    imgUrl:
                        "https://img1.dxycdn.com/2020/0220/697/3397684611424536901-135.png",
                    title: "现存确诊/现存疑似"
                },
                {
                    imgUrl:
                        "https://img1.dxycdn.com/2020/0220/861/3397684624309439853-135.png",
                    title: "死亡/治愈"
                },
                {
                    imgUrl:
                        "https://img1.dxycdn.com/2020/0220/168/3397686703073768694-135.png",
                    title: "病死率"
                },
                {
                    imgUrl:
                        "https://img1.dxycdn.com/2020/0220/709/3397686724548816431-135.png",
                    title: "治愈率"
                }
            ]   
        }
    },
     components: {
        Swiper,
        SwiperSlide,
    },
    directives: {            // swiper变成一个指令
      swiper: directive   
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper;
      }
    },
    mounted(){
    },
    methods:{
        changePage(index){
            this.currentIndex = index  // 高亮
            this.swiper.slideTo(index,1000,false)  // swiper切换（动画）
        }
    }
}
</script>

<style scoped>

.line{
    width: 100%;
    height: 300px;
}
.chart {
    position: relative;
    background: #fff;
    padding: 0.16rem 0;
}
.chart .title {
    font-size: 0.16rem;
    margin: 0 0 0.08rem 0.16rem;
}
.chart .swiper-pagination {
    position: absolute;
    text-align: center;
    -webkit-transition: 300ms opacity;
    -o-transition: 300ms opacity;
    transition: 300ms opacity;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    z-index: 10;
}
.chart .swiper-pagination-bullet {
    width: calc(20% - 0.02rem);
    text-align: center;
    background: #f7f7f7;
    padding: 0.045rem;
    box-sizing: border-box;
    color: #666;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.02rem;
}
.navigator {
    font-size: 0.12rem;
    list-style: none;
    display: flex;
    padding: 0 0.16rem;
    justify-content: center;
    margin: 0.06rem 0 0;
}
.navigatorItem {
    color: #4169e2;
    background: #f1f5ff;
    position: relative;
    width: calc(20% - 0.02rem);
    text-align: center;
    background: #f7f7f7;
    padding: 0.045rem;
    box-sizing: border-box;
    color: #666;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.02rem;
    margin-left: 0.025rem;
}
.active {
    color: #4169e2;
    background: #f1f5ff;
    position: relative;
}

</style>