<template>
  <div id="app">  <div id="perry" v-if="perry" v-cloak>
        <!-- 首页 -->
        <div class="perry magic">
            <!-- 内容 -->
            <div class="perryContent magicContent">
                <div>
                    <div class="ContentTitle">
                        <span>{{perry.index.title}}</span>
                        <span class="magicTypet"></span>
                    </div>
                    <div class="ContentSubTitle">{{perry.index.subTitle}}</div>
                    <ul class="ContentContact">
                        <li v-for="(item, index) in perry.index.contact" :key="index">
                            <a :href="item.link" target="_blank">
                                <el-tooltip :content="item.name" placement="bottom" effect="light">
                                    <i :class="'fa ' + item.icon"></i>
                                </el-tooltip>
                            </a>
                        </li>
                    </ul>
                    <div class="magicLoadMore">
                        <div class="loadMore" @click="scrollGoTo(perry.index.loadMore.class)">
                            {{perry.index.loadMore.text}}</div>
                    </div>
                </div>
            </div>
            <!-- 壁纸 -->
            <div class="perryBg magicBg"></div>
        </div>
        <!-- 个人简介 -->
        <div class="perry perry2">
            <!-- 内容 -->
            <div class="perryContent perry2Content">
                <div>
                    <p class="perry2ContentTitle">{{perry.about.title}}</p>
                    <div class="perry2ContentMe">
                        <div class="perry2ContentImg">
                            <img :src="perry.about.me.img" :alt="perry.about.me.img">
                        </div>
                        <div class="perry2ContentText">
                            <div v-html="perry.about.me.content" class="perry2ContentTextBox"></div>
                            <ul>
                                <li v-for="(item, index) in perry.about.ability"
                                    :style="'border-top: 5px solid ' + item.color">
                                    <i :class="'fa ' + item.icon "></i>
                                    <span :style="'color:' + item.color">{{item.bfb}}</span>
                                    <p>{{item.title}}</p>
                                    <p>{{item.subTitle}}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="perry2LoadMore">
                        <div class="loadMore" @click="scrollGoTo(perry.about.loadMore.class)">
                            {{perry.about.loadMore.text}}</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 项目介绍 -->
        <div class="perry perry3">
            <div class="perryContent perry3Content">
                <div>
                    <p class="perry2ContentTitle">{{perry.project.title}}</p>
                    <div class="perry3ContentList">
                        <div class="perry3ContentBox" v-for="(item, index) in perry.project.list" :key="index">
                            <img :src="item.img" :alt="item.img">
                            <div class="perry3ContentBoxText">
                                <div>
                                    <p class="perry3ContentTitle">{{item.name}}</p>
                                    <ul>
                                        <li v-for="(nb, index) in item.nb" :key="index">
                                            {{nb}}
                                            <span v-if="index != item.nb.length - 1">+</span>
                                        </li>
                                    </ul>
                                    <p class="perry3ContentText">{{item.text}}</p>
                                    <div class="perry3ContentBtn" @click="showProject(index)">
                                        {{perry.project.listLoadMore}}</div>
                                </div>
                            </div>
                        </div>
                        <div class="perry3ContentBoxTc"></div>
                        <div class="perry3ContentBoxTc"></div>
                    </div>
                    <div class="perry3LoadMore">
                        <div class="loadMore" @click="scrollGoTo(perry.project.loadMore.class)">
                            {{perry.project.loadMore.text}}</div>
                    </div>
                </div>
            </div>
            <el-dialog :title="perry.project.list[projectIndex].name" :visible.sync="projectDialog"
                append-to-body="true" modal-append-to-body="true">
                <a :href="perry.project.list[projectIndex].url" class="perry3ContentBtn" target="_blank">点我查看</a>
                <div v-html="perry.project.list[projectIndex].content"></div>
            </el-dialog>
        </div>
        <!-- 联系我 -->
        <div class="perry perry4">
            <!-- 壁纸 -->
            <div class="perryBg perry4Bg"></div>
            <!-- 内容 -->
            <div class="perryContent perry4Content">
                <div>
                    <p class="perry2ContentTitle">{{perry.contact.title}}</p>
                    <ul>
                        <li v-for="(item, index) in perry.contact.list">
                            <p class="perry4ItemTitle">{{item.name}}</p>
                            <p class="perry4ItemContext">{{item.context}}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div></div>

</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* 你的 CSS 代码 */
</style>