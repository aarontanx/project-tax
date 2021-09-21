<template>
    <div>
    <!-- <div class="container"> -->
        <!-- <h1> Malaysia Tax Rate </h1> -->
        
        <div class='container1'> <TaxDescription /> </div>
        <div class='container2'>
        <Form />
        <Summary />
        <Final />
        </div>
    </div>


</template>

<script>
import TaxDescription from './TaxDescription'
import Form from './Form.vue'
import Summary from './Summary.vue'
import Final from './Final.vue'


export default {
    components: {
        TaxDescription,
        Form,
        Summary,
        Final
    }
}
</script>

<style scoped>
    .container1 .container2 {
        display: flex;
    }
</style>
