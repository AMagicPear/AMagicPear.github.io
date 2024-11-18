import { ref } from "vue";
const data = {
    index: {
        loadMore: {
            text: "了解更多",
            class: "perry2"
        }
    },
    about: {
        loadMore: {
            text: "继续浏览",
            class: "perry3"
        }
    },
    project: {
        listLoadMore: "查看",
        loadMore: {
            text: "继续浏览",
            class: "perry4"
        }
    },
    contact: {
        title: "联系我",
        list: [
            {
                name: "邮箱",
                context: "hello@amagicpear.sbs"
            },
            {
                name: "QQ",
                context: "2559407397"
            },
            {
                name: "微信",
                context: "AMagicPear"
            }
        ]
    }
}
export const perry_data = ref(data);