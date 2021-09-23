<template>
    <div class='container center'>
        <div class='center'>
            <p> Source Country: </p>
            <select class="select-css " v-model="setSrcCty">
                <option v-for="src_cty in $store.state.src_cty_choice.sort()" :key='src_cty' :value="src_cty" selected>
                    {{ src_cty }}
                </option>
            </select>
        </div>

        <div class='center'>
            <p> Destination Country: </p>
            <select class="select-css" v-model="setDstCty">
                <option v-for="dst_cty in $store.state.dst_cty_choice.sort()" :key='dst_cty' :value="dst_cty">
                    {{ dst_cty }}
                </option>
            </select> 
        </div>
    <br>
        <div class='center'>
            <p> Item Category </p>
            <select class="select-css" v-model="setCategory">
                <option v-for="category in Object.keys($store.state.taxRate).sort()" :key='category' :value='category'>
                    {{ category }}
                </option> 
            </select>
        </div>

        <div class='center'>
            <p> Item Value </p>
            <select class="select-css spacing" v-model="setCurrency">
                <option v-for="currency in Object.keys($store.state.currency).sort()" :key='currency' :value="currency">
                    {{ currency }}
                </option>
            </select>
        </div>
        <div>
            <input class='form-size' style="" v-model="setItemValue" type="number" placeholder="Item Value" />
        </div>
    </div>
</template>

<script>

export default {
    name: 'Calculator',
    computed: {
        setCategory: {
            get () {
            },
            set (value) {
                this.$store.commit('setCategory', value)
            },
        },
        setCurrency: {
            get () {
            },
            set (value) {
                this.$store.commit('setCurrency', value)
            },
        },
        setItemValue: {
            get () {
            },
            set (value) {
                this.$store.commit('setItemValue', value)
            },
        },
        setSrcCty: {
            get () {
            },
            set (value) {
                this.$store.commit('setSrcCty', value)
            },
        },
        setDstCty: {
            get () {
            },
            set (value) {
                this.$store.commit('setDstCty', value)
            },
        },
    },
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat);

.center {
    /* display: flex; */
    justify-content: center;
    /* flex-wrap: wrap; */
    margin: 10px;
}
* {
  font-family: montserrat, arial, verdana;
          margin-bottom: 5px;
}

    .spacing {
        margin-right: 5px;
    }

    .container {
        border: 1px black;
    }

.form-size {
    padding: 12px 20px;
    margin: 10px auto;
    /* border-radius: 5%;  */
    /* display: grid; */
  grid-template-columns: auto;
  grid-gap: 0.5rem 1rem;
  justify-items: center;
  position: relative;
}

.select-css {
  /* display: grid; */
  /* display: flex; */
  align-items: center;    
  justify-content: center;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 700;
  color: #444;
  line-height: 1.3;
  padding: .6em 1.4em .5em .8em;
  float: center;
  /* align-items: center; */
  /* width: 30%; */
  /* useful when width is set to anything other than 100% */
  max-width: 100%; 
  box-sizing: border-box;
  margin: 0;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
  border-radius: .5em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  /* note: bg image below uses 2 urls. The first is an svg data uri for the arrow icon, and the second is the gradient. 
    for the icon, if you want to change the color, be sure to use `%23` instead of `#`, since it's a url. You can also swap in a different svg icon or an external image reference
    
  */
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
    linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
  background-repeat: no-repeat, repeat;
  /* arrow icon position (1em from the right, 50% vertical) , then gradient position*/
  background-position: right .7em top 50%, 0 0;
  /* icon size, then gradient */
  background-size: .65em auto, 100%;
}

/* Hide arrow icon in IE browsers */
.select-css::-ms-expand {
  display: none;
}
/* Hover style */
.select-css:hover {
  border-color: #888;
}

body {
    text-align: center;
}
form {
    display: inline-block;
}
</style>
