<script setup>
import Banner from '@cp/base/Banner.vue';
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

const slideList = [{ imgSrc: '../src/assets/resource/list_01.jpg', alt: '01啦！', href: "#" }, { imgSrc: '../src/assets/resource/list_02.jpg', alt: '02啦！', href: "#" }, { imgSrc: '../src/assets/resource/list_03.jpg', alt: '03啦！', href: "#" }]
slideList.forEach(element => {
    console.log(element);

});
</script>
<template>
    <Banner />
    <div class="container-xl py-3">
        <div class="grid gap-3 gap-md-3.5">
            <!-- 近期相簿 -->
            <div class="g-col-12 bg-white rounded nearAlbum shadow-sm">
                <div class="title-smReg rounded-top pink-yellow">
                    <span><i class="bi bi-clock-history"></i> 近期相簿</span>
                    <button class="btn btn-white fw-bold text-gray">查看全部></button>
                </div>
                <div class="grid p-2 gap-2">
                    <div class="g-col-6 g-col-sm-4 g-col-md-3">
                        <div class="card text-white">
                            <a href="#"><img src="@pic/rn_01.jpg" class="card-img" alt="...">
                                <div class="floatText link-white rounded-bottom">
                                    <div class="card-title fw-bold">2023 烤雞馬</div>
                                    <div class="card-text">王大明</div>
                                    <!-- <p class="card-text">2023-08-14 00:00:00</p> -->
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="g-col-6 g-col-sm-4 g-col-md-3">
                        <div class="card text-white">
                            <a href="#"><img src="@pic/rn_02.jpg" class="card-img" alt="...">
                                <div class="floatText link-white rounded-bottom">
                                    <div class="card-title fw-bold">2023 烤雞馬</div>
                                    <div class="card-text">王大明</div>
                                    <!-- <p class="card-text">2023-08-14 00:00:00</p> -->
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="g-col-4 g-col-md-3 d-none d-sm-block">
                        <div class="card text-white">
                            <a href="#"><img src="@pic/rn_01.jpg" class="card-img" alt="...">
                                <div class="floatText link-white rounded-bottom">
                                    <div class="card-title fw-bold">2023 烤雞馬</div>
                                    <div class="card-text">王大明</div>
                                    <!-- <p class="card-text">2023-08-14 00:00:00</p> -->
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="g-col-3 d-none d-md-block">
                        <div class="card text-white">
                            <a href="#"><img src="@pic/rn_02.jpg" class="card-img" alt="...">
                                <div class="floatText link-white rounded-bottom">
                                    <div class="card-title fw-bold">2023 烤雞馬</div>
                                    <div class="card-text">王大明</div>
                                    <!-- <p class="card-text">2023-08-14 00:00:00</p> -->
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <div class="g-col-12 shadow-sm">
                <div class="info">
                    <i class="bi bi-hearts"></i> 沒有拍到滿意的照片嗎？沒關係～以下活動都還會出現我們的攝影師喔！！快<span class="emphasize">手刀報名</span>吧
                </div>
            </div>

            <!-- 活動推薦 -->
            <div class="g-col-12 g-col-lg-6 shadow-sm">
                <div class="title-smReg rounded-top bg-deep-sp-color">
                    <div>
                        <span><i class="bi bi-fire"></i> 報名活動推薦</span>
                        <!-- <div class="fs-6">這次沒有拍到滿意的照片嗎？沒關係～<br>以下活動都還會出現我們的攝影師喔！！！</div>     -->
                    </div>

                    <button class="btn btn-white fw-bold text-gray">樂活報名網<i
                            class="bi bi-box-arrow-in-up-right"></i></button>
                </div>
                <div class="py-2 recommend mb-0 bg-white rounded-bottom">
                    <Carousel :itemsToShow="1.4" :wrapAround="true" :transition="500" :autoplay="1000">
                        <Slide v-for="(slide, index) in slideList" :key="index">
                            <a :href="slide.href">
                                <img class="carousel__item" :src="slide.imgSrc" :alt="slide.alt">
                            </a>
                        </Slide>
                        <template #addons>
                            <Navigation />
                        </template>
                    </Carousel>
                </div>
            </div>
            <!-- 攝影師排行 -->
            <div class="g-col-12 g-col-lg-6">
                <div class="title-smReg rounded-top bg-deep-main-color">
                    <span><i class="bi bi-graph-up-arrow"></i> 攝影師排行</span>
                    <button class="btn btn-white fw-bold">我想了解付費攝影師 <i class="bi bi-camera-fill"></i></button>
                </div>
                <div class="p-2 phg-rank bg-white rounded-bottom shadow-sm">
                    <div class="grid gap-2 fs-6 bg-gray py-2 mb-1 text-white rounded px-2">
                        <div class="g-col-7">
                            <span>攝影師</span>
                        </div>
                        <div class="g-col-5">已拍攝場數</div>
                    </div>
                    <div class="px-1">
                        <div class="grid gap-2 fs-5 fw-bold text-dark-yellow">
                            <div class="g-col-7">
                                <i class="bi bi-trophy-fill"></i>
                                <span> 攝影小天才</span>
                            </div>
                            <div class="g-col-5">100場</div>
                        </div>
                        <div class="grid gap-2 fs-5 fw-bold text-light-blue">
                            <div class="g-col-7">
                                <i class="bi bi-2-circle-fill"></i>
                                <span> 123456</span>
                            </div>
                            <div class="g-col-5">50場</div>
                        </div>
                        <div class="grid gap-2 fs-5  fw-bold text-light-blue-green">
                            <div class="g-col-7">
                                <i class="bi bi-3-circle-fill"></i>
                                <span> 123456</span>
                            </div>
                            <div class="g-col-5">50場</div>
                        </div>
                        <div class="grid gap-2 fs-5 text-light-gray1">
                            <div class="g-col-7">
                                <i class="bi bi-4-circle-fill"></i>
                                <span> 123456</span>
                            </div>
                            <div class="g-col-5">50場</div>
                        </div>
                        <div class="grid gap-2 fs-5 text-light-gray1">
                            <div class="g-col-7">
                                <i class="bi bi-5-circle-fill"></i>
                                <span> 123456</span>
                            </div>
                            <div class="g-col-5">50場</div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <!-- 活動列表 -->
            <div class="g-col-12 bg-white rounded shadow-sm">
                <div class="title-smReg rounded-top blue-green">
                    <span><i class="bi bi-image-fill"></i> 活動列表</span>
                    <button class="btn btn-white fw-bold">查看更多></button>
                </div>
                <div class="p-2">
                    <div class="select mb-2">
                        <div class="search-box">
                            <span class="bi bi-search"></span>
                            <input type="text" class="form-control" placeholder="找活動：日期、活動名稱、所在城市">
                        </div>
                    </div>
                    <table class="table table-striped mb-0">
                        <thead>
                            <tr>
                                <th scope="col" class="d-none d-md-block">日期</th>
                                <th scope="col">活動名稱</th>
                                <th scope="col">所在城市</th>
                                <th class="d-none d-md-block" scope="col">攝影師 / 照片數量</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- <template v-for="(a_v, a_i) in filtered">
                                <tr v-if="a_v.pjDate.split('-')[0] == year">
                                    <td>{{ a_v.pjDate.split(' ')[0] }}</td>
                                    <td class="text-start">
                                        <a href="javascript:void(0)" @click="gotoDashboard(a_v)">
                                            {{ a_v.pjDBName }} {{ a_v.pjName }}
                                        </a>
                                    </td>
                                    <td>{{ a_v.pjLocation }}</td>
                                    <td>{{ status_code.activity[a_v.pjStatus] }}</td>
                                </tr>
                            </template> -->
                            <tr>
                                <td class="d-none d-md-block">2023-08-11</td>
                                <td>
                                    <div class="d-block d-md-none">
                                        2023-08-11
                                    </div>
                                    雲林全程馬拉松
                                </td>
                                <td>雲林縣</td>
                                <td class="d-none d-md-block">3位 / 1,000 張</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
