<script>

import tabContainer from "./tab-container"

export default {
  name:"tabs",
  data(){
    return{
      panes:[]
    }
  },
             // 从外面标签传数据过来接收是用pros
  props:{
    currentIndex:{
      type:[String,Number],
      required:true
    }
  },
  components:{
    tabContainer
  },
      // 这个方法在子类tab里调用,点击的时候调用
  methods:{
    getIndex(index){
            // $emit由内往外面传自定义事件, onIndex自定义事件,并且携带数据传出去
            // 外面是:<tabs> :currentIndex="currentIndex" @onInddx="getIndex"</tabs>
            // 所以给那边的getIndex(index)方法里传递了index
      this.$emit("onIndex",index);
    }
  },
  
  render(){
        // this.$slot.default： pans=[<div>内容1</div>，<div>内容2</div>，<div>内容1</div>]
        // this.default： pans=[<tab index="1" label="tab1"><div>内容1</div></tab>...]
        // 给content组件传递数据,然后content用props来接收,这里相当于
    return(
      <div class="tabs">
        <ul class="tabs-header">
           {this.$slots.default}
        </ul>
        <tabContainer panes={this.panes}/>
      </div>
    )
  }
}


</script>

<style lang="css" scoped>

.tabs-header{
  display:flex;
  list-style:none;
  margin:0;
  padding:0;
  border-bottom:2px solid #ededed;
}

</style>
