// 滚动到指定位置
export const scrollGoTo = (text) => {
    window.scrollTo({
        top: (document.querySelector(`.${text}`) as HTMLElement).offsetTop,
        behavior: "smooth"
    });
};