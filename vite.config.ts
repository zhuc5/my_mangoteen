import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  // 如果只是本地部署就只写"/"", 否则github上比如文件夹是 mangosteen,base ='/mangosteen/'
  // base: "/",
  plugins: [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
      transformOn: true,
      mergeProps:true
    }),
  ],
});
