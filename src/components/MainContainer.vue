<template>
    <div class="container">
        <!-- <h1> Malaysia Tax Rate </h1> -->
        <TaxDescription />
        <Calculator />
        MYR {{ $store.getters.finalValue }}
    </div>
</template>

<script>
import TaxDescription from './TaxDescription'
import Calculator from './Calculator.vue'


export default {
    components: {
        TaxDescription,
        Calculator
    }

}
</script>

<style scoped>

</style>
