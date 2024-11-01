<template>
  <div class="perry perry4">
    <!-- 壁纸 -->
    <div class="perryBg perry4Bg"></div>
    <!-- 内容 -->
    <div class="perryContent perry4Content">
      <div>
        <p class="perry2ContentTitle">{{ perry_data.contact.title }}</p>
        <ul>
          <li v-for="(item, index) in perry_data.contact.list">
            <p class="perry4ItemTitle">{{ item.name }}</p>
            <p class="perry4ItemContext">{{ item.context }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { perry_data } from '@/data';
</script>
<style scoped>

</style>