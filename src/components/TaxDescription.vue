<template>
    <h3> Common tax rate of items </h3>
    <table class='styled-table'>
        <thead>
            <th> Product Category </th>
            <th> SST Rate </th>
            <th> Import Duty </th>
        </thead>
        <tbody :key='product' v-for="(tax, product) in $store.state.taxRate" class="active-row"> 
            <td> {{ product }} </td>
            <td> {{ tax[0]*100 }} % </td>
            <td> {{ tax[1]*100 }} % </td>
        </tbody>
    </table>
</template>

<script>
//cdn.datatables.net/1.11.2/css/jquery.dataTables.min.css

export default {
    name: 'TaxDescription',
    props: {

    }
}

</script>

<style scoped>
    .styled-table {
    border-collapse: collapse;
    margin: 25px auto;
    font-size: 0.9em;
    font-family: sans-serif;
    /* min-width: 400px; */
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    /* align-content: center; */
}

.styled-table th,
.styled-table td {
    padding: 12px 15px;
}

.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
}

.styled-table tbody tr.active-row {
    font-weight: bold;
    color: #009879;
}
</style>
