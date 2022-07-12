<template lang="html">
  <Container>
    <PhotoList></PhotoList>
  </Container>
</template>

<script>
import { mapActions } from "vuex";
import PhotoList from "./PhotoList";
import { Container } from "../shared";

export default {
  name: "HomeView",

  components: {
    PhotoList,
    Container,
  },

  created() {
    this.loadImages(this.$root.client_id);
  },

  methods: {
    ...mapActions(["loadImages"]),
  },
};
</script>
