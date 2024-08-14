/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-08-14 09:03:29
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-08-14 16:44:42
 * @FilePath: /vite-basis-vue3-starter/vite.config.ts
 * @Description: vite 配置
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconResolver from 'unplugin-icons/resolver'
import Layouts from 'vite-plugin-vue-layouts'
import { VitePWA } from 'vite-plugin-pwa'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      /* options */
      routesFolder: [
        {
          src: './src/views'
        }
      ]
    }),
    vue(),
    vueJsx(),
    vueDevTools(),
    UnoCSS(),
    Icons({ autoInstall: true }),
    AutoImport({
      imports: ['vue', VueRouterAutoImports]
    }),
    Components({
      directoryAsNamespace: true,
      collapseSamePrefixes: true,
      resolvers: [
        // ElementPlusResolver()
        IconResolver({
          prefix: 'i-'
        })
      ]
    }),
    Layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'DefaultLayout'
    }),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'vite-basis-vue3-starter',
        short_name: 'vite-basis-vue3-starter',
        description: 'vite-basis-vue3-starter',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }),
    viteMockServe({
      mockPath: 'mock',
      enable: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
