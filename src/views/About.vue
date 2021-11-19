<template>
<div>
    <div id="line">
  </div>
</div>
</template>

<script>
export default {
  mounted(){
    console.log(this.$charts.line)
    this.$charts.line("line")
  }

}
</script>

<style>
#line{
  width: 400px;
  height: 400px;
}
</style>