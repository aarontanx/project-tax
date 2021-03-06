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

      'src_cty_choice': ['United States', 'Singapore'],
      'src_cty' : 'None',

      'dst_cty_choice': ['Malaysia'],
      'dst_cty' : 'None',

      'currency': {
        'AUD' : 3.0449,
        'BND' : 3.1012,
        'CAD' : 3.2798,
        'KHR' : 0.001024,
        'CNY' : 0.6479,
        'EUR' : 4.9151,
        'HKD' : 0.538168,
        'IDR' : 0.000294,
        'JPY' : 0.038217,
        'KRW' : 0.00354,
        'PHP' : 0.083648,
        'SAR' : 1.11717,
        'SGD' : 3.1012,
        'CHF' : 4.5158,
        'TWD' : 0.150723,
        'THB' : 0.125472,
        'GBP' : 5.7273,
        'USD' : 4.1895,
        'VND' : 0.000184,
        'SDR' : 5.9439,
        'NZD' : 2.9419,
        'MYR' : 1,
        'MMK' : 0.002413,
        'INR' : 0.056936,
        'AED' : 1.140574,
        'PKR' : 0.024754,
        'NPR' : 0.035509,
        'EGP' : 0.2664,
    },

      'currencySelected': 'MYR',
      'itemValue': null,
      'itemLclValue': 0.00,
      'finalValue':0.00,

      'categorySelected' : 'None',

      'sstRate' : 0.0,
      'importDutyRate' : 0.0,

      'exchangeRate' : 1,

      'LclSSTValue': 0.00,
      'LclDutyValue': 0.00,

      'threshold' : 500,
      'aboveThreshold': false,

      'hideTable' : false,
  },
  mutations: {
      setSrcCty(state, srcCtySelected) {
        state.src_cty = srcCtySelected
        this.commit('updateAllValue')
      },
      setDstCty(state, dstCtySelected) {
        state.dst_cty = dstCtySelected
        this.commit('updateAllValue')
      },
      setCategory(state, categorySelected) {
        state.categorySelected = categorySelected
        state.sstRate = state.taxRate[categorySelected][0]
        state.importDutyRate = state.taxRate[categorySelected][1]
        this.commit('updateAllValue')
      },
      setCurrency(state, currencySelected) {
        state.currencySelected = currencySelected
        state.exchangeRate = state.currency[currencySelected]
        this.commit('updateAllValue')
        },
      setItemValue(state, itemValue) {
        state.itemValue = itemValue
        state.itemLclValue = (state.exchangeRate * itemValue).toFixed(2)
        this.commit('updateAllValue')
      },
      updateAllValue(state) {
        if (state.itemLclValue > 500 ){
          state.itemLclValue = (state.exchangeRate * state.itemValue).toFixed(2)
          state.LclSSTValue = (state.sstRate * state.itemLclValue).toFixed(2)
          state.LclDutyValue = (state.importDutyRate * state.itemLclValue).toFixed(2)
          state.finalValue = (Number(state.itemLclValue) + Number(state.LclSSTValue) + Number(state.LclDutyValue)).toFixed(2)
          state.aboveThreshold = (state.itemLclValue > state.threshold)
          // console.log(state.src_cty_choice[0])
        }
        else {
          state.itemLclValue = (state.exchangeRate * state.itemValue).toFixed(2)
          state.LclSSTValue = 0
          state.LclDutyValue = 0
          state.finalValue = (Number(state.itemLclValue) + Number(state.LclSSTValue) + Number(state.LclDutyValue)).toFixed(2)
          state.aboveThreshold = (state.itemLclValue > state.threshold)
        } 
      },
      mounted(state) {
        // state.src_cty = state.src_cty_choice[0],
        console.log('hello')
      },
  },
  actions: {
  },
  getters: {
    },
})
