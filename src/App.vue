<template >
<div class='background fullscreen'><Header /></div>
<div class="container">
  <div class='container__sidebar'> <TaxDescription /> </div>
</div>
<div class="container">
<div class='container__main'> <MainContainer /></div>
</div>
<div class="container">
<div class='container__main'> <Final /></div>
</div>
</template>


<script>
import TaxDescription from './components/TaxDescription'
import MainContainer from './components/MainContainer.vue'
import Header from './components/Header.vue'
import Final from './components/Final.vue'


export default {
  components: { 
    MainContainer,
    Header,
    TaxDescription,
    Final
    }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}


.background {
  /* margin: 1%; */
  padding-top: 1%;
  background: linear-gradient(to bottom, #ccffff 30%, #ffffff 100%);
  /* position: relative; */
  /* height: auto; */
  /* min-height: 100%; */
  /* min-width: 100%; */
}
.container {
    /* display: flex; */
}
.container__sidebar {
    /* width: 30%; */
}

.container__main {
    /* Take the remaining width */
    flex: 1;

    /* Make it scrollable */
    overflow: auto;
}
</style>