//近期相簿
.nearAlbum {
    .card-img {
        opacity: 1;
        transition: 0.3s;
        filter: saturate(1.2);

        &:hover {
            opacity: 0.8;
        }
    }

    .floatText {
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        height: fit-content;
        padding: 10px;
        background: rgba(0, 0, 0, 0.5);

        .card-title {
            font-size: 1.25rem;

            @media (max-width:768px) {
                font-size: 1rem;
            }
        }

        .card-text {
            font-size: 1rem;

            @media (max-width:768px) {
                font-size: 0.9rem;
            }
        }


    }
}


.emphasize {
    color: yellow;
    animation: yellow-red 1s steps(1, start) 0s infinite none;
}

@keyframes yellow-red {
    0% {
        color: black;
    }

    50% {
        color: yellow;
    }

    100% {
        color: red;
    }
}

//報名活動推薦
.recommend {
    .carousel__slide {
        padding: 5px;
    }

    .carousel__viewport {
        perspective: 2000px;
    }

    .carousel__track {
        transform-style: preserve-3d;
    }

    .carousel__slide--sliding {
        transition: 0.5s;
    }

    .carousel__slide {
        opacity: 0.9;
        transform: rotateY(-20deg) scale(0.9);
    }


    .carousel__slide--prev {
        opacity: 0.5;
        transform: rotateY(-10deg) scale(0.95);
    }

    .carousel__slide--next {
        opacity: 0.5;
        transform: rotateY(10deg) scale(0.95);
    }

    .carousel__slide--active {
        opacity: 1;
        transform: rotateY(0) scale(1.2);
    }

    .carousel__item {
        width: 90%;
    }
}

// 攝影師排行
.phg-rank div {
    @media (max-width:575px) {
        font-size: 1rem;
    }
}

//活動列表
.search-box {
    position: relative;
    width: 25rem;

    @media screen and (max-width: 767px) {
        width: 100%;
    }

    span {
        width: 2rem;
        height: 2rem;
        line-height: 2rem;
        color: var(--bs-gray-600);
        position: absolute;
        top: calc((2.375rem - 2rem) / 2);
        left: calc((2.375rem - 2rem) / 2);
        text-align: center;
    }

    input {
        padding-left: 2.375rem;
        background-color: var(--bs-light-gray);
    }
}

table {
    border-radius: 0.5rem;
    overflow: hidden;
    text-align: center;
    border-collapse: separate;
    border-spacing: 0;
    background-color: white;

    thead {
        background-color: var(--bs-deep-gray);
        color: white;
        border: 0.0625rem solid var(--bs-deep-gray);
    }

    tbody {
        tr {
            vertical-align: middle;

            >*:first-child {
                border-left: 0.0625rem solid var(--bs-table-border-color);
            }

            >*:last-child {
                border-right: 0.0625rem solid var(--bs-table-border-color);
            }

            &:last-child {
                >*:first-child {
                    border-bottom-left-radius: 0.5rem;
                }

                >*:last-child {
                    border-bottom-right-radius: 0.5rem;
                }

                >* {
                    border-bottom: 0.0625rem solid var(--bs-table-border-color);
                }
            }
        }
    }
}
</style>
  