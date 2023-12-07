<script setup>
import { RouterView, useRoute } from 'vue-router'
import Toast from '@cp/base/Toast.vue';
import NavBar from '@cp/base/NavBar.vue';
import Footer from '@cp/base/Footer.vue';
import AddAlbumModal from '@cp/modal/AddAlbumModal.vue';
import CTModal from '@cp/modal/CorrectTimeModal.vue';
import { computed, onMounted } from 'vue';
const route = useRoute()

const backgroundStyle = computed(() => {
  let backgroundColor = '';
  let backgroundImage = '';

  if (route.name === 'Login') {
    backgroundColor = '';
    backgroundImage = 'linear-gradient(120deg, #FFFCF7 0%, #d5cfff 100%)';
  } else{
    backgroundColor = 'var(--bs-background-color)';
  } 
  return {
    backgroundColor, backgroundImage, backgroundSize: 'cover', // Adjust as needed
  };
});
</script>

<template>
  <NavBar />
  <div class="content" id="content" :style="backgroundStyle" @contextmenu.prevent>
    <RouterView />
  </div>
  <Footer />
  <Toast />
  <AddAlbumModal />
  <CTModal />
</template>

<style scoped lang="scss">

.content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

</style>
 