<template>
    <div class="body" id="body">
        <div class="card" id="key">
            <div class="box font">
                <photoLogo />
                <div class="title">樂活照相館會員登入</div>

                <div class="form-floating">
                    <input type="account" class="form-control" id="input-acct" placeholder="name" v-model="acct" />
                    <label for="input-acct">帳號</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="input-pswd" placeholder="password" v-model="pswd"
                        @keyup.enter="login()" />
                    <label for="input-pswd">密碼</label>
                </div>
                <div class="form-floating forgetPwd link-main-color pt-2 "><a class="link-main-color" href="#">忘記密碼</a>？
                </div>
                <div class="form-floating d-flex flex-row gap-2">
                    <button class="btn btn-lg btn-deep-main-color text-white" @click="SignUp()">
                        註冊
                    </button>
                    <button class="btn btn-lg btn-deep-sp-color text-white" @click="login">
                        登入
                    </button>
                </div>
                <!-- TEMP 暫不啟用 -->
                <!-- <button class="btn btn-lg btn-deep-sp-color text-white" @click="login">
                    樂活會員登入
                </button> -->
            </div>
            <div class="box back" id="back">
                <button class="btn btn-gray BackToLogin" @click="SignUp()"><i
                        class="bi bi-chevron-double-left"></i></button>
                <div class="title text-deep-main-color mt-4">樂活照相館會員註冊
                </div>
                <div class="grid rounded-3 p-0 gap-0" style="width: 100%;">
                    <!-- 暱稱 -->
                    <label class="g-col-12 g-col-sm-2 dataLabel required">暱稱</label>
                    <div class="g-col-12 g-col-sm-3 item-input mb-1 mb-sm-3">
                        <TextField :maxlength=50 hint-color-class="d-block m-0 text-end" />
                    </div>
                    <!-- 帳號 -->
                    <label class="g-col-12 g-col-sm-2 dataLabel required">帳號</label>
                    <div class="  g-col-12 g-col-sm-5 item-input mb-1 mb-sm-3">
                        <TextField :maxlength=50 hint-color-class="d-block m-0 text-end" />
                    </div>
                    <!-- 密碼 -->
                    <label class="g-col-12 g-col-sm-2 dataLabel required">密碼</label>
                    <div class="  g-col-12 g-col-sm-3 item-input mb-1 mb-sm-3">
                        <TextField :maxlength=50 hint-color-class="d-block m-0 text-end" />
                    </div>
                    <!-- 確認密碼 -->
                    <label class="g-col-12 g-col-sm-3 dataLabel required">確認密碼</label>
                    <div class="  g-col-12 g-col-sm-4 item-input mb-1 mb-sm-3">
                        <TextField :maxlength=50 hint-color-class="d-block m-0 text-end" place-holder="再次輸入密碼"/>
                    </div>
                    <!-- 縣市 -->
                    <label class="g-col-12 g-col-sm-2 dataLabel required">居住地</label>
                    <div class="  g-col-12 g-col-sm-3 item-input mb-1 mb-sm-3">
                        <select class="form-select" id="form-acCounty">
                            <!-- 空選項 -->
                            <option value="" disabled selected>請選擇縣市</option>
                            <!-- 顯示縣市 -->
                            <option>臺中市</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                    <!-- Email -->
                    <label class="g-col-12 g-col-sm-2 dataLabel required">Email</label>
                    <div class="  g-col-12 g-col-sm-5 item-input mb-1">
                        <TextField :maxlength=50 :hint-color-class="'text-light-orange'" :hint-icon="'bi bi-info-circle'" :hint="'忘記密碼時傳送訊息用'" place-holder="lohasnet.tw@gmail.com"/>
                    </div>

                </div>
                <button class="btn btn-lg btn-deep-main-color text-white">
                    註冊
                </button>
            </div>
        </div>

    </div>
</template>
<script setup>
import { ref,computed,onMounted } from 'vue';
import photoLogo from '@cp/base/photo-logo.vue';
import TextField from '@cp/elements/TextField.vue';

