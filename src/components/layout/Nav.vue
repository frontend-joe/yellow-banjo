<template>
  <StyledWrapper>
    <Container>
      <StyledMenu>
        <router-link
          v-for="item in navItems"
          :to="{ path: item.url }"
          :class="`uil uil-${item.icon}`"
        >
        </router-link>
        <a @click="onThemeToggled" class="uil uil-moon"></a>
      </StyledMenu>
    </Container>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { Container } from "../shared";
import { mapActions } from "vuex";

const StyledWrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: ${(p) => p.theme.colorNav};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
`;

const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 6rem;

  & > a {
    cursor: pointer;
    color: ${(p) => p.theme.colorText};
    text-decoration: none;
    font-size: 2rem;
  }
`;

export default {
  components: {
    StyledWrapper,
    StyledMenu,
    Container,
  },
  data() {
    return {
      navItems: [
        { name: "Home", icon: "estate", url: "/" },
        { name: "Likes", icon: "heart", url: "/faves" },
      ],
    };
  },
  methods: {
    ...mapActions(["toggleTheme"]),
    onThemeToggled() {
      this.toggleTheme();
    },
  },
};
</script>
