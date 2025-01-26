<template>
  <div class="perry perry3">
    <div class="perryContent">
      <div>
        <p class="mainContentTitle" data-aos="zoom-out-up">我的项目</p>
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
                  查看
                </div>
              </div>
            </div>
          </div>
          <div class="perry3ContentBoxTc"></div>
          <div class="perry3ContentBoxTc"></div>
        </div>
        <div class="perry3LoadMore">
          <div class="loadMore" @click="scrollGoTo('perry4')">
            继续浏览
          </div>
        </div>
      </div>
    </div>

    <!-- 项目详情弹窗 -->
    <el-dialog
      v-model="projectDialog"
      :title="projectList[projectIndex].name"
      width="50%"
      :before-close="handleClose"
    >
      <div class="project-detail">
        <img :src="projectList[projectIndex].img" class="project-image">
        <div class="project-info">
          <p class="project-description">{{ projectList[projectIndex].content }}</p>
          
          <div class="project-tech" v-if="projectList[projectIndex].techStack">
            <div class="tech-badge" v-for="tech in projectList[projectIndex].techStack" :key="tech">
              {{ tech }}
            </div>
          </div>

          <div class="project-features" v-if="projectList[projectIndex].features">
            <ul>
              <li v-for="(feature, index) in projectList[projectIndex].features" :key="index">
                {{ feature }}
              </li>
            </ul>
          </div>

          <a :href="projectList[projectIndex].url" target="_blank" class="project-link">
            查看项目
          </a>
        </div>
      </div>
    </el-dialog>
  </div>

  <!-- 继续浏览目标元素 -->
  <div id="perry4" style="height: 1px; margin-top: 100px;"></div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { scrollGoTo } from '@/utils';
import { ElDialog } from 'element-plus';
import 'element-plus/dist/index.css';

// 展示项目
const projectIndex = ref(0);
const projectDialog = ref(false);

const showProject = (i: number) => {
  projectIndex.value = i;
  projectDialog.value = true;
  
  // 预加载项目图片
  const img = new Image();
  img.src = projectList[i].img;
};

const handleClose = () => {
  projectDialog.value = false;
};

interface project {
  name: string;
  text: string;
  nb: string[];
  url: string;
  img: string;
  content: string;
  features?: string[];
  techStack?: string[];
}

const projectList: project[] = [
  {
    name: '今天吃什么',
    text: '一个决定今天吃什么的小程序',
    nb: ['Vue3', 'Ionic'],
    url: 'https://github.com/AMagicPear/What-to-eat-today-web',
    img: '/images/projects/what-to-eat.png',
    content: '这是一个使用Vue3和Ionic开发的小程序，帮助用户随机选择今天吃什么。',
    features: [
      '可保存多个食物，并分别设置其早上、中午、晚上时间段的权重，点击“今天吃什么”按钮，系统将根据当前时间段各个食物的权重随机选择一项。',
      '每种食物在被连续选择两次后的下一次不会再次被选择。',
      '优先选择近30次选择内从未被选中的食物。',
      '可以对列表中的食物排序',
      '用户可以主动选择特定的食物来随机选择',
      '选择时动画效果'
    ],
    techStack: ['Vue3', 'Ionic', 'Vite', 'TypeScript', 'CSS'],
  },
  {
    name: '进化',
    text: '一张专辑',
    nb: ['Ableton Live'],
    url: 'https://music.163.com/album?id=169551625&userid=497062445',
    img: '/images/projects/进化.jpg',
    content: '这是一张使用Ableton Live制作的电子音乐专辑。',
    features: [
      '嘿！我在这里',
      '庆典',
      '眺望',
      '遗书',
      '飘浮',
      '水漂',
      'SweetERROR',
      '秋千',
      '尾声'
    ],
    techStack: ['Ableton Live','电子音乐'],
  }
]
</script>

<style scoped>
.perry {
  height: auto;
  background: white;
  border-radius: 200px 200px 0 0;
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
  transition: all .3s ease-in-out;
  -webkit-transition: all .3s ease-in-out;
  -moz-transition: all .3s ease-in-out;
  -ms-transition: all .3s ease-in-out;
  -o-transition: all .3s ease-in-out;
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
  padding: 20px;
  box-sizing: border-box;
}

.perry3ContentBox:hover .perry3ContentBoxText {
  transform: scale(1);
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

.project-detail {
  display: flex;
  gap: 30px;
  background: linear-gradient(145deg, #ffffff, #f8f9fa);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  position: relative;
}

.project-status {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.project-status.active {
  background: #ebf8ff;
  color: #3182ce;
}

.project-status.completed {
  background: #f0fff4;
  color: #38a169;
}

.project-image {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.project-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.project-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #4a5568;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-badge {
  padding: 6px 12px;
  background: #e2e8f0;
  border-radius: 20px;
  font-size: 0.9rem;
  color: #4a5568;
}

.project-features {
  margin-top: 10px;
}

.project-features ul {
  list-style: none;
  padding-left: 20px;
}

.project-features li {
  position: relative;
  margin-bottom: 8px;
  font-size: 0.95rem;
  color: #4a5568;
}

.project-features li::before {
  content: "•";
  position: absolute;
  left: -15px;
  color: #4299e1;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: linear-gradient(135deg, #4299e1, #3182ce);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  width: fit-content;
  margin-top: 20px;
}

.project-link.disabled {
  background: #e2e8f0;
  color: #a0aec0;
  cursor: not-allowed;
  pointer-events: none;
}

.project-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(66, 153, 225, 0.4);
}

.project-link:active {
  transform: translateY(0);
}

@media(max-width:1070px) {
  .project-detail {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .project-image {
    width: 100%;
    height: auto;
    max-height: 300px;
  }

  .project-tech {
    justify-content: center;
  }

  .project-link {
    margin: 20px auto 0;
  }
  .perry {
    border-radius: 150px 150px 0 0;
  }

  .perryContentList {
    width: 660px;
    min-width: 660px;
  }
}

@media(max-width: 778px) {
  .perry {
    border-radius: 100px 100px 0 0;
  }

  .perryContentList {
    width: 300px;
    min-width: 300px;
  }

  .perry3ContentBoxText {
    transform: scale(1);
  }
}
</style>
