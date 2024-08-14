<!--
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-08-13 18:16:13
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-08-14 13:59:39
 * @FilePath: /vite-basis-vue3-starter/src/views/AboutView.vue
 * @Description: about页面
-->
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <HelloWorld msg="You did it!" />
  </div>
</template>

<route lang="yaml">
meta:
  layout: DefaultLayout
</route>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
