<template>
            
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
    }
</style>
