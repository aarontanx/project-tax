<template >
<div class="fullscreen">
<div class='background'><Header /></div>
<div class='container__sidebar'> <TaxDescription /> </div>

<div class="container">
<div class='container__main'> <Form /></div>
<div class='container__main'> <Final /></div>
</div>
</div>
</template>


<script>
import TaxDescription from './components/TaxDescription'
import Form from './components/Form.vue'
import Header from './components/Header.vue'
import Final from './components/Final.vue'


export default {
  components: { 
    Form,
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
  background: linear-gradient(to bottom, #455EB5 10%, #ffffff 100%);
  /* position: relative; */
  /* height: auto; */
  /* min-height: 100%; */
  /* min-width: 100%; */


}

.fullscreen {
  position: absolute; 
  top: 0; 
  left: 0;
  width: 100%;
  height: 100%;
}
.container {
    /* display: flex; */
    border: 1px;
    border-color: black;
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
