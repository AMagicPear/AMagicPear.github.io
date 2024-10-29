<template>
  <div class="perry perry2">
    <!-- 内容 -->
    <div class="perryContent perry2Content">
      <div>
        <p class="perry2ContentTitle">{{ perry_data.about.title }}</p>
        <div class="perry2ContentMe">
          <div class="perry2ContentImg">
            <img :src="perry_data.about.me.img" :alt="perry_data.about.me.img">
          </div>
          <div class="perry2ContentText">
            <div v-html="perry_data.about.me.content" class="perry2ContentTextBox"></div>
            <ul>
              <li v-for="(item, index) in perry_data.about.ability" :style="'border-top: 5px solid ' + item.color">
                <i :class="'fa ' + item.icon"></i>
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
</script>