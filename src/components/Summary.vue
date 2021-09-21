<template>
        <div> 
            <br>
            Category Selected: {{ $store.state.categorySelected }}
            <br>
            SST Rate: {{ $store.state.sstRate*100 }} %
            <br>
            Import Duty Rate: {{ $store.state.importDutyRate*100 }} %
            <br>
            Currency Selected: {{ $store.state.currencySelected }}
            <br>
            Exchange Rate: {{ $store.state.exchangeRate }}
            <br>
            Local MYR Value: {{ $store.state.itemLclValue }}
    </div>
</template>

<script>
export default {
    name: 'Summary'
}

</script>

<style scoped>

</style>
