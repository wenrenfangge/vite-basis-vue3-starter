<!--
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-08-14 16:49:48
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-08-14 16:56:23
 * @FilePath: /vite-basis-vue3-starter/src/layouts/NotFoundPage.vue
 * @Description: 404页面
-->
<script setup lang="ts">
defineComponent({
  name: 'NotFoundPage'
})
const router = useRouter()
</script>

<template>
  <div>
    <h1>404</h1>
    <router-view></router-view>
    <button @click="router.back()">Go Home</button>
  </div>
</template>

<style scoped></style>
