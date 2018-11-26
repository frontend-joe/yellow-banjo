<template lang="html">
    <div class="auth-view">
        <form action="#" @submit.prevent="onSubmit">
            <label for="client_id">Client ID:</label>
            <input type="text" id="client_id" v-model="client_id">
            <button type="submit">submit</button>
            <button type="reset">reset</button>
        </form>
    </div>
</template>

<script>
    import PhotoElement from './PhotoElement';

    export default {
        name: 'AuthView',

        data() {
            return {
                client_id: this.$root.client_id
            }
        },

        methods: {
            onSubmit() {
                localStorage.setItem('client_id', this.client_id)
                this.$root.client_id = this.client_id
                this.$router.push('/')
            },
            onReset() {
                this.client_id = null
                this.$root.client_id = null
                localStorage.removeItem('client_id')
            }
        }
    }
</script>
