<template lang="html">
    <div class="home-view">
        <UserCard :username="$route.params.username"></UserCard>
        <PhotoList :photos="photos"></PhotoList>
    </div>
</template>

<script>
    import PhotoList from './PhotoList';
    import UserCard from './UserCard';
    import * as UserService from '../http/UserService'

    export default {
        name: 'PhotoView',

        components: {
            PhotoList,
            UserCard
        },

        data() {
            return {
                photos: []
            }
        },

        created() {
            UserService.listPhotos(this.$route.params.username, {client_id: this.$root.client_id})
                .then(res => {
                    this.photos = res.data
                })
                .catch(console.error)
        }
    }
</script>
