<template lang="pug">
v-container.fill-height(fluid)
  v-row(align='center', justify='center')
    v-col.shrink
      h1 Home
      h4 {{ message }}
</template>

<script>
import store from '../store'

export default {
  name: 'Home',
  setup() {
    return {
      message: store.state.message
    }
  }
}
</script>
