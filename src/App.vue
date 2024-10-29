<template>
  <div id="app">
    <div id="perry" v-if="perry_data" v-cloak>
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
      <!-- 个人简介 -->
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
      <!-- 项目介绍 -->
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
        <el-dialog :title="perry_data.project.list[projectIndex].name" :visible.sync="projectDialog"
          append-to-body="true" modal-append-to-body="true">
          <a :href="perry_data.project.list[projectIndex].url" class="perry3ContentBtn" target="_blank">点我查看</a>
          <div v-html="perry_data.project.list[projectIndex].content"></div>
        </el-dialog>
      </div>
      <!-- 联系我 -->
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { data } from '@/data.js';
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';
import Viewer from 'viewerjs';
const perry_data = ref(data); // 网站文案数据
const projectDialog = ref(false); // 项目演示窗口打开
const projectIndex = ref(0); // 当前展示项目索引

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
// 滚动到指定位置
const scrollGoTo = (text) => {
  window.scrollTo({
    top: (document.querySelector(`.${text}`) as HTMLElement).offsetTop,
    behavior: "smooth"
  });
};
// 动画加载
const animationLoad = () => {
  let animationDom = [
    [".ContentTitle", 0],
    [".ContentSubTitle", 500],
    [".ContentContact", 1000],
    [".magicLoadMore", 1500],
    [".perry2ContentTitle", 0],
    [".perry2ContentMe", 500],
    [".perry2ContentText li", 500],
    [".perry2LoadMore", 1000],
    [".perry3ContentBox", 500],
    [".perry4Content li", 500],
  ];
  let a = ScrollReveal();
  animationDom.forEach(item => {
    a.reveal(item[0] as string, {
      duration: 1500,
      delay: 100,
      origin: "bottom",
      mobile: true,
      distance: "2rem",
      opacity: 0.001,
      easing: "cubic-bezier(.98,0,.04,1)"
    });
  });
};
// 展示项目
const showProject = (i: number) => {
  projectIndex.value = i;
  projectDialog.value = true;
  setTimeout(() => {
    let dom = document.querySelector(".el-dialog__body ul");
    new Viewer(dom as HTMLElement);
  }, 0);
};
onMounted(() => {
  startTyping();
  animationLoad();
});
</script>

<style>
/* 你的 CSS 代码 */
</style>