/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-08-13 18:16:13
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-08-14 09:34:15
 * @FilePath: /vite-basis-vue3-starter/src/main.ts
 * @Description: vue main文件
 */
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
