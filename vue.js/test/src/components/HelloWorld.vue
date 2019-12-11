<template>
  <div>
   <h1>{{ title }}</h1>
   <p>{{ greeting() }}</p> 
  </div>
</template>

<script>
export default {
  data() {
    return  {
      title : 'your first Vue file , woooo!'
    }
  },
  
  methods:{
    greeting:function(){
      return 'heey cowboy'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
