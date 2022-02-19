<template>
  <div class="header">
    <div
      v-for="(item,index) in linkList"
      :key="`link${index}`"
      class="header-link"
      @click="redirect(item)"
    >
      <img
        class="header-link-img"
        :src="$requireSafe(`header/${item?.img}.png`)"
        alt=""
      >
      <div class="header-link-line" />
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import Swal from 'sweetalert2';
import mint from '@/assets/js/nft/mint.js';

export default {
  setup() {
    const linkList = reactive([
      { img: 'youtube', url: 'https://www.youtube.com/c/%E7%8E%8B%E7%8B%97' },
      { img: 'discord', url: 'https://discord.gg/vqFFW5Fu' },
      // { img: 'opensea', url: 'https://opensea.io/' },
      // { img: 'connect', url: '' },
    ]);

    const redirect = (item) => {
      switch (item.img) {
        case 'connect':
          mint.Connect((addr) => {
            Swal.fire({
              icon: 'success',
              title: `登入成功: ${addr}`,
            });
            item.img = 'connected';
          });
          break;
        case 'connected':
          Swal.fire({
            icon: 'success',
            title: `已登入: ${mint.GetAccount()}`,
          });
          break;
        default:
          window.open(item.url);
          break;
      }
    };

    return {
      linkList,
      redirect,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0 3%;
  background: #7d304640;

  @include mediaquery_pad {
    height: 60px;
  }

  &-link {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    &:not(:last-child) {
      margin-right: 40px;
    }

    &-line {
      width: 100%;
      height: 2px;
      margin-top: 5px;
      border-radius: 2px;
      background: #ce6175;
      transition: 0.3s;
      transform: scaleX(0);
      transform-origin: center;
    }

    &:hover {
      .header-link-line {
        transform: scaleX(1);
      }
    }

    &-img {
      max-height: 28px;
    }
  }
}
</style>
