import Vue from 'vue'
import App from './App.vue'
import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import request from './requestServer'
Vue.use(Antd);
Vue.use(VideoPlayer)
Vue.config.productionTip = false
Vue.prototype.$request = request

new Vue({
  render: h => h(App),
}).$mount('#app')
