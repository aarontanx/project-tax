<template>
    <div class='container'>
        <p class="text-label" > Source Country: </p>
        <select v-model="src_cty">
            <option v-for="src_cty in $store.state.src_cty" :key='src_cty' :value="src_cty">
                {{ src_cty }}
            </option>
        </select>

        <p class="text-label" > Destination Country: </p>
        <select v-model="dst_cty">
            <option v-for="dst_cty in $store.state.dst_cty" :key='dst_cty' :value="dst_cty">
                {{ dst_cty }}
            </option>
        </select>

        <p class='text-label' > Item Category </p>
        <select v-model="ProductCat">
            <option v-for="(tax, product) in $store.state.taxRate" :key='product' :value="product">
                {{ product }}
            </option>
        </select>


        <p class='text-label' > Item Value </p>
        <select name="currencySelected"  class='spacing'>
            <option v-for="(exchangeRate, currency) in $store.state.currency" :key='currency' :value="currency">
                {{ currency }}
            </option>
        </select>
        <input v-model='inputcurrency' placeholder="Item Value" />
    </div>

    <div> 
        Estimated Price:  MYR {{ $store.getters.finalValue }}
        Selected Currency: {{ $store.state.currencySelected }}
    </div>
</template>

<script>
export default {
    name: 'Calculator',
    data() {
        return {
            src_cty: String
            }
    },

}
</script>

<style scoped>
    .text-label {
        /* text-align: left;  */
        padding-left: 5%;
        /* margin-left: 10%; */
    }

    .spacing {
        margin-right: 10px;
    }
</style>
