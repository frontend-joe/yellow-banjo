<template lang="html">
    <div class="home-view">
        <h1>Home</h1>
        <PhotoList :photos="photos"></PhotoList>
    </div>
</template>

<script>
    import PhotoList from './PhotoList';
    import * as PhotoService from '../http/PhotoService'

    export default {
        name: 'HomeView',

        components: {
            PhotoList
        },

        data() {
            return {
                photos: []
            }
        },

        created() {
            PhotoService.list({client_id: this.$root.client_id})
                .then(res => {
                    this.photos = res.data
                })
                .catch(console.error)
        }
    }
</script>
