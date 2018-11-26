import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from '../components/HomeView'
import PhotoView from '../components/PhotoView'
import UserView from '../components/UserView'
import AuthView from '../components/AuthView'

Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        { path: '', name: 'Home', component: HomeView },
        { path: '/faves', name: 'Favourites', component: HomeView },
        { path: '/photo/:id', name: 'Photo', component: PhotoView },
        { path: '/user/:username', name: 'User', component: UserView },
        { path: '/auth', name: 'Auth', component: AuthView },
    ]
});

export default router
