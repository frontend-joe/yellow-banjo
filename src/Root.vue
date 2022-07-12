<template>
  <StyledWrapper>
    <router-view></router-view>
    <Nav> </Nav>
  </StyledWrapper>
</template>

<script>
import Nav from "./components/layout/Nav";

import styled, { injectGlobal } from "vue-styled-components";

const StyledWrapper = styled.div`
  min-height: 100%;
  font-family: Poppins;
  background: ${(p) => p.theme.colorBackground};
`;

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  html, body, body > div {
    height: 100%;
  }
`;

export default {
  mounted() {
    if (!this.$root.client_id) {
      this.$router.push("/auth");
    }
  },

  components: {
    Nav,
    StyledWrapper,
  },
};
</script>
