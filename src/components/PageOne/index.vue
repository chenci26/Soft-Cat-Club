<template>
  <div class="page-one">
    <div class="logo">
      <img
        class="logo-img"
        :src="require('@/assets/img/bg/logo.png')"
        alt=""
      >
    </div>
    <div class="planet">
      <div class="planet-btn">
        <img
          class="planet-btn-img is-btn"
          :src="require('@/assets/img/bg/mint.png')"
          alt=""
        >
        <div class="planet-btn-text">
          只有白名單才能鑄造
        </div>
      </div>
      <img
        class="planet-img"
        :src="require('@/assets/img/bg/planet-top.png')"
        alt=""
      >
    </div>
    <img
      class="cloud-one"
      :src="require('@/assets/img/bg/cloud1.png')"
      alt=""
    >
    <img
      class="cloud-two"
      :src="require('@/assets/img/bg/cloud2.png')"
      alt=""
    >
    <img
      class="sand"
      :src="require('@/assets/img/bg/sand.png')"
      alt=""
    >
  </div>
</template>

<style lang="scss" scoped>
  .page-one {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 80px;
    overflow: hidden;
    background: url('~@/assets/img/bg/bg.png');
    background-repeat: no-repeat;
    background-size: cover;

    @include mediaquery_pad {
      padding-top: 60px;
    }

    .logo {
      max-width: 60%;
      height: 7%;
      margin-top: 10%;

      @include mediaquery_pad {
        height: 10%;
      }

      &-img {
        height: 100%;
      }
    }

    .planet {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      margin: auto 0 0;

      &-btn {
        position: absolute;
        bottom: 20%;
        z-index: 5;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;

        @include mediaquery_pad {
          bottom: 10%;
        }

        @include mediaquery_phone {
          bottom: 0%;
        }

        &-img {
          width: 20%;

          @include mediaquery_pad {
            width: 30%;
          }
        }

        &-text {
          margin-top: 15px;
          color: #7d3046;
          font-weight: 600;
        }
      }

      &-img {
        width: 80%;

        @include mediaquery_pad {
          width: 100%;
        }
      }
    }

    .cloud-one {
      position: absolute;
      top: 0%;
      width: 100%;
      height: 100%;
      animation-name: floatingLeft;
      animation-duration: 20s;
      animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
      animation-iteration-count: infinite;
      filter: blur(5px) opacity(0.2);

      @include mediaquery_pad {
        animation-duration: 12s;
      }
    }

    .cloud-two {
      position: absolute;
      top: 0%;
      width: 100%;
      height: 100%;
      animation-name: floatingRight;
      animation-duration: 18s;
      animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
      animation-delay: 0.5s;
      animation-iteration-count: infinite;
      filter: blur(5px) opacity(0.2);

      @include mediaquery_pad {
        animation-duration: 10s;
      }
    }

    .sand {
      position: absolute;
      bottom: 0%;
      width: 100%;
      animation-name: flying;
      animation-duration: 5s;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
      filter: opacity(0.3);
    }
  }
</style>
