<template>
<ul>
    <li v-for="ninja in Ninjas"{{ ninja }}></li>
</ul>
</template>

<script>
export default {
  data() {
    return  {
    Ninjas:['Yoshi', 'Mario', 'Ryu']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
