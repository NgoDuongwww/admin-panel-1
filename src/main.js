/**
 * @module main
 * @description Entry point của ứng dụng Vue, tạo app, gắn router và mount vào DOM.
 */

import { createApp } from 'vue'
import router from '@/router'
import '@/styles/style.css'
import App from './App.vue'

import '@/styles/main.sass'

// import CanvasJSChart from '@canvasjs/vue-charts'

/**
 * Tạo instance ứng dụng Vue mới, sử dụng router, rồi mount vào phần tử HTML có id="app".
 *
 * @returns {void}
 */
createApp(App)
  .use(router) // Gắn router cho app Vue
  // .use(CanvasJSChart) // Gắn Chart cho app vue
  .mount('#app') // Mount app vào #app trong DOM
