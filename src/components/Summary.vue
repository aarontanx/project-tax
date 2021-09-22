<template>
        <div> 
            <br>
            <b> Source Country: </b> {{ $store.state.src_cty }}
            <br>
            <b> Destination Country: </b> {{ $store.state.dst_cty }}
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
    /* margin: x; */
}
</style>
