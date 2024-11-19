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
              <p v-for="(text, index) in description" :key="index" data-aos="zoom-out-up" data-aos-easing="ease-in-out">
                <span></span>{{ text }}<br>
              </p>
            </div>
            <ul>
              <li data-aos="zoom-out-up" data-aos-easing="ease-in-out" v-for="item in abilities" :style="'border-top: 5px solid ' + item.color" :key="item.title">
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
import perry_data from '@/assets/data/perrydata.json';
import abilities from '@/assets/data/abilities.json';
import description from '@/assets/data/description.json';
</script>
<style scoped>
.icon {
  width: 26px;
}
</style>