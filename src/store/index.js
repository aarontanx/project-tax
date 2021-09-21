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
      'Home Appliances': [0.1, 0.2],
      },

      'src_cty': ['United States', 'Singapore'],

      'dst_cty': ['Malaysia'],

      'currency': {'USD': 4.19, 'MYR': 1, 'RMB': 0.65},

      'finalValue': 2,

      'currencySelected': null,
  },
  mutations: {
    setCurrency(state, currencySelected) {
      state.currencySelected = currencySelected
      console.log(currencySelected)
    }
  },
  actions: {
    // setCurrency(selectCurrency, currencySelected) => {
    //   selectCurrency.commit(setCurrency, )
    // }
  },
  getters: {
    finalValue(state) {
      // this.finalValue = 1
      return state.currency.currencySelected
    }
  },
  modules: {
  }
})
