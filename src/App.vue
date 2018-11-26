<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',

        mounted() {
            if (!this.$root.client_id) {
                this.$router.push('/auth')
            }
        }
    }
</script>
