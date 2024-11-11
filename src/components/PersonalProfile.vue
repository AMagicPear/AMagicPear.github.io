<template>
  <div class="perry perry2">
    <!-- 内容 -->
    <div class="perryContent perry2Content">
      <div>
        <p class="perry2ContentTitle">关于我</p>
        <div class="perry2ContentMe">
          <div class="perry2ContentImg">
            <img src="/images/me.webp" alt="meImage">
          </div>
          <div class="perry2ContentText">
            <div class="perry2ContentTextBox">
              <p v-for="(text, index) in description" :key="index">
                <span></span>{{ text }}<br>
              </p>
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
import { scrollGoTo } from '@/utils';
import { perry_data } from '@/data';

interface Ability {
  icon: string;
  title: string;
  subTitle: string;
  color: string;
  bfb: string;
}

const ability: Ability[] = [{
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
  icon: "3d",
  title: "三维",
  subTitle: "Blender、3ds Max……",
  color: "#1e90ff",
  bfb: "60%"
},
{
  icon: "front-end",
  title: "前端",
  subTitle: "HTML、CSS、JavaScript、Vue3……",
  color: "#ffa502",
  bfb: "30%"
}
]

const description = [
  "一只会魔法的梨，是一种十分罕见且稀有的梨类品种。",
  "它的果实呈现出一种神秘的紫色，散发着一种神奇的光芒。",
  "据说，只有那些拥有纯洁心灵的人才能看到它的果实。",
  "它的果实能够让人获得一种神奇的力量，这种力量可以让人实现自己的愿望。",
  "但是，这种力量并不是那么容易获得的，因为它需要一种特殊的能量来激活。",
  "这种能量就是爱，只有那些真心爱它的人才能获得它的力量。",
  "所以，如果你想获得这种力量，就要用真心去爱它，它会给你带来意想不到的惊喜。",
  "如果你愿意，就请跟我一起去寻找这种神奇的梨吧！"
];
</script>
<style scoped>
.icon {
  width: 26px;
}
</style>