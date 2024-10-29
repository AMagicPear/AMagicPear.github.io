import { createApp } from 'vue';
import App from './App.vue';
// import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css';
import data from './assets/js/data.js';
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';
import 'viewerjs/dist/viewer.css';
import Viewer from 'viewerjs';

const app = createApp(App);

// app.use(ElementPlus);

app.mixin({
  data() {
    return {
      perry: data, // 网站文案数据
      projectDialog: false, // 项目演示窗口打开
      projectIndex: 0, // 当前展示项目索引
    };
  },
  mounted() {
    if (document.querySelector(".magicTypet")) {
      this.startTyping();
    } else {
      console.error("Element .magicTypet not found");
    }
    this.animationLoad();
  },
  methods: {
    startTyping() {
      new Typed(".magicTypet", {
        strings: this.perry.index.me,
        typeSpeed: 30,
        backDelay: 2000,
        backSpeed: 50,
        loop: true
      });
    },
    scrollGoTo(text) {
      window.scrollTo({
        top: document.querySelector(`.${text}`).offsetTop,
        behavior: "smooth"
      });
    },
    animationLoad() {
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
        a.reveal(item[0], {
          duration: 1500,
          delay: 100,
          origin: "bottom",
          mobile: true,
          distance: "2rem",
          opacity: 0.001,
          easing: "cubic-bezier(.98,0,.04,1)"
        });
      });
    },
    showProject(i) {
      this.projectIndex = i;
      this.projectDialog = true;
      setTimeout(() => {
        let dom = document.querySelector(".el-dialog__body ul");
        if (!dom) {
          return;
        }
        new Viewer(dom);
      }, 0);
    },
  },
});

app.mount('#perry');