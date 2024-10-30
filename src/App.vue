<template>
  <div id="app">
    <div id="perry" v-cloak>
      <!-- 首页 -->
      <TopScreen />
      <!-- 个人简介 -->
      <PersonalProfile />
      <!-- 项目介绍 -->
      <ProjectIntroduction />
      <!-- 联系我 -->
      <ContactMe />
    </div>
  </div>
</template>

<script setup lang="ts">
import TopScreen from './components/TopScreen.vue';
import PersonalProfile from './components/PersonalProfile.vue';
import ProjectIntroduction from './components/ProjectIntroduction.vue';
import ContactMe from './components/ContactMe.vue';
import { onMounted } from 'vue';
import ScrollReveal from 'scrollreveal';

// 动画加载
const animationLoad = () => {
  const animationDom = [
    ["#MainTitle", 0],
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
  const animationConfig = {
    duration: 1500,
    delay: 100,
    origin: "bottom",
    mobile: true,
    distance: "2rem",
    opacity: 0.001,
    easing: "cubic-bezier(.98,0,.04,1)"
  };
  animationDom.forEach(([selector, delay]) => {
    ScrollReveal().reveal(selector as string, { ...animationConfig, delay: delay as number });
  });
};

onMounted(() => {
  animationLoad();
});
</script>

<style>
@import '@/assets/css/perry.css';
</style>