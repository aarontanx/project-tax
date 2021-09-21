<template>
    <div class='container'>
        <p class="text-label" > Source Country: </p>
        <select v-model="citySelected">
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
        <select v-model="productCat">
            <option v-for="category in Object.keys($store.state.taxRate)" :key='category' :value="category" >
                {{ category }}
            </option>
        </select>

        <p class='text-label' > Item Value </p>
        <select v-model="currencyCat"  class='spacing'>
            <option v-for="currency in Object.keys($store.state.currency)" :key='currency' :value="currency">
                {{ currency }}
            </option>
        </select>
        
        <input v-model='itemValue' type="number" placeholder="Item Value" />
    </div>
</template>

<script>

export default {
    name: 'Calculator',

    computed: {
        productCat: {
            get () {
                return this.$store.state.categorySelected
            },
            set (value) {
                this.$store.commit('setCategory', value)
            },
        },
        currencyCat: {
            get () {
                return this.$store.state.currencySelected
            },
            set (value) {
                this.$store.commit('setCurrency', value)
            },
        },
        itemValue: {
            get () {
                return this.$store.state.itemValue
            },
            set (value) {
                // console.log(value)
                this.$store.commit('setItemValue', value)
                this.$store.commit('setLclSSTValue', value)
                this.$store.commit('setLclDutyValue', value)
                this.$store.commit('calculateFinalValue')
            },
        }
    }
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
/* 
    .result {

    } */

</style>
