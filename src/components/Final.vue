<template>
<body>
    <div class='result'>
    <Summary />
    <br>
        <h3> Estimated Cost </h3>
        <br>
        <b>SST Value: </b> MYR {{ Number($store.state.LclSSTValue).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }}
        <br>
        <b>Import Duty Value: </b> MYR {{ Number($store.state.LclDutyValue).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }}
        <br>
        <b>Final Estimated Price: </b> MYR {{ Number($store.state.finalValue).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }}
    </div>
</body>
</template>

<script>
import Summary from './Summary.vue'

export default {
    name: 'Final',
    components: {
        Summary
    }
}
</script>

<style scoped>
    
 .result {
    min-width: 50px;
    padding: 20px;
    margin: 30px auto;
    overflow: auto;
    min-height: 30px;
    border: 1px solid steelblue;
    /* padding: 30px; */
    border-radius: 30px;
    /* background-color: lightblue; */
    background-color: #ddd; 
    }

/* body {
    background-color: #ddd;  
    margin: 3rem;
    border-radius: 30px;}

#tv {
  position: relative;
  width: 350px;
  height: 550px;
  background: white;
  border-radius: 0% 0% 0% 0% / 0% 0% 0% 0% ;
  color: white;
  box-shadow: 20px 20px rgba(0,0,0,.15);
  transition: all .4s ease;
}
#tv:hover {
  border-radius: 0% 0% 50% 50% / 0% 0% 5% 5% ;
  box-shadow: 10px 10px rgba(0,0,0,.25);
} */

h3 {
    margin-bottom: -1%;
}
</style>
