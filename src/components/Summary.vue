<template>
        <div> 
            <h3> Selection </h3>
            <br>
            <b> Country </b> 
            <br>
            {{ $store.state.src_cty }} &rarr; {{ $store.state.dst_cty }}
            <br>
            <b> Category Selected: </b> {{ $store.state.categorySelected }}
            <br>
            <b> SST Rate: </b> {{ $store.state.sstRate*100 }} %
            <br>
            <b> Import Duty Rate: </b> {{ $store.state.importDutyRate*100 }} %
            <br>
            <b> Currency Selected: </b> {{ $store.state.currencySelected }}
            <br>
            <b> Exchange Rate: </b> {{ $store.state.exchangeRate }}
            <br>
            <b> Local MYR Value: </b> {{ Number($store.state.itemLclValue).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }}
            <br>
            <b> Above Threshold? (MYR {{ $store.state.threshold }}) </b> : <span v-if='$store.state.aboveThreshold'> Yes </span> <span v-else> No </span> 
    </div>
</template>

<script>
export default {
    name: 'Summary'
}

</script>

<style scoped>
h3 {
    margin-bottom: -1%;
    margin-top: -0.7%;
}
</style>
