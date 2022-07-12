<template>
  <StyledWrapper>
    <slot> </slot>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledWrapper = styled.div`
  margin: 0 1rem;

  @media only screen and (min-width: 500px) {
    margin: 0 auto;
    width: 500px;
    max-width: 500px;
  }
`;

export default {
  components: {
    StyledWrapper,
  },
};
</script>
