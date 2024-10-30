<template>
  <!-- 首页 -->
  <div class="perry">
    <!-- 内容 -->
    <div class="perryContent">
      <div>
        <div id="MainTitle">
          <span>{{ perry_data.index.title }}</span>
          <!-- 打字效果 -->
          <span class="magicTyping"></span>
        </div>
        <div class="SubTitle">{{ perry_data.index.subTitle }}</div>
        <ul class="ContentContact">
          <li v-for="(item, index) in perry_data.index.contact" :key="index">
            test
            <!-- <a :href="item.link" target="_blank">
              <el-tooltip :content="item.name" placement="bottom" effect="light">
                <i :class="'fa ' + item.icon"></i>
              </el-tooltip>
            </a> -->
          </li>
        </ul>
        <div class="magicLoadMore">
          <div class="loadMore" @click="scrollGoTo(perry_data.index.loadMore.class)">
            {{ perry_data.index.loadMore.text }}
          </div>
        </div>
      </div>
    </div>
    <!-- 壁纸 -->
    <div class="perryBg topBg"></div>
  </div>
</template>

<script setup lang="ts">
import { scrollGoTo } from '@/utils';
import { perry_data } from '@/data';
import Typed from 'typed.js';
import { onMounted } from 'vue';
// 开启打字效果
const startTyping = () => {
  new Typed(".magicTyping", {
    strings: perry_data.value.index.me,
    typeSpeed: 30,
    backDelay: 2000,
    backSpeed: 50,
    loop: true
  });
};
onMounted(() => {
  startTyping();
});
</script>

<style scoped>
.perry {
  height: 800px;
  overflow: hidden;
}

.perryContent {
  position: absolute;
  box-shadow: 10px 0 30px rgb(240, 202, 202); /* 阴影 */
  z-index: 2;
}

.topBg {
  right: 0;
  background-size: contain;
  background: url("@/assets/images/bg.webp") fixed;
}

.SubTitle {
  font-size: var(--contextSize);
  margin-bottom: 20px;
}
.ContentContact {
    display: flex;
    margin-bottom: 20px;
}

.ContentContact li {
    margin-right: 20px;
    font-size: var(--contextSize);
}

.ContentContact i {
    color: black;
}

@media(max-width: 560px) {
  .perry {
    height: 700px;
  }

  .perryContent {
    bottom: 0;
    width: 100%;
    height: 60%;
  }

  .topBg {
    width: 100%;
    height: 40%;
    top: 0;
  }
}

@media(max-width: 930px) {
  .perryContent {
    padding: 40px;
  }
}
</style>