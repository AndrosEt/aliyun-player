<template>
  <div class='play-container'>
    <div class="play_list" v-show="!playing">
      <p class="file-item" v-for="item in playList" :key='item' @click="playOne(item)">{{item.name}}</p>
    </div>
    <div v-show="playing">
      <a-button type="primary" @click="closePlay">
        关闭
      </a-button>
      <video-player class="video-player vjs-custom-skin"
                    ref="videoPlayer"
                    :playsinline="true"
                    :options="playerOptions">
      </video-player>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      playList: [],
      playing: false,
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
        autoplay: false, // 如果为true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 是否视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: "video/mp4", // 类型
          // src: 'https://ccp-bj29-video-preview.oss-cn-beijing.aliyuncs.com/bj29/sha1_DC8D9F0D089DB064645A166DA259DFD512671D68_21687769_/FHD/master.mp4?Expires=1606064584&OSSAccessKeyId=LTAIsE5mAn2F493Q&Signature=znaeoNM82XMmaIupXzIPtEa25Hw=' // url地址
          src: 'https://bj29.cn-beijing.data.alicloudccp.com/5fbb14b990b5d8d7fcf04b6f8cf7e70bb36d6568%2F5fbb14b938fe2a7c53ab499aa661723afef95971?response-content-disposition=attachment%3B%20filename%3DCinderella.Man.2005.720p.BluRay.H264.AAC-RARBG.mp4%3Bfilename%2A%3DUTF-8%27%27Cinderella.Man.2005.720p.BluRay.H264.AAC-RARBG.mp4&x-oss-access-key-id=LTAIsE5mAn2F493Q&x-oss-expires=1606229135&x-oss-signature=uLW4pzZe6PW%2FKrQLmwYodBFmMuKOEUymhzWgMMixHfI%3D&x-oss-signature-version=OSS2' // url地址
        }],
        poster: '', // 封面地址
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true, // 当前时间和持续时间的分隔符
          durationDisplay: true, // 显示持续时间
          remainingTimeDisplay: false, // 是否显示剩余时间功能
          fullscreenToggle: true // 是否显示全屏按钮
        }
      },
    }
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    }
  },
  mounted() {
    this.initData();
  },
  methods: {
    closePlay() {
      this.player.pause();
      this.playing = false;
    },
    initData() {
      let that = this
      this.$request.getFileList(function (data) {
        console.log(data)
        if (data.status === 200) {
          that.playList =  data.data.items
        }
      })
    },
    playOne(item) {
      console.log(item['download_url'])
      this.$set(this.playerOptions.sources, 0, {
        type: "video/mp4",
        src: item['download_url'],
      })
      this.player.muted(false)
      this.playing = true;
      // this.$refs.videoPlayer.src(item['download_url'])
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
