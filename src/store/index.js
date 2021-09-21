import { createStore } from 'vuex'

export default createStore({
  state: {
    // SST, Import Duty

    'taxRate': {
      'Food Supplement': [0.05, 0.15],
      'Computers': [0.05, 0],
      'Audio': [0.1, 0],
      'Books': [0.1, 0],
      'Footwear': [0.1, 0],
      'Clothes': [0.1, 0],
      'Handbags': [0.1, 0],
      'Toys & Collectibles': [0.1, 0],
      'Kitchenware': [0.1, 0],
      'Home Appliances': [0.1, 0.2]
      },

      'src_cty': ['United States', 'Singapore'],

      'dst_cty': ['Malaysia'],

      'currency': {
        'AUD' : 0.3284,
        'BND' : 0.3225,
        'CAD' : 0.3049,
        'KHR' : 976.56,
        'CNY' : 1.5434,
        'EUR' : 0.2035,
        'HKD' : 1.8582,
        'IDR' : 3401,
        'JPY' : 26.1664,
        'KRW' : 282.49,
        'PHP' : 11.9549,
        'SAR' : 0.8951,
        'SGD' : 0.3225,
        'CHF' : 0.2214,
        'TWD' : 6.6347,
        'THB' : 7.9699,
        'GBP' : 0.1746,
        'USD' : 0.2387,
        'VND' : 5434.78,
        'SDR' : 0.1682,
        'NZD' : 0.3399,
        'MMK' : 414.4219,
        'INR' : 17.5636,
        'AED' : 0.8768,
        'PKR' : 40.3975,
        'NPR' : 28.1619,
        'EGP' : 3.7538,

    },

      'currencySelected': 'MYR',
      'itemValue': 0.00,
      'itemLclValue': 0.00,
      'finalValue':0.00,

      'categorySelected' : null,

      'sstRate' : 0.0,
      'importDutyRate' : 0.0,

      'exchangeRate' : 1,

      'LclSSTValue': 0.00,
      'LclDutyValue': 0.00,
  },
  mutations: {
    // setCurrency(state, currencySelected) {
    //   state.currencySelected = currencySelected
    //   console.log(currencySelected)
    // }
      setCategory(state, categorySelected) {
      state.categorySelected = categorySelected
      // console.log(categorySelected)
      // console.log(this.state.taxRate[categorySelected])
      state.sstRate = this.state.taxRate[categorySelected][0]
      state.importDutyRate = this.state.taxRate[categorySelected][1]
      },
      setCurrency(state, currencySelected) {
        state.currencySelected = currencySelected
        state.exchangeRate = this.state.currency[currencySelected]
        },
      setItemValue(state, itemValue) {
        state.itemLclValue = (this.state.exchangeRate * itemValue).toFixed(2)
      },
      setLclSSTValue(state, itemValue) {
        state.LclSSTValue = (this.state.sstRate * itemValue).toFixed(2)
      },
      setLclDutyValue(state, itemValue) {
        state.LclDutyValue = (this.state.importDutyRate * itemValue).toFixed(2)
      },
      calculateFinalValue(state){
        state.finalValue = (Number(this.state.itemLclValue) + Number(this.state.LclSSTValue) + Number(this.state.LclDutyValue)).toFixed(2)
        // console.log(typeof this.state.itemLclValue)
        // + this.state.LclDutyValue
      }
  },
  actions: {
    // setCurrency(selectCurrency, currencySelected) => {
    //   selectCurrency.commit(setCurrency, )
    // }
  },
  getters: {
    // finalValue(state) {
    //   // this.finalValue = 1
    //   return state.exchangeRate * state.itemValue
    // }
  },
  modules: {
  }
})
