<template lang="html">
    <div class="user-card">
        <img :src="src" :alt="alt" @click="onImgClick">
        <h3>{{ user.name }}</h3>
        <p>{{ user.bio }}</p>
    </div>
</template>

<script>
    import * as UserService from '../http/UserService'

    export default {
        name: 'UserCard',

        props: {
            username: {
                type: String,
                required: true
            },
        },

        data() {
            return {
                user: {
                    profile_image: {}
                }
            }
        },

        computed: {
            src() {
                return this.user.profile_image.medium
            },
            alt() {
                return this.user.name
            }
        },

        created() {
            UserService.get(this.username, {client_id: this.$root.client_id})
                .then(res => {
                    this.user = res.data
                })
                .catch(console.error)
        },

        methods: {
            onImgClick() {
                this.$router.push({name: 'User', params: { username: this.username }})
            }
        }
    }
</script>
