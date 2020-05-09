import Vue from 'vue'
import VueCompositionApi, { reactive } from '@vue/composition-api'

Vue.use(VueCompositionApi)

const store = {}

store.state = reactive({
  message: 'Hello world!'
})

export default store
