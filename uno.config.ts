/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-08-14 09:10:53
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-08-14 10:45:01
 * @FilePath: /vite-basis-vue3-starter/uno.config.ts
 * @Description: unoCSS配置
 */
// uno.config.ts
import { defineConfig, presetAttributify, presetUno, presetWind, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify({
      /* preset options */
    }),
    presetUno(),
    // ...custom presets
    presetWind(),
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block'
      }
    })
  ]
})
