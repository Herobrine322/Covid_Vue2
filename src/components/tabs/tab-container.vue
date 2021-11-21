<script>

export default {
  name:"TabContainer",
  data(){
    return{

    }
  },
  props:{
    panes:{
      type:Array,
      default:function(){
        return []
      }
    }
  },
  render(){

    var contents = this.panes.map((element,index) => {
      return <div style={{display:element.active ? 'block':'none'}}>{element.$slots.default}</div>;
    })

    return(
      <div class="tab-content">
        { contents }
      </div>
    )
  }
}

</script>

<style lang="css" scoped>
</style>
