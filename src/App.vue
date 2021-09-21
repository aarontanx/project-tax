<template >
<div class='background fullscreen'>
  <Header />
  <MainContainer />
</div>
</template>


<script>
import MainContainer from './components/MainContainer.vue'
import Header from './components/Header.vue'

export default {
  components: { 
    MainContainer,
    Header
    }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.background {
  margin: 1%;
  padding-top: 1%;
  background: linear-gradient(to bottom, #ccffff 30%, #ffffff 100%);
  position: relative;
  height: auto;
  min-height: 100%;
  min-width: 100%;
}

</style>
