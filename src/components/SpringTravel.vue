<template>
  <div class="spring">
      <h3 class="title">春节旅行各地政策</h3>
      <div>
<van-field
  v-model="goCity"
  is-link
  readonly
  label="地区"
  placeholder="请选择出发所在地区"
  @click="show = true"
/>
<van-popup v-model="show" round position="bottom">
  <van-cascader
    v-model="goCity"
    title="请选择出发所在地区"
    :options="options"
    @close="show = false"
    @finish="onFinish"
  />
</van-popup>
<van-field
  v-model="onCity"
  is-link
  readonly
  label="地区"
  placeholder="请选择目的地所在地区"
  @click="show = true"
/>
<van-popup v-model="show" round position="bottom">
  <van-cascader
    v-model="onCity"
    title="请选择目的地所在地区"
    :options="options"
    @close="show = false"
    @finish="onFinish"
  />
</van-popup>
<van-button type="primary">查看政策</van-button>
        </div>
     </div>
</template>

<script>
import api from "../api";
export default {
  data() {
    return {
      show: false,
      goCity:"",    // 触发城市
      onCity:"",    // 到达城市
      fieldValue: '',
      cascaderValue: '',
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [
        {
          text: '浙江省',
          value: '330000',
          children: [{ text: '杭州市', value: '330100' }],
        },
        {
          text: '江苏省',
          value: '320000',
          children: [{ text: '南京市', value: '320100' }],
        },
      ],
    };
  },
  methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish({ selectedOptions }) {
      this.show = false;
      this.fieldValue = selectedOptions.map((option) => option.text).join('/');
    },
  },
  mounted(){
      api.springTravel({
          key:"171e165a7d991c5f6ecd5194c54778ef"
      }).then(res =>{
          console.log(res)
      })
  }
};
</script>

<style scoped>
.spring{
    width:100%;
    background: #fff;
    padding: 10px;
    box-sizing: border-box;
}

.spring .title{
    font-size: 0.16rem;
    margin: 0 0 0.08rem 0.16rem;
}
</style>