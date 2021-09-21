<template >
<div class='background'>
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

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */

.background {
  margin: 1%;
  padding-top: 1%;
  background: linear-gradient(to bottom, #ccffff 5%, #ffffff 15%);
  /* display : flex; */
  /* height : 100vh; */
  /* width : 100vw; */
  /* overflow: auto; */
  /* display: block; */
  /* min-height : 100%; */
  /* display: flex;
    width:100%;
    height:100%; */
  position: relative;
  height: auto;
  min-height: 100%;
}
</style>
