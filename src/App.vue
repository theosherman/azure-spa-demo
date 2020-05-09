<template lang="pug">
v-app

  v-navigation-drawer(v-model='drawer', app, clipped)
    v-list(dense)
      v-list-item(to='/')
        v-list-item-action
          v-icon mdi-home
        v-list-item-content
          v-list-item-title Home
      
  v-app-bar(app, clipped-left)
    v-app-bar-nav-icon(@click.stop='drawer = !drawer')
    v-toolbar-title Application

  v-content
    router-view
    
  v-footer(app)
    span © 2020
</template>

<script>
import { ref } from '@vue/composition-api'
import vuetify from './plugins/vuetify'

export default {
  name: 'App',
  setup() {
    vuetify.framework.theme.dark = true

    return {
      drawer: ref(null)
    }
  }
}
</script>
