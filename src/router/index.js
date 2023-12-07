import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@vw/HomeView.vue'
import RegisterView from '@vw/RegisterView.vue'
import UploadView from '@vw/UploadView.vue'
import AlbumList from '@vw/AlbumListView.vue'
import Album from '@vw/AlbumView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Login',
      path: '/',
      component: RegisterView
    },
    {
      name: 'Home',
      path: '/home',
      component: HomeView
    },
    // 以下都還要加上pjid
    {
      name: 'Upload',
      path: '/upload',
      component: UploadView
    },
    {
      name: 'AlbumList',
      path: '/albumList',
      component: AlbumList
    },
    {
      name: 'Album',
      path: '/album',
      component: Album
    }
  ]
})

export default router
