<template>
        <div> 
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
            <b> Local MYR Value: </b> {{ Number($store.state.itemLclValue).toLocaleString() }}
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
