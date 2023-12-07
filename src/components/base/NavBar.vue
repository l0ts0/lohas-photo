<script setup>
// import { useRoute } from 'vue-router'


// import routeStatus from '@/base/routeStatus'

// import { storeToRefs } from 'pinia'
// import { useStore } from '@st/index'
// import { useRegistrationStore } from '@st/registration'
import { onMounted,ref,computed } from 'vue';
import photoLogo from './photo-logo.vue';
// const store = useStore()
// const route = useRoute()

// const { project } = storeToRefs(store)

// function setLang(val) {
//   if (route.name == 'member' || route.name == 'individual' || route.name == 'team') {
//     routeStatus.set('translate')
//     localStorage.setItem('lohas_lang', val)
//     localStorage.setItem('lohas_team', JSON.stringify(useRegistrationStore().backupTeam()))
//     localStorage.setItem('lohas_indv', JSON.stringify(useRegistrationStore().backupIndv()))
//     localStorage.setItem('lohas_memb', JSON.stringify(useRegistrationStore().backupMemb()))
//   }
//   return history.go(0)
// }

// function open_page() {
//   window.open(project.value.page, '_blank')
// }

// function homePage() {
//   window.open('https://lohasnet.tw', '_blank')
// }
// const eleService = ref(null);
// onMounted(()=>{
//   eleService.value = document.getElementById('service-drop');
//   var winWide = window.screen.width;
//   if(winWide<=992){
//     eleService.classList.remove('dropdown');
//     eleService.classList.add('')
//   }

// })

onMounted(() => {
  window.addEventListener("resize", function () {
    windowWidth.value = window.innerWidth;
  });
});

// window width
const windowWidth = ref(window.innerWidth);

</script>

<template>
  <!-- fixed-top -->
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <!-- 品牌logo -->
      <a class="navbar-brand" href="#">
        <photoLogo />
        <h3 class="fw-bold text-deep-gray m-0 text-gray">樂活照相館</h3>
      </a>

      <!-- 第一部份：手機版 -->
      <div class="d-inline-flex">
        <button class="btn btn-deep-sp-color text-white cart d-block d-lg-none">
          <i class="bi bi-cart4 fs-5"></i>
        </button>
        <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <i class="bi bi-list"></i>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-md-0 gap-0 gap-lg-2">
          <li class="nav-item nav_li">
            <a href="#" class="btn-epic rounded">
              <div>
                <span><i class="bi bi-upload"></i></span>
                <span>上傳照片</span>
              </div>
            </a>
          </li>
          <li class="nav-item nav_li">
            <a href="#" class="btn-epic rounded">
              <div>
                <span>加入我們</span>
                <span>成為攝影師</span>
              </div>
            </a>
          </li>
          <li class="nav-item nav_li">
            <a href="#" class="btn-epic rounded">
              <div>
                <span><i class="bi bi-box-arrow-up-right"></i></span>
                <span>樂活報名網</span>
              </div>
            </a>
          </li>
          <div class="nav-item nav_li">
            <div :class="windowWidth<=992 ? 'btn-group dropend':'dropdown'" id="service-drop"> 
              <button class="btn dropdown-toggle text-white " type="button" id="ServiceDropdown"
                data-bs-toggle="dropdown" style="height: 100%;">
                服務項目
              </button>
              <ul class="dropdown-menu text-center" aria-labelledby="ServiceDropdown">
                <li><a class="dropdown-item" href="#">關於樂活</a></li>
                <li><a class="dropdown-item" href="#">服務項目</a></li>
                <li><a class="dropdown-item" href="#">免責聲明</a></li>
              </ul>
            </div>
          </div>
          <!-- <li class="nav-item nav_li">
            <a href="#">
              <span>我也想當攝影師！</span>
            </a>
          </li>
          <li class="nav-item nav_li">
            <a href="#">
              <span>樂活報名網</span>
            </a>
          </li> -->
        </ul>
        <!-- class="d-flex flex-row gap-2 justify-content-end" -->
        <div class="d-flex flex-row gap-2 justify-content-end">
          <!-- 沒登入 -->
          <button class="btn btn-deep-sp-color text-white d-none">
            登入 / 註冊
          </button>
          <!-- 登入過後 -->
          <button class="btn btn-deep-sp-color text-white cart d-lg-block d-none">
            <i class="bi bi-cart4 fs-5"></i>
          </button>
          <div class="d-flex dropdown">
            <button class="btn dropdown-toggle idvInfo" :class="windowWidth<=992 ? 'btn-deep-gray-blue':'btn-main-color text-white'" type="button" data-bs-toggle="dropdown">
              <i class="bi bi-person-circle fs-5"></i>&ensp;UserName
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item"> 購買紀錄 </a></li>
              <li><a class="dropdown-item"> 我的上傳 </a></li>
              <li><a class="dropdown-item"> 修改個人資料 </a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item"> 登出 </a></li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
