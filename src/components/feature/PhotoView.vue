<template lang="html">
  <Container>
    <StyledWrapper>
      <PhotoElement :photo="photo"></PhotoElement>
      <UserCard
        v-if="photo.user.username"
        :username="photo.user.username"
      ></UserCard>
    </StyledWrapper>
  </Container>
</template>

<script>
import PhotoElement from "./PhotoElement";
import UserCard from "./UserCard";
import { Container } from "../shared";
import * as PhotoService from "../../http/PhotoService";
import styled from "vue-styled-components";

const StyledWrapper = styled.div`
  padding: 4rem 0 8rem;
`;

export default {
  name: "PhotoView",

  components: {
    PhotoElement,
    UserCard,
    Container,
    StyledWrapper,
  },

  data() {
    return {
      photo: {
        urls: {},
        user: {},
      },
    };
  },

  created() {
    PhotoService.get(this.$route.params.id, { client_id: this.$root.client_id })
      .then((res) => {
        this.photo = res.data;
      })
      .catch(console.error);
  },
};
</script>
