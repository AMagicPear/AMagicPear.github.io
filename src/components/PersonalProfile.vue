<template>
  <div class="perry perry2">
    <!-- 内容 -->
    <div class="perryContent perry2Content">
      <div>
        <p class="perry2ContentTitle">关于我</p>
        <div class="perry2ContentMe">
          <div class="perry2ContentImg">
            <img src="/images/me.png" alt="meImage">
          </div>
          <div class="perry2ContentText">
            <div class="perry2ContentTextBox">
              <span></span>一只会魔法的梨，是一种十分罕见且稀有的梨类品种。<br>
              <span></span>每天吃小羊为食。
            </div>
            <ul>
              <li v-for="item in ability" :style="'border-top: 5px solid ' + item.color" :key="item.title">
                <i>
                  <img :src="`/icons/${item.icon}.svg`" :alt="item.title" class="icon">
                </i>
                <span :style="'color:' + item.color">{{ item.bfb }}</span>
                <p>{{ item.title }}</p>
                <p>{{ item.subTitle }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="perry2LoadMore">
          <div class="loadMore" @click="scrollGoTo(perry_data.about.loadMore.class)">
            {{ perry_data.about.loadMore.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { scrollGoTo } from '../utils';
import { perry_data } from '../data';
const ability = [{
  icon: "composition",
  title: "编曲",
  subTitle: "Ableton Live",
  color: "#ff4757",
  bfb: "90%"
},
{
  icon: "visual-design",
  title: "视觉设计",
  subTitle: "Photoshop、Sketch、Pixso……",
  color: "#2ed573",
  bfb: "80%"
},
{
  icon: "front-end",
  title: "前端",
  subTitle: "HTML、CSS、JavaScript、Vue3……",
  color: "#ffa502",
  bfb: "30%"
}
]
</script>
<style scoped>
.icon {
  width: 26px;
}
</style>