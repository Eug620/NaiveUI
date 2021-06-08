<!--
 * @Author       : Eug
 * @Date         : 2021-06-08 11:24:56
 * @LastEditTime : 2021-06-08 17:25:01
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /vite-naive/src/App.vue
-->
<template>
  <div>
    <h3 style="text-align:center;">naive-ui</h3>
     <n-card title="card" style="margin:40px;padding:40px;width:500px;">
      <n-config-provider :hljs="hljs">
        <n-space vertical :size="16">
          <n-code :code="codeJS" language="javascript" />
        </n-space>
      </n-config-provider>
     </n-card>
  </div>
</template>

<script setup>
// import { ref } from 'vue'
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

const codeJS = `
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
`;
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
