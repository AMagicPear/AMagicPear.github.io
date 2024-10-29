<template>
  <!-- 首页 -->
  <div class="perry magic">
    <!-- 内容 -->
    <div class="perryContent magicContent">
      <div>
        <div class="ContentTitle">
          <span>{{ perry_data.index.title }}</span>
          <span class="magicTyping"></span>
        </div>
        <div class="ContentSubTitle">{{ perry_data.index.subTitle }}</div>
        <ul class="ContentContact">
          <li v-for="(item, index) in perry_data.index.contact" :key="index">
            <a :href="item.link" target="_blank">
              <el-tooltip :content="item.name" placement="bottom" effect="light">
                <i :class="'fa ' + item.icon"></i>
              </el-tooltip>
            </a>
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
    <div class="perryBg magicBg"></div>
  </div>
</template>

<script setup lang="ts">
import { scrollGoTo } from '../utils';
import { perry_data } from '../data';
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