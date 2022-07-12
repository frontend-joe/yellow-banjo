<template lang="html">
  <StyledCard>
    <StyledImage :src="src" :alt="alt" @click="onImgClick" />
    <StyledLikeButton
      :isLiked="isLiked"
      @click="onBtnClick"
      class="uil uil-heart"
    ></StyledLikeButton>
  </StyledCard>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import styled, { css } from "vue-styled-components";

const StyledCard = styled.article`
  position: relative;
  padding: 1rem 1rem 2rem;
  border-radius: 1rem;
  background: ${(p) => p.theme.colorCard};
  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.07);

  @media only screen and (min-width: 500px) {
    padding: 2rem;
  }
`;

const StyledImage = styled.img`
  width: 100%;
`;

const likedStyles = css`
  background: ${(p) => p.theme.colorPrimary};
`;

const likeButtonProps = { isLiked: Boolean };

const StyledLikeButton = styled("button", likeButtonProps)`
  position: absolute;
  left: 50%;
  bottom: 1rem;
  transform: translateX(-50%);
  width: 3rem;
  height: 3rem;
  background: transparent;
  border: 0;
  border-radius: 50%;
  font-size: 2rem;
  color: white;
  background: rgba(0, 0, 0, 0.34);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  cursor: pointer;

  ${(p) => p.isLiked && likedStyles};
`;

export default {
  name: "PhotoElement",

  props: {
    photo: {
      type: Object,
      required: true,
    },

    size: {
      type: String,
      default: "regular",
    },
  },

  computed: {
    ...mapGetters(["app"]),
    src() {
      return this.photo.urls[this.size];
    },
    alt() {
      return this.photo.description;
    },
    isLiked() {
      return this.app.likedImages.includes(this.photo.id);
    },
  },

  methods: {
    ...mapActions(["toggleImageLiked"]),
    onImgClick() {
      this.$router.push({ name: "Photo", params: { id: this.photo.id } });
    },

    onBtnClick() {
      this.toggleImageLiked(this.photo.id);
    },
  },

  components: {
    StyledImage,
    StyledCard,
    StyledLikeButton,
  },
};
</script>
