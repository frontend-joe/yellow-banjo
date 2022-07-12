<template lang="html">
  <StyledWrapper>
    <StyledImage :src="src" :alt="alt" @click="onImgClick" />
    <div>
      <StyledUsername>{{ user.name }}</StyledUsername>
      <StyledBio>{{ user.bio }}</StyledBio>
    </div>
  </StyledWrapper>
</template>

<script>
import * as UserService from "../../http/UserService";
import styled from "vue-styled-components";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 3rem 0 2rem;
`;

const StyledImage = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 40px 50px rgba(0, 0, 0, 0.12);
`;

const StyledUsername = styled.h3`
  color: #373737;
  margin: 0 0 4px;
`;

const StyledBio = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: #a7a7a7;
`;

export default {
  name: "UserCard",

  props: {
    username: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      user: {
        profile_image: {},
      },
    };
  },

  computed: {
    src() {
      return this.user.profile_image.medium;
    },
    alt() {
      return this.user.name;
    },
  },

  created() {
    UserService.get(this.username, { client_id: this.$root.client_id })
      .then((res) => {
        this.user = res.data;
      })
      .catch(console.error);
  },

  methods: {
    onImgClick() {
      this.$router.push({ name: "User", params: { username: this.username } });
    },
  },

  components: {
    StyledWrapper,
    StyledImage,
    StyledUsername,
    StyledBio,
  },
};
</script>
