<script setup>
import Banner from '@cp/base/Banner.vue';
import SearchBib from '@cp/album/searchBib.vue'
import gpxUpload from '@cp/album/gpxUploadBtn.vue'
import TextField from '@cp/elements/TextField.vue';

</script>
<template>
    <Banner />
    <div class="container-xl py-3">
        <div class="ActName">2023 雲林半程馬拉松 - 相簿列表</div>
        <div class="ActMemo">2023-08-11，共2,000張相片</div>
        <div class="grid gap-3 mt-2">
            <div class="g-col-12 g-col-md-9 g-col-xl-6">
                <gpxUpload />
            </div>
            <div class="g-col-0 g-col-md-3 g-col-xl-6 d-md-block d-none"></div>
            <div class="g-col-12 g-col-md-5">
                <SearchBib />
            </div>
            <div class="g-col-12 g-col-md-7 area">
                <!-- <div class="area-title">搜尋</div> -->
                <div class="grid gap-2">
                    <div class="g-col-12 g-col-md-6">
                        <div class="area-title mb-1 blue">篩選相簿</div>
                        <select class="form-select">
                            <!-- v-model="c" :disabled="disabled" :class="{ 'error': props.error || error.acCounty }" @change="z = ''; t = ''" -->
                            <!-- 空選項 -->
                            <option value="" disabled>請選擇相簿</option>
                            <!-- 顯示縣市 -->
                            <option>全部</option>
                            <option>相簿1</option>
                        </select>
                    </div>
                    <div class="g-col-12 g-col-md-6">
                        <div class="area-title mb-1 blue">篩選時段</div>
                        <select class="form-select">
                            <!-- v-model="c" :disabled="disabled" :class="{ 'error': props.error || error.acCounty }" @change="z = ''; t = ''" -->
                            <!-- 空選項 -->
                            <option value="" disabled>請選擇時段</option>
                            <!-- 顯示縣市 -->
                            <option>全部</option>
                            <option>06:00~06:10</option>
                        </select>
                    </div>
                </div>
            </div>


            <!-- TEMP GPX -->
            <!-- <div class="g-col-12 g-col-md-4 area">
                <button class="w-100 btn btn-deep-main-color mb-1">上傳路徑找照片</button>
                <div class="grid gap-1 funBtn">
                    <button class="g-col-6 btn">分享</button>
                    <button class="g-col-6 btn">上傳照片</button>
                </div>
            </div> -->
            <!-- 攝影師簡介+相簿列表(含精選) -->

            <div class="g-col-12 pt-2">
                <template v-for="i in 2">
                    <!-- 一個攝影師+相簿 -->
                    <div class="photog">
                        <div class="photogDiv">
                            <img class="photogImg" src="@pic/photog.jpg" alt="">
                            <div class="ms-3">
                                <div class="name">王阿阿明</div>
                                <div class="memo mb-1">大家辛苦了！快來尋找美麗的照片吧～<br>號碼布進度：</div>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                                        style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="grid mt-3 gap-2">
                            <template v-for="i in 4">
                                <div class="g-col-12 g-col-sm-6 g-col-md-4 g-col-lg-3 area album">
                                    <img class="" src="@pic/rn_01.jpg" alt="">
                                    <a href="#">
                                        <div class="loc">終點前100m</div>
                                        <div><i class="bi bi-image-fill"></i>250張</div>
                                        <div><i class="bi bi-stopwatch"></i>06:00~07:50</div>
                                    </a>
                                </div>
                            </template>

                        </div>
                    </div>
                </template>



            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.progress {
    background-color: rgb(209, 209, 209);
}

.form-select {
    box-shadow: none;
    background-color: #e4e4e4;


    &:disabled {
        opacity: 0.5;
    }
}

.photog {
    width: 90%;
    margin: auto;
    margin-bottom: 40px;

    @media (max-width:768px) {
        width: 100%;
    }

    .photogDiv {
        display: flex;
        align-items: center;

        .name {
            font-size: 1.5rem;
        }

        .memo {
            color: var(--bs-gray);
        }

        .photogImg {
            width: 100px;
            border-radius: 50%;
        }

        @media (max-width:768px) {
            .name {
                font-size: 1.2rem;
            }

            .memo {
                font-size: 0.95rem;
            }

            .photogImg {
                width: 80px;
            }
        }
    }

    .album {
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            width: 100%;
            max-height: 220px;
            overflow: hidden;
            object-fit: cover;
            object-position: left top;
            opacity: 0.8;
        }

        a {
            display: flex;
            align-items: center;
            flex-direction: column;
            text-decoration: none;
            color: black;
        }

        .loc {
            font-size: 1.25rem;
            font-weight: bold;
        }

        &:hover {
            cursor: pointer;

            img {
                opacity: 1;
                transition: .5s;
            }

            a {
                color: var(--bs-main-color);
            }
        }

        @media (max-width:575px) {
            flex-direction: row;

            img {
                width: 30%;
                max-height: 100px;
            }

            a {
                align-items: start;
                margin-left: 10px;
            }

            .loc {
                font-size: 1rem;
            }
        }




    }
}



.search-box {
    position: relative;
    max-width: 45rem;

    .search-box-input {
        height: 2.375rem;
        border-color: #e7e6e6;
        background-color: #e7e6e6;
        padding-right: 2.375rem;

        &:focus {
            border-color: #e7e6e6;
        }
    }

    .search-box-btn {
        position: absolute;
        width: 1.875rem;
        height: 1.875rem;
        line-height: 1.875rem;
        text-align: center;
        padding: 0;
        right: 0.25rem;
        top: 0.25rem;
        font-size: 0.875rem;
    }

}
</style>