<template>
  <div class="home">
    <header-row />
    <page-one />
    <page-two />
    <page-three />
    <page-four />
    <page-five />
  </div>
</template>

<script>
import HeaderRow from '@/components/HeaderRow';
import PageOne from '@/components/PageOne';
import PageTwo from '@/components/PageTwo';
import PageThree from '@/components/PageThree';
import PageFour from '@/components/PageFour';
import PageFive from '@/components/PageFive';

export default {
  components: {
    HeaderRow,
    PageOne,
    PageTwo,
    PageThree,
    PageFour,
    PageFive,
  },
  setup() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
