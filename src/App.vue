<!--
 * @Author       : Eug
 * @Date         : 2021-06-08 11:24:56
 * @LastEditTime : 2021-06-08 11:34:10
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /vite-navive/src/App.vue
-->
<template>
  <div>
    <h3>naive-ui</h3>
    <n-space>
      <n-button>Default</n-button>
      <n-button type="primary">Primary</n-button>
      <n-button type="info">Info</n-button>
      <n-button type="success">Success</n-button>
      <n-button type="warning">Warning</n-button>
      <n-button type="error">Error</n-button>

      <n-button dashed>Default</n-button>
      <n-button type="primary" dashed>Primary</n-button>
      <n-button type="info" dashed>Info</n-button>
      <n-button type="success" dashed>Success</n-button>
      <n-button type="warning" dashed>Warning</n-button>
      <n-button type="error" dashed>Error</n-button>

      <n-button size="tiny">小小</n-button>
      <n-button size="small">小</n-button>
      <n-button size="medium">不小</n-button>
      <n-button size="large">不不小</n-button>

      <n-button text>
        <template #icon>
          <n-icon>
            <train-icon />
          </n-icon>
        </template>
        那车头依然吐着烟
      </n-button>

      <n-button>
        <template #icon>
          <n-icon>
            <cash-icon />
          </n-icon>
        </template>
        +100 元
      </n-button>
      <n-button icon-placement="right">
        <template #icon>
          <n-icon>
            <cash-icon />
          </n-icon>
        </template>
        +100 元
      </n-button>

      <n-button ghost>Default</n-button>
      <n-button type="primary" ghost>Primary</n-button>
      <n-button type="info" ghost>Info</n-button>
      <n-button type="success" ghost>Success</n-button>
      <n-button type="warning" ghost>Warning</n-button>
      <n-button type="error" ghost>Error</n-button>

      <n-button color="#8a2be2">
        <template #icon>
          <n-icon>
            <cash-icon />
          </n-icon>
        </template>
        #8a2be2
      </n-button>
      <n-button color="#ff69b4">
        <template #icon>
          <n-icon>
            <cash-icon />
          </n-icon>
        </template>
        #ff69b4
      </n-button>
      <n-button ghost color="#8a2be2">
        <template #icon>
          <n-icon>
            <cash-icon />
          </n-icon>
        </template>
        #8a2be2
      </n-button>
      <n-button ghost color="#ff69b4">
        <template #icon>
          <n-icon>
            <cash-icon />
          </n-icon>
        </template>
        #ff69b4
      </n-button>
      <n-button text color="#8a2be2">
        <template #icon>
          <n-icon>
            <cash-icon />
          </n-icon>
        </template>
        #8a2be2
      </n-button>
      <n-button text color="#ff69b4">
        <template #icon>
          <n-icon>
            <cash-icon />
          </n-icon>
        </template>
        #ff69b4
      </n-button>

      <n-button circle>
        <template #icon>
          <n-icon>
            <cash-icon />
          </n-icon>
        </template>
      </n-button>
      <n-button round>圆角</n-button>
      <n-button>方</n-button>

      <n-button :loading="loading" @click="loading = !loading">
        <template #icon>
          <n-icon>
            <cash-icon />
          </n-icon>
        </template>
        点我
      </n-button>
      <n-button :loading="loading" @click="loading = !loading">点我</n-button>

      <n-button-group vertical>
        <n-button round>
          <template #icon>
            <n-icon>
              <log-in-icon />
            </n-icon>
          </template>
          活着
        </n-button>
        <n-button ghost>
          <template #icon>
            <n-icon>
              <log-in-icon />
            </n-icon>
          </template>
          不多
        </n-button>
        <n-button>
          <template #icon>
            <n-icon>
              <log-in-icon />
            </n-icon>
          </template>
          不少
        </n-button>
      </n-button-group>
      <n-button-group vertical size="large">
        <n-button>
          <template #icon>
            <n-icon>
              <log-in-icon />
            </n-icon>
          </template>
          幸福
        </n-button>
        <n-button>
          <template #icon>
            <n-icon>
              <log-in-icon />
            </n-icon>
          </template>
          刚好
        </n-button>
        <n-button ghost round>
          <template #icon>
            <n-icon>
              <log-in-icon />
            </n-icon>
          </template>
          够用
        </n-button>
      </n-button-group>
      <n-button-group size="small">
        <n-button type="default" round>
          <template #icon>
            <n-icon>
              <log-in-icon />
            </n-icon>
          </template>
          活着
        </n-button>
        <n-button type="default">
          <template #icon>
            <n-icon>
              <log-in-icon />
            </n-icon>
          </template>
          其实
        </n-button>
        <n-button type="default">
          <template #icon>
            <n-icon>
              <log-in-icon />
            </n-icon>
          </template>
          很好
        </n-button>
      </n-button-group>
      <n-button-group>
        <n-button ghost>
          <template #icon>
            <n-icon>
              <log-in-icon />
            </n-icon>
          </template>
          再吃
        </n-button>
        <n-button ghost>
          <template #icon>
            <n-icon>
              <log-in-icon />
            </n-icon>
          </template>
          一颗
        </n-button>
        <n-button round>
          <template #icon>
            <n-icon>
              <log-in-icon />
            </n-icon>
          </template>
          苹果
        </n-button>
      </n-button-group>
    </n-space>
  </div>
</template>

<script setup>
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
