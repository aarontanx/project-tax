<template>
    <button class="button-36" role="button" v-on:click='$store.state.hideTable = !$store.state.hideTable'> View Common Item Tax Rate </button> 
    <!-- <h3 v-show='$store.state.hideTable'> Common tax rate of items </h3> -->
    <transition name="fade">
        <table v-show='$store.state.hideTable' class='styled-table'>
            <thead>
                <th> Product Category </th>
                <th> SST Rate </th>
                <th> Import Duty </th>
            </thead>
            <tbody   class="active-row" >
                <tr v-for="category in Object.keys($store.state.taxRate)" :key='category'>
                <td> {{ category }} </td>
                <td> {{ $store.state.taxRate[category][0]*100 }} % </td>
                <td> {{ $store.state.taxRate[category][1]*100 }} % </td>
                </tr>
            </tbody>
        </table>
    </transition>
</template>

<script>

export default {
    name: 'TaxDescription',
    props: {

    },
}

</script>

<style scoped>


.fade-enter-active, .fade-leave-active {
transform: translateY(0vh);
  transition: all 0.4s ease-in-out;

}
.fade-enter-from, .fade-leave-to {
  transform: translateY(100vh);
}






    .styled-table {
    border-collapse: collapse;
    margin: 25px auto;
    font-size: 0.9em;
    font-family: sans-serif;
    /* min-width: 400px; */
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    /* align-content: center; */
    /* float: left; */
    /* transition: opacity .5s; */
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
    /* border-bottom: 2px solid #009879; */
}

.styled-table tbody tr.active-row {
    font-weight: bold;
    color: #009879;
}


.button-36 {
  background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  flex-shrink: 0;
  font-family: "Inter UI","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
  font-size: 16px;
  font-weight: 500;
  height: 4rem;
  padding: 0 1.6rem;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all .5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-36:hover {
  box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
  transition-duration: .1s;
}

@media (min-width: 768px) {
  .button-36 {
    padding: 0 2.6rem;
  }
}


</style>




