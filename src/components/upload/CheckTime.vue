<template>
    <!-- 相機校時驗證 -->
    <div class="title-smReg rounded-top bg-light-orange">
        <span class="d-flex align-items-center">
            <i class="bi bi-wrench-adjustable"></i>&thinsp;相機校時驗證
            <button class="btn btn-white text-light-orange title-btn" data-bs-toggle="modal"
                data-bs-target="#correctTimeModal">驗證教學</button>
        </span>
    </div>
    <div class="grid p-2 gap-3">
        <div class="g-col-12 g-col-md-5">
            <CorrectTime />
        </div>
        <div class="g-col-12 g-col-md-7">
            <div class="title-smReg rounded-top bg-light-gray1-200 text-deep-gray sm-text">
                <span>操作說明</span>
            </div>
            <div class="border border-2 border-light-gray1-200 rounded-bottom p-2 grid gap-1">
                <div class="g-col-12 step-title">步驟1：使用相機 <i class="bi bi-camera-fill"></i> 拍下畫面上的QRcode以及14碼數字
                </div>
                <div class="g-col-12 step-title">步驟2：上傳剛剛拍攝的相片</div>
                <!-- 選擇檔案 -->
                <template v-if="!save">
                    <input type="file" ref="hiddenfile" accept="image/*" @change="readExif" class="g-col-12 hiddenInput " />
                </template>
                <div class="g-col-12 step-title">步驟3：輸入相片中的14位數字</div>
                <!-- 錯誤訊息 -->
                <div v-if="catchError" class="mt-1 g-col-12">
                    <span class=" bg-red p-1 rounded text-white">{{ catchError }}</span>
                </div>
                <!-- 照片(只要有選就會顯示) -->
                <div v-if="imgSrc.length > 0" class="g-col-12">
                    <img class="upload-img" id="fg" :src="imgSrc" />
                </div>
                <!-- 輸入框(有dateTime才可以填) -->
                <div class="g-col-12">
                    <TextField :disabled="!captureDateTime" :place-holder="'請輸入相片中的14位數字(不需空格)'" v-model="imgTime"
                        :maxlength="14" />
                </div>
                <!-- dateTime -->
                <div class="g-col-12 time-text text-light-orange" v-if="captureDateTime">
                    相片時間:
                    <span>{{ captureDateTime }}</span>
                </div>
                <!-- 相差時間 -->
                <div class="g-col-12 time-text text-light-red" v-if="differ">
                    您的相機時間與現實時間相差：{{ differ }}秒
                </div>
                <div class="g-col-12 d-flex justify-content-end">
                    <Button class="btn btn-green text-white" @click="sendDataToParent" :disabled="!differ">儲存結果</Button>
                </div>
            </div>
        </div>

    </div>
</template>
  
<script setup>
import 'exif-js'; // 引入 exif-js 函數庫
import { ref, watch } from 'vue'; // 引入 emits
import TextField from "@cp/elements/TextField.vue"
import CorrectTime from "@cp/checkTime/CorrectTime.vue"


// 拍攝日期和時間
var differ;
const imgTime = ref("");
const save = ref(false);
const catchError = ref("");
const captureDateTime = ref("");

// 圖片的 src
const imgSrc = ref("");

// 讀取 exif
const readExif = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    catchError.value = "";
    reader.readAsDataURL(file);
    reader.onload = () => {
        imgSrc.value = reader.result;
        var img = new Image();
        img.src = imgSrc.value;
        img.onload = () => {
            window.EXIF.getData(img, function () {
                const temp = window.EXIF.getTag(this, "DateTime");
                if (temp != null) {
                    let dateTime = temp.split(' ');
                    dateTime[0] = dateTime[0].toString().replaceAll(':', '-');
                    // 将时间字符串转换为 Date 对象
                    captureDateTime.value = dateTime[0] + " " + dateTime[1];
                }
                else {
                    captureDateTime.value = "";
                    catchError.value = "此相片無拍攝時間，請選擇別的檔案。";
                }
            });
        }
    }
}
// 傳diff去父組件
const emit = defineEmits(['change'])
const sendDataToParent = function () {
    save.value = true;
    emit('change', differ);
};

// 監聽輸入
watch(imgTime, (newVal) => {
    if (imgTime.value.length === 14) {
        calculateTimeDifference();
    }
    else {
        differ = "";
    }
});
function calculateTimeDifference() {
    const imgDate = new Date(
        `${imgTime.value.substring(0, 4)}-${imgTime.value.substring(4, 6)}-${imgTime.value.substring(6, 8)} ` +
        `${imgTime.value.substring(8, 10)}:${imgTime.value.substring(10, 12)}:${imgTime.value.substring(12, 14)}`
    );
    const captureDate = new Date(captureDateTime.value);

    const timeDifferenceMs = imgDate - captureDate;
    const timeDifferenceSec = timeDifferenceMs / 1000;

    differ = timeDifferenceSec;
}
</script>
  
<style scoped lang="scss">
input[type="file"] {
    cursor: pointer;

    &::file-selector-button {
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 1.125rem;
        background-color: var(--bs-light-orange);
        color: white;
        border: 0;
        cursor: pointer;
        margin-right: 10px;

        @media (max-width:768px) {
            font-size: 1rem;
        }

        &:hover {
            background-color: var(--bs-orange);
            transition: .2s;
        }
    }
}


.upload-img {
    width: 70%;
    margin-bottom: 10px;

    @media (max-width:992px) {
        width: 90%;
    }

    @media (max-width:768px) {
        width: 100%;
    }
}

.time-text {
    font-size: 1.25rem;
    font-weight: bold;

    @media (max-width:768px) {
        font-size: 1.1rem;
    }
}

.step-title {
    font-size: 1.125rem;
    font-weight: bold;

    @media (max-width:768px) {
        font-size: 1rem;
    }
}
</style>

  


  