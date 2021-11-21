<script>

export default {
  name:"Tab",
  data(){
    return{

    }
  },
    // this就是整个<tab></tab>
    // this.$slot.default就是读取tab的插条，就是tab里包含的东西，
    // 然后放进他爸爸的tabs里的pans数组里，用来渲染
  mounted(){
    this.$parent.panes.push(this);
  },

  computed:{
    active(){
      return this.$parent.currentIndex == this.index;
    }
  },

  props:{
    label:{
      type:String,
      default:"tab"
    },
    index:{
      type:[String,Number],
      required:true
    }
  },

  methods:{
    handlerClick(event){
      this.$parent.getIndex(this.index)
    }
  },

  render(){
       // currentIndex === index ? active : ''
    let tab = this.$slots.label || this.label;

    let classNames = {
      tab:true,
      active:this.active
    }
        // 这里高亮就加class，class为TRUE就加上去
        // clickItemHandle方法
    return(
      <li class={classNames} onClick={this.handlerClick}>
        {tab}
      </li>
    )
  }
}

</script>

<style lang="css" scoped>

.tab{
  flex:1;
  text-align: center;
  list-style:none;
  line-height:40px;
  margin-right:30px;
  position:relative;
  bottom:-2px;
  cursor:pointer;
}

.tab.active{
  border-bottom:2px solid blue;
}

.tab.last-child{
  margin-right:0;
}

</style>
