<template lang="html">
    <div class="photo-element">
        <img :src="src" :alt="alt" @click="onImgClick">
        <button type="button" @click="onBtnClick">{{ btnText }}</button>
    </div>
</template>

<script>
    export default {
        name: 'PhotoElement',

        props: {
            photo: {
                type: Object,
                required: true
            },

            size: {
                type: String,
                default: 'regular'
            }
        },

        computed: {
            src() {
                return this.photo.urls[this.size]
            },
            alt() {
                return this.photo.description
            },
            btnText() {
                return 'like'
            }
        },

        methods: {
            onImgClick() {
                this.$router.push({name: 'Photo', params: { id: this.photo.id }})
            },

            onBtnClick() {
                console.log('Mark photo as fave')
            }
        }
    }
</script>
