import { ref } from "vue";
// 滚动到指定位置
export const scrollGoTo = (text) => {
    window.scrollTo({
        top: (document.querySelector(`.${text}`) as HTMLElement).offsetTop,
        behavior: "smooth"
    });
};
// 展示项目
export const projectIndex = ref(0); // 当前展示项目索引
export const projectDialog = ref(false); // 项目演示窗口打开
export const showProject = (i: number) => {
    projectIndex.value = i;
    projectDialog.value = true;
    setTimeout(() => {
        let dom = document.querySelector(".el-dialog__body ul");
        new Viewer(dom as HTMLElement);
    }, 0);
};