function SignUp() {
    const element = document.getElementById('key');
    if (element.classList.contains('flipped')) {
        element.classList.remove('flipped');
    }
    else {
        element.classList.add('flipped');
    }
}
const elementA = ref(null);
const elementB = ref(null);

onMounted(() => {
  elementA.value = document.getElementById('body');
  elementB.value = document.getElementById('back');
  
  if (elementB.value) {
    elementB.value.addEventListener('resize', updateElementAHeight);
  }

  updateElementAHeight();
});

function updateElementAHeight() {
  if (elementA.value && elementB.value) {
    const heightOfB = elementB.value.clientHeight;
    const minHeightOfA = heightOfB * 1.05;
    elementA.value.style.minHeight = minHeightOfA + 'px';
  }
}

</script>
<style scoped lang="scss">
.body {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    // background-image: linear-gradient(120deg, #004F94 0%, #8cc8e4 100%);
    // background-image: linear-gradient(120deg, #FFFCF7 0%, #d5cfff 100%);
    flex-grow: 1;
    min-height: 500px;
    .card {
        position: relative;
        width: 40vw;
        // min-height: 25rem;
        transition: transform 1s ease;
        transform-style: preserve-3d;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        border: unset;
        border-radius: var(--bs-border-radius-xl);

        @media (max-width: 1480px) {
            width: 80vw;
        }

        @media (max-width: 767px) {
            width: 90vw;
            flex-direction: column;
            min-height: unset;
            border-radius: var(--bs-border-radius-lg);
        }

        @mixin box {
            width: 100%;
            flex-grow: 0;
            flex-shrink: 0;
            padding: 2rem 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            @media (max-width: 767px) {
                width: 100%;
            }
        }

        .back {
            background-color: #555;
            transform: rotateY(180deg);
            /*繞著Y軸旋轉*/
            height: auto;
        }

        .box {
            // TEMP
            position: absolute;
            backface-visibility: hidden;
            @include box();
            border-radius: var(--bs-border-radius-lg);
            background-color: white;
            box-shadow: 0 0 2.5rem rgba($color: #555, $alpha: 0.3);

            // @media (max-width: 767px) {
            //     width: 100%;
            //     min-height: 50vh;
            // }

            // border-radius: var(--bs-border-radius-lg);

            img {
                width: 90px;
                margin-bottom: 10px;
            }

            .title {
                font-size: x-large;
                color: var(--bs-gray-700);
                font-weight: 700;
                margin-bottom: 20px;
            }

            .form-floating {
                width: 100%;
                max-width: 18.75rem;

                label {
                    color: var(--bs-gray-600);
                    transition: 0.2s all;
                    z-index: 1;
                }

                input {
                    box-shadow: unset;
                    border: 1px solid #ced4da !important;
                    background-color: white;
                    transition: 0.2s border-color;

                    &:focus~label {
                        color: var(--bs-main-color);
                    }

                    &:focus {
                        border-color: var(--bs-main-color) !important;
                        z-index: 1;
                    }

                    &[type=account] {
                        border-bottom-right-radius: 0;
                        border-bottom-left-radius: 0;
                        margin-bottom: -1px;
                    }

                    &[type=password] {
                        border-radius: 0;
                        margin-bottom: -1px;
                    }

                    &[type=text] {
                        border-top-left-radius: 0;
                        border-top-right-radius: 0;
                    }
                }
            }

            button {
                width: 100%;
                max-width: 18.75rem;
                margin-top: 0.5rem;
                box-shadow: none;

                &:active {
                    transform: scale(0.96);
                }
            }
        }

    }

    .forgetPwd {
        text-align: end;
    }

    .BackToLogin {
        position: absolute;
        top: 0;
        left: 10px;
        max-width: 50px !important;
    }


}


// .box {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     backface-visibility: hidden;
//     /*表示隱藏被旋轉div元素的背面，這樣旋轉之後，第一張卡片是背面朝螢幕方向，看不到，第二張卡片旋轉之後則是正面朝像螢幕，即形成了旋轉的效果。 */
//     // border-radius: 20px;
// }


// .back {
//     transform: rotateY(180deg);
// }

.flipped {
    transform: rotateY(180deg);
    /*繞著Y軸旋轉*/
}
</style>