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
      }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
