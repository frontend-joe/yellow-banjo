<template lang="html">
  <Container>
    <UserCard :username="$route.params.username"></UserCard>
    <PhotoList :photos="photos"></PhotoList>
  </Container>
</template>

<script>
import PhotoList from "./PhotoList";
import UserCard from "./UserCard";
import * as UserService from "../../http/UserService";
import { Container } from "../shared";

export default {
  name: "PhotoView",

  components: {
    PhotoList,
    UserCard,
    Container,
  },

  data() {
    return {
      photos: [],
    };
  },

  created() {
    UserService.listPhotos(this.$route.params.username, {
      client_id: this.$root.client_id,
    })
      .then((res) => {
        this.photos = res.data;
      })
      .catch(console.error);
  },
};
</script>
