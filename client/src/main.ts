import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// must remain off for tailwind to work properly
// import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import { VBtn, VIcon, VMenu, VTooltip } from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import { createPinia } from 'pinia'

const pinia = createPinia()

const vuetify = createVuetify({
  components: {
    VTooltip,
    VMenu,
    VIcon,
    VBtn,
  },
  directives,
  defaults: {},
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
})

createApp(App)
  .use(router)
  .use(vuetify)
  .use(pinia)
  .mount('#app')
