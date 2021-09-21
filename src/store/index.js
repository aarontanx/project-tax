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
        'AUD' : 3.0449,
        'BND' : 3.1012,
        'CAD' : 3.2798,
        'KHR' : 0.1024,
        'CNY' : 0.6479,
        'EUR' : 4.9151,
        'HKD' : 53.8168,
        'IDR' : 0.0294,
        'JPY' : 3.8217,
        'KRW' : 0.354,
        'PHP' : 8.3648,
        'SAR' : 111.717,
        'SGD' : 3.1012,
        'CHF' : 4.5158,
        'TWD' : 15.0723,
        'THB' : 12.5472,
        'GBP' : 5.7273,
        'USD' : 4.1895,
        'VND' : 0.0184,
        'SDR' : 5.9439,
        'NZD' : 2.9419,
        'MMK' : 0.2413,
        'INR' : 5.6936,
        'AED' : 114.0574,
        'PKR' : 2.4754,
        'NPR' : 3.5509,
        'EGP' : 0.2664,
        

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
