<template>
  <theme-provider :theme="this.app.theme">
    <Root></Root>
  </theme-provider>
</template>

<script>
import { ThemeProvider } from "vue-styled-components";

import { mapGetters } from "vuex";

import Root from "./Root";

export default {
  name: "app",

  mounted() {
    if (!this.$root.client_id) {
      this.$router.push("/auth");
    }
  },

  components: {
    "theme-provider": ThemeProvider,
    Root,
  },

  computed: {
    ...mapGetters(["app"]),
  },
};
</script>
