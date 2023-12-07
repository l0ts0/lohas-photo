<script setup>
import { ref, onMounted } from 'vue'
import Banner from '@cp/base/Banner.vue'
import SearchBib from '@cp/album/searchBib.vue'
import gpxUpload from '@cp/album/gpxUploadBtn.vue'
import gallery from '@cp/album/gallery.vue'
const timeSelected = ref([])

// checked加入陣列中
function handleCheckboxChange(event) {
    const checkboxValue = event.target.value
    if (event.target.checked) {
        timeSelected.value.push(checkboxValue)
    } else {
        const index = timeSelected.value.indexOf(checkboxValue)
        if (index !== -1) {
            timeSelected.value.splice(index, 1)
        }
    }
}
// 重設
function reset() {
    timeSelected.value.splice(0)
}

// 排列出此相簿的時間間隔(10分鐘)
const a = "06:00";
const b = "09:30";
const timeIntervals = generateTimeIntervals(a, b);

function generateTimeIntervals(start, end) {
    const intervals = [];
    const startTime = parseTime(start);
    const tempTime = parseTime(start);
    const endTime = parseTime(end);
    const intervalMinutes = 9;
    const temp = startTime.getMinutes()
    // 分鐘為0結尾
    if (temp == 0) {
        intervals.push((`${formatTime(startTime)}`))
        startTime.setMinutes(startTime.getMinutes() + 1);
    } else {
        const min = (60 - startTime.getMinutes()) % 10;
        // 如果是51分~59分
        if (min < 9) {
            tempTime.setMinutes(startTime.getMinutes() + min);
            intervals.push((`${formatTime(startTime)} ~ ${formatTime(tempTime)}`))
            startTime.setMinutes(startTime.getMinutes() + min + 1);
        }
        // 其他1~9結尾的分鐘數
        else {
            tempTime.setMinutes(startTime.getMinutes() + min);
            intervals.push((`${formatTime(startTime)} ~ ${formatTime(tempTime)}`))
            startTime.setMinutes(tempTime.getMinutes() + 1);
        }
    }
    let currentTime = startTime;

    while (currentTime <= endTime) {
        const intervalEnd = addMinutes(currentTime, intervalMinutes);
        if (currentTime.getTime() == endTime.getTime()) {
            intervals.push(`${formatTime(currentTime)}`)
        } else {
            if (intervalEnd > endTime) {
                intervals.push(`${formatTime(currentTime)} ~ ${formatTime(endTime)}`);
            }
            else {
                intervals.push(`${formatTime(currentTime)} ~ ${formatTime(intervalEnd)}`);
            }
        }


        currentTime = addMinutes(intervalEnd, 1);

    }

    return intervals;
}

function parseTime(timeString) {
    const [hours, minutes] = timeString.split(":").map(Number);
    return new Date(0, 0, 0, hours, minutes);
}

function formatTime(time) {
    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
}

function addMinutes(time, minutes) {
    const newTime = new Date(time);
    newTime.setMinutes(time.getMinutes() + minutes);
    return newTime;
}
</script>
<template>
    <Banner />
    <div class="container-xl py-3">
        <a href="#" class="backList link-orange">
            <span class="ActName"><i class="bi bi-chevron-left"></i> 2023 雲林半程馬拉松-終點前100m</span>
        </a>
        <div class="ActMemo">2023-08-11，共250張相片，<i class="bi bi-camera-fill"></i>
            攝影師：王阿阿阿明</div>
        <div class="grid gap-3 mt-2">
            <div class="g-col-12 g-col-lg-7 pt-lg-2">
                <gpxUpload />
            </div>
            <div class="g-col-12 g-col-lg-5">
                <SearchBib />
            </div>
            <div class="g-col-12 area">
                <div class="area-title orange">條件篩選 - 時間</div>
                <div class="d-flex gap-2 mt-2 flex-wrap">
                    <template v-for="(interval, index) in timeIntervals" :key="index">
                        <input type="checkbox" class="btn-check timeBtnCheck" :id="index" :value="interval"
                            @change="handleCheckboxChange" :checked="timeSelected.includes(interval)">
                        <label class="btn timeBtn text-white" :class="timeSelected.includes(interval) ? 'checked' : ''"
                            :for="index">{{ interval }}</label>
                    </template>
                    <button class="btn btn-red" @click="reset()">重設</button>
                </div>
            </div>
            <div class="g-col-12">
                <gallery />
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.backList {
    text-decoration: none;

    &:hover {
        border-bottom: 2px solid;
    }
}

.timeBtn {
    background-color: #b3b3b3;
    border: 0;

    &:hover {
        background-color: #868686;
    }
}

.checked {
    background-color: var(--bs-light-orange) !important;
}

// .timeBtnCheck:checked + .timeBtn {

// }
</style>
