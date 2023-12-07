<template>
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
</template>
  
<script setup>
import { ref, onMounted } from 'vue';

const deg = 6;
const hr = ref(null);
const mn = ref(null);
const sc = ref(null);

const updateClock = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourRotation = hours * 30 + minutes * 0.5;
    const minuteRotation = minutes * deg;
    const secondRotation = seconds * deg;

    hr.value.style.transform = `rotateZ(${hourRotation}deg)`;
    mn.value.style.transform = `rotateZ(${minuteRotation}deg)`;
    sc.value.style.transform = `rotateZ(${secondRotation}deg)`;
};

onMounted(() => {
    setInterval(updateClock, 1000);
    updateClock();
});
</script>
  
<style scoped lang="scss">
.clock {
    width: 350px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(https://fadzrinmadu.github.io/hosted-assets/neumorphism-working-analog-clock/clock.png);
    background-size: cover;
    border: 4px solid #ececec;
    border-radius: 50%;
    box-shadow: 0 -15px 15px rgba(211, 211, 211, 0.05),
        inset 0 -15px 15px rgba(211, 211, 211, 0.05),
        0 15px 15px rgba(95, 95, 95, 0.3),
        inset 0 15px 15px rgba(95, 95, 95, 0.3);
}

.clock:before {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
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
    width: 160px;
    height: 160px;
}

.clock .min,
.mn {
    width: 190px;
    height: 190px;
}

.clock .sec,
.sc {
    width: 230px;
    height: 230px;
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
    height: 80px;
    background: #ff105e;
    z-index: 10;
    border-radius: 6px 6px 0 0;
}

.mn::before {
    content: '';
    position: absolute;
    width: 4px;
    height: 90px;
    background: yellow;
    z-index: 11;
    border-radius: 6px 6px 0 0;
}

.sc::before {
    content: '';
    position: absolute;
    width: 2px;
    height: 150px;
    background: green;
    z-index: 12;
    border-radius: 6px 6px 0 0;
}
</style>
  