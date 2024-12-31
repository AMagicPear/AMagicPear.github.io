<template>
  <div class="perry">
    <div class="perryContent">
      <div>
        <p class="perry2ContentTitle" data-aos="zoom-out-up">我的项目</p>
        <div class="perryContentList">
          <div class="perry3ContentBox" v-for="(item, index) in projectList" :key="index">
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
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import perry_data from '@/assets/data/perrydata.json';
import { scrollGoTo} from '@/utils';
import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css';
// 展示项目
const projectIndex = ref(0); // 当前展示项目索引
const projectDialog = ref(false); // 项目演示窗口打开
const showProject = (i: number) => {
    projectIndex.value = i;
    projectDialog.value = true;
    setTimeout(() => {
        let dom = document.querySelector(".el-dialog__body ul");
        new Viewer(dom as HTMLElement);
    }, 0);
};
interface project {
  name: string;
  text: string;
  nb: string[];
  url: string;
  img: string;
  content: string;
}
const projectList: project[] = [
  {
    name: '今天吃什么',
    text: '一个决定今天吃什么的小程序',
    nb: ['Vue3', 'Ionic'],
    url: 'https://github.com/AMagicPear/What-to-eat-today-web',
    img: '/images/projects/what-to-eat.png',
    content: '项目内容'
  },
  {
    name: '进化',
    text: '一张专辑',
    nb: ['Ableton Live'],
    url: 'https://music.163.com/album?id=169551625&userid=497062445',
    img: '/images/projects/进化.jpg',
    content: '项目内容'
  }
]
</script>
<style scoped>
.perry {
    height: auto;
    background: white;
    border-radius: 200px 200px 0 0;
    -webkit-border-radius: 200px 200px 0 0;
    -moz-border-radius: 200px 200px 0 0;
    -ms-border-radius: 200px 200px 0 0;
    -o-border-radius: 200px 200px 0 0;
}

.perryContent {
    width: 100%;
    height: auto;
}

.perryContentList {
    width: 1000px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.perry3ContentBox,
.perry3ContentBoxTc {
    width: 300px;
    height: 400px;
    background: white;
    margin-bottom: 50px;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.perry3ContentBox {
    box-shadow: rgba(50, 50, 93, 0.35) 0px 13px 27px -5px, rgba(0, 0, 0, 0.4) 0px 8px 16px -8px;
}

.perry3ContentBoxTc {
    height: 0 !important;
}

.perry3ContentBox img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
}

.perry3ContentBox:hover img {
    transform: scale(1.5) rotate(5deg);
    -webkit-transform: scale(1.5) rotate(5deg);
    -moz-transform: scale(1.5) rotate(5deg);
    -ms-transform: scale(1.5) rotate(5deg);
    -o-transform: scale(1.5) rotate(5deg);
}

.perry3ContentBoxText {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, .7);
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(0);
    -webkit-transform: scale(0);
    -moz-transform: scale(0);
    -ms-transform: scale(0);
    -o-transform: scale(0);
    padding: 20px;
    box-sizing: border-box;
}

.perry3ContentBox:hover .perry3ContentBoxText {
    transform: scale(1);
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
}

.perry3ContentTitle {
    font-size: 3rem;
}

.perry3ContentText {
    font-size: var(--contextSize);
}

.perry3ContentBoxText ul {
    display: flex;
    flex-wrap: wrap;
    margin: 3px 0 10px;
}

.perry3ContentBoxText li {
    margin-right: 10px;
}

.perry3ContentBtn {
    display: inline-block;
    cursor: pointer;
    padding: 5px 30px 8px;
    border: 1px solid black;
    font-size: 1.3rem;
    color: black;
    margin-top: 20px;
}

.perry3ContentBtn:hover {
    color: white;
    box-shadow: inset 0 -100px 0 black;
}

.perry3LoadMore {
    width: 100%;
    display: flex;
    justify-content: center;
}

.perry3ContentBoxText,
.perry3ContentBox img,
.perry3ContentBtn{
    transition: all .3s ease-in-out;
    -webkit-transition: all .3s ease-in-out;
    -moz-transition: all .3s ease-in-out;
    -ms-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
}

@media(max-width:1070px) {
    .perry {
        border-radius: 150px 150px 0 0;
        -webkit-border-radius: 150px 150px 0 0;
        -moz-border-radius: 150px 150px 0 0;
        -ms-border-radius: 150px 150px 0 0;
        -o-border-radius: 150px 150px 0 0;
    }
    .perryContentList {
        width: 660px;
        min-width: 660px;
    }
}
@media(max-width: 778px) {
    .perry {
        border-radius: 100px 100px 0 0;
        -webkit-border-radius: 100px 100px 0 0;
        -moz-border-radius: 100px 100px 0 0;
        -ms-border-radius: 100px 100px 0 0;
        -o-border-radius: 100px 100px 0 0;
}

    .perryContentList {
        width: 300px;
        min-width: 300px;
    }

    .perry3ContentBoxText {
        transform: scale(1);
        -webkit-transform: scale(1);
        -moz-transform: scale(1);
        -ms-transform: scale(1);
        -o-transform: scale(1);
}
}
</style>