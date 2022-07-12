<template lang="html">
  <div>
    <StyledSearchWrapper>
      <StyledSearch placeholder="Search an instagram user" v-model="keyword">
      </StyledSearch>
    </StyledSearchWrapper>
    <StyledImageGrid>
      <PhotoElement
        v-for="photo in this.showLikedPhotosOnly
          ? this.likedPhotos
          : this.filteredPhotos"
        :key="photo.id"
        :photo="photo"
      ></PhotoElement>
    </StyledImageGrid>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import PhotoElement from "./PhotoElement";

import styled from "vue-styled-components";

const StyledImageGrid = styled.div`
  display: grid;
  grid-gap: 3rem;
  padding: 2rem 0 8rem;
`;

const StyledSearchWrapper = styled.div`
  position: sticky;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  background: ${(p) => p.theme.colorCard};
`;

const StyledSearch = styled.input`
  height: 4rem;
  width: 100%;
  font-family: inherit;
  border: 0;
  background: transparent;
  border: 2px solid ${(p) => p.theme.colorBorder};
  text-align: center;
  border-radius: 0.5rem;
  outline-color: ${(p) => p.theme.colorPrimary};

  &::placeholder {
    color: ${(p) => p.theme.colorText};
  }
`;

export default {
  name: "PhotoList",

  components: {
    PhotoElement,
    StyledImageGrid,
    StyledSearch,
    StyledSearchWrapper,
  },

  props: {
    photos: {
      type: Array,
      default() {
        return [];
      },
    },
    showLikedPhotosOnly: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },

  data() {
    return {
      keyword: "",
    };
  },

  computed: {
    ...mapGetters(["app"]),
    likedPhotos() {
      return this.app.images.filter((image) =>
        this.app.likedImages.includes(image.id)
      );
    },
    filteredPhotos() {
      return this.app.images.filter(
        (image) =>
          !this.keyword ||
          image?.user?.instagram_username?.includes(this.keyword)
      );
    },
  },
};
</script>
