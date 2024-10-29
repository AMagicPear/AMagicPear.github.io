<template>
  <div class="perry perry3">
    <div class="perryContent perry3Content">
      <div>
        <p class="perry2ContentTitle">{{ perry_data.project.title }}</p>
        <div class="perry3ContentList">
          <div class="perry3ContentBox" v-for="(item, index) in perry_data.project.list" :key="index">
            <img :src="item.img" :alt="item.img">
            <div class="perry3ContentBoxText">
              <div>
                <p class="perry3ContentTitle">{{ item.name }}</p>
                <ul>
                  <li v-for="(nb, index) in item.nb" :key="index">
                    {{ nb }}
                    <span v-if="index != item.nb.length - 1">+</span>
                  </li>
                </ul>
                <p class="perry3ContentText">{{ item.text }}</p>
                <div class="perry3ContentBtn" @click="showProject(index)">
                  {{ perry_data.project.listLoadMore }}
                </div>
              </div>
            </div>
          </div>
          <div class="perry3ContentBoxTc"></div>
          <div class="perry3ContentBoxTc"></div>
        </div>
        <div class="perry3LoadMore">
          <div class="loadMore" @click="scrollGoTo(perry_data.project.loadMore.class)">
            {{ perry_data.project.loadMore.text }}
          </div>
        </div>
      </div>
    </div>
    <el-dialog :title="perry_data.project.list[projectIndex].name" :visible.sync="projectDialog" append-to-body="true"
      modal-append-to-body="true">
      <a :href="perry_data.project.list[projectIndex].url" class="perry3ContentBtn" target="_blank">点我查看</a>
      <div v-html="perry_data.project.list[projectIndex].content"></div>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import { perry_data } from '@/data';
import { scrollGoTo, showProject, projectIndex, projectDialog } from '@/utils';
</script>