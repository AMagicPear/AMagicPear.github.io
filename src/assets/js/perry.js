import data from './data.js'

new Vue({
    el: "#perry",
    data: {
        perry: data, // 网站文案数据
        projectDialog: false, // 项目演示窗口打开
        projectIndex: 0, // 当前展示项目索引
    },
    mounted() {
        // console.log(this.perry);
        // 打字开启
        this.startTyping();
        // 动画加载
        this.animationLoad();
    },
    methods: {
        // 打字开启
        startTyping() {
            new Typed(".magicTypet", {
                strings: this.perry.index.me,
                typeSpeed: 30,
                backDelay: 2000,
                backSpeed: 50,
                loop: true
            })
        },
        // 平滑跳转
        scrollGoTo(text) {
            window.scrollTo({
                top: document.querySelector(`.${text}`).offsetTop,
                behavior: "smooth"
            });
        },
        // 动画加载
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
        // 项目展示
        showProject(i) {
            this.projectIndex = i;
            this.projectDialog = true;
            setTimeout(() => {
                let dom = document.querySelector(".el-dialog__body ul");
                if (!dom) {
                    return;
                }
                let Viewer = window.Viewer;
                new Viewer(dom);
            }, 0);
        },
    },
})