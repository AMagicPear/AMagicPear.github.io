// 滚动到指定位置
export const scrollGoTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
        window.scrollTo({
            top: element.offsetTop,
            behavior: "smooth"
        });
    } else {
        console.warn(`Element with id "${id}" not found`);
    }
};
