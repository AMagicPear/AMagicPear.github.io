<template>
  <div id="app">
    <div id="perry">
      <TopScreen />
      <PersonalProfile />
      <ProjectIntroduction />
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

const animationLoad = () => {
  const animationDom = [
    ['#MainTitle', 0],
    ['.SubTitle', 500],
    ['.ContentContact', 1000],
    ['.magicLoadMore', 1500],
    ['.perry2LoadMore', 1000],
    ['.perry3ContentBox', 500],
    ['.perry4Content li', 500],
  ];

  const animationConfig = {
    duration: 1500,
    delay: 100,
    origin: 'bottom',
    mobile: true,
    distance: '2rem',
    opacity: 0.001,
    easing: 'cubic-bezier(.98,0,.04,1)',
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
