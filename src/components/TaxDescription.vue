<template>
    <h3> Common tax rate of items </h3>
    <table class='styled-table'>
        <thead>
            <th> Product Category </th>
            <th> SST Rate </th>
            <th> Import Duty </th>
        </thead>
        <tbody :key='category' v-for="category in Object.keys($store.state.taxRate)" class="active-row">
            <td> {{ category }} </td>
            <td> {{ $store.state.taxRate[category][0]*100 }} % </td>
            <td> {{ $store.state.taxRate[category][1]*100 }} % </td>
        </tbody>
    </table>
</template>

<script>

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
    float: left;
}

h3 {
    text-align: left;
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
