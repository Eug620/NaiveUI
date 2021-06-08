/* 
 * @Author       : Eug
 * @Date         : 2021-06-08 11:24:56
 * @LastEditTime : 2021-06-08 11:28:23
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /vite-navive/src/main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
// naive-ui
import naive from 'naive-ui'
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

const app = createApp(App)
app.use(naive)
app.mount('#app')