// navBar
nav {
  position: sticky;
  top: 0px;
  z-index: 1030;
  width: 100%;
  min-width: 300px;
  background-color: #FFF;
  pointer-events: none;
  padding: 5px 0px;
  font-size: 18px;
  box-shadow: 0 0 2.5rem rgba($color: #555, $alpha: 0.3);

  button{
    font-size: 18px;
    // font-weight: bold;
  }
  @media (max-width:991px) {
    height: auto;
    padding: 10px 0px;
  }
}

// navBar logo
.navbar-brand {
  height: auto;
  display: flex;
  align-items: center;

  // margin-right: 30px;
  pointer-events: auto;

  img {
    margin: auto;
    object-fit: contain;
    max-width: 40px;
    width: 100%;
    margin-right: 10px;
  }
}

.cart:active {
  transform: scale(0.96);
}

.nav_li {
  display: grid;
  width: 120px;
}

.btn-epic {
  position: relative;
  margin: auto;
  width: 100%;
  height: 44px;
  background: #fff;
  transform: translate3d(0px, 0%, 0px);
  text-decoration: none;
  // font-weight: 600;
  letter-spacing: 0.05em;
  transition-delay: 0.6s;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ffae00;
    border-radius: 50% 50% 0 0;
    transform: translateY(100%) scaleY(0.5);
    transition: all 0.6s ease;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // background: var(--bs-deep-main-color);
    // background-image: linear-gradient(to bottom, #FF9169 0%, #764ba2 100%);
    background-image: linear-gradient(to right, #667eea 0%, #764ba2 100%);
    border-radius: 0;
    transform: translateY(0) scaleY(1);
    transition: all 0.6s ease;
  }

  div {
    position: relative;
    width: 100%;
    height: 50%;
    top: 9px;
    text-transform: uppercase;
    overflow: hidden;
  }

  span {
    position: absolute;
    z-index: 1;
    top: 0;
    width: 100%;
    text-align: center;
    transition: transform 0.5s ease;
  }

  span:first-child {
    color: #fff;
    transform: translateY(24px);
  }

  span:last-child {
    color: #fff;
    transform: translateY(0);
  }

  &:hover {
    background: #764ba2;
    transition: background 0.2s linear;
    transition-delay: 0.6s;
  }

  &:hover:after {
    border-radius: 0 0 50% 50%;
    transform: translateY(-100%) scaleY(0.5);
    transition-delay: 0;
  }

  &:hover:before {
    border-radius: 0;
    transform: translateY(0) scaleY(1);
    transition-delay: 0;
  }

  &:hover span:first-child {
    transform: translateY(0);
  }

  &:hover span:last-child {
    transform: translateY(-24px);
  }
}


.idvInfo,
.nav_li {
  pointer-events: auto;

  &:active {
    transform: scale(0.96);
  }
}

/* 切換語言 */
.dropdown,
.dropdown-menu,
.dropdown-toggle {
  width: 100%;
  pointer-events: auto;
}

.cart {
  pointer-events: auto;
}

.dropdown-menu {
  text-align: end;
}

.dropdown-item:hover {
  cursor: pointer;
  background-color: var(--bs-hover-color);
}

.navbar-toggler {
  pointer-events: auto;
  border: 0 !important;
  box-shadow: none;
  transform: skewX(20deg);
  -ms-transform: skewX(20deg);
  /* Internet Explorer */
  -moz-transform: skewX(20deg);
  /* Firefox */
  -webkit-transform: skewX(20deg);
  /* Safari 和 Chrome */
  -o-transform: skewX(20deg);
  /* Opera */

  i {
    font-size: 30px;
    color: var(--bs-main-color);

    &:hover:before {
      transition: transform 0.1s cubic-bezier(0, -0.75, 1, 1.75);
      transform: skewX(-20deg);
    }
  }

}
#service-drop button{
  height: 100%;
  background-image: linear-gradient(to right, #667eea 0%, #764ba2 100%);
}
@media (max-width:991px) {

  .nav_li {
    margin-bottom: 5px;
    width: 100%;

    &:before {
      width: 10px;
      border-radius: 15px;
    }
  }

  .dropdown-menu {
    text-align: start;
  }

  .navbar {
    height: auto;
  }
}
</style>