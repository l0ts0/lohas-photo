<template>
    <div class="grid gap-1">
        <div class="g-col-12 ct-title">
            您的相機需要做進一步驗證，讓相片更容易被找到。
        </div>
        <div class="g-col-12 g-col-lg-6 a-center j-center">
            <!-- <img :src="qrCodeImage" alt="QR Code" /> -->
            <!-- <Clock /> -->
            <div class="clock">
                <div class="hour">
                    <div class="hr" ref="hr"></div>
                </div>
                <div class="min">
                    <div class="mn" ref="mn"></div>
                </div>
                <div class="sec">
                    <div class="sc" ref="sc"></div>
                </div>
            </div>
        </div>
        <div
            class="g-col-12 g-col-lg-6 d-flex flex-column justify-content-center align-items-center align-items-lg-start">
            <span class="ct-title text-gray-500">現在時間</span>
            <div class="ct-content" v-for="i in formattedCurrentTime">{{ i }}</div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import QRCode from 'qrcode';
import Clock from '@cp/upload/Clock.vue';

const qrCodeSize = 200;
const qrCodeImage = ref('');
const formattedCurrentTime = ref([]);
const date = ref('');
const time = ref('');

const deg = 6;
const hr = ref(null);
const mn = ref(null);
const sc = ref(null);

// window width
const windowWidth = ref(window.innerWidth);
onMounted(() => {
    window.addEventListener("resize", function () {
        windowWidth.value = window.innerWidth;
    });
});


onMounted(() => {
    updateClock();
    setInterval(updateClock, 1000); // 每秒更新一次
});

const updateClock = () => {
    const currentDateTime = new Date();
    const formattedDateTime = formatDateTime(currentDateTime);

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // 更新時鐘指針的旋轉角度
    const hourRotation = hours * 30 + minutes * 0.5;
    const minuteRotation = minutes * deg;
    const secondRotation = seconds * deg;

    hr.value.style.transform = `rotateZ(${hourRotation}deg)`;
    mn.value.style.transform = `rotateZ(${minuteRotation}deg)`;
    sc.value.style.transform = `rotateZ(${secondRotation}deg)`;

    // 更新 formattedCurrentTime
    formattedCurrentTime.value = formattedDateTime.split(' ').map(str => str.replace(/[-:]/g, ' '));
};



const formatDateTime = (dateTime) => {
    const year = dateTime.getFullYear();
    const month = String(dateTime.getMonth() + 1).padStart(2, '0');
    const day = String(dateTime.getDate()).padStart(2, '0');
    const hours = String(dateTime.getHours()).padStart(2, '0');
    const minutes = String(dateTime.getMinutes()).padStart(2, '0');
    const seconds = String(dateTime.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
</script>

<style scoped lang="scss">
.ct-title {
    font-size: 1.2rem;
    font-weight: bold;
}

.ct-content {
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--bs-orange);
}
.clock {
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(@pic/clock.png);

    background-size: cover;
    border: 4px solid #ececec;
    border-radius: 50%;
    box-shadow: 0 -11px 11px rgba(211, 211, 211, 0.05),
        inset 0 -11px 11px rgba(211, 211, 211, 0.05),
        0 11px 11px rgba(95, 95, 95, 0.3),
        inset 0 11px 11px rgba(95, 95, 95, 0.3);
}

.clock:before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background: #777777;
    border-radius: 50%;
    z-index: 10000;
}

.clock .hour,
.clock .min,
.clock .sec {
    position: absolute;
}

.clock .hour,
.hr {
    width: 70px;
    height: 70px;
}

.clock .min,
.mn {
    width: 110px;
    height: 110px;
}

.clock .sec,
.sc {
    width: 130px;
    height: 130px;
}

.hr,
.mn,
.sc {
    display: flex;
    justify-content: center;
    position: absolute;
    border-radius: 50%;
}

.hr::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 35px;
    background: transparent;
    z-index: 10;
    background: #FFC862;
    // border: 3px #FFC862 solid;
    border-radius: 6px 6px 0 0;
}

.mn::before {
    content: '';
    position: absolute;
    width: 5px;
    height: 55px;
    background: #f37500;
    z-index: 11;
    border-radius: 6px 6px 0 0;
}

.sc::before {
    content: '';
    position: absolute;
    width: 2px;
    height: 90px;
    background: #747474;
    z-index: 12;
    border-radius: 6px 6px 0 0;
}
</style>
