<!-- eslint-disable vue/multi-word-component-names -->
<!--
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-08-14 13:26:59
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-08-14 17:50:15
 * @FilePath: /vite-basis-vue3-starter/src/views/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>index page</div>
  <ReloadPrompt />
</template>
<script lang="ts" setup>
import { registerSW } from 'virtual:pwa-register'

onMounted(() => {
  registerSW({
    immediate: true,
    // onNeedRefresh() {
    //   console.log('onNeedRefresh')
    // },
    onRegisteredSW(_swScriptUrl: any, registration: any) {
      registration & registration.update()
    }
  })
})
</script>

<route lang="yaml">
meta:
  layout: DefaultLayout
</route>

<style lang="scss" scoped></style>
