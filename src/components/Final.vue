<template>
    <div class='result'>
        <h3> Estimated Cost </h3>
        <br>
        <b>SST Value: </b> MYR {{ $store.state.LclSSTValue}}
        <br>
        <b>Import Duty Value: </b> MYR {{ $store.state.LclDutyValue}}
        <br>
        <b>Final Estimated Price: </b> MYR {{ $store.state.finalValue }}
    </div>
</template>

<script>
export default {
    name: 'Final',
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
