<template>
  <div class="page-two">
    <div class="planet">
      <img
        class="planet-img"
        :src="require('@/assets/img/bg/planet-bottom.png')"
        alt=""
      >
    </div>
    <div class="nft">
      <img
        :src="require('@/assets/img/nft/cat.gif')"
        alt=""
        b
        class="nft-img"
      >
      <div class="nft-intro">
        <div class="c-title">
          &emsp;
        </div>
        <div class="c-title">
          【關於Soft Cat Club】
        </div>
        <div class="nft-intro-info">
          <div class="c-info">
            此項目是由王狗與夥伴們0.5遊戲團隊製作，圍繞著浪貓樂園進行的一系列計劃，
          </div>
          <div class="c-info mb-5">
            希望讓更多人了解流浪貓的生態以及在人類社會中所面臨的困境並兼具娛樂性，一起讓這個環境更加美好。
          </div>
          <div class="c-info">
            近年來NFT盛行加上元宇宙的趨勢，我們秉持進步動力積極研究遊戲之開創性，
          </div>
          <div class="c-info">
            並決定以0.5遊戲旗下「貓逝Losting Cats Way」為主題設計的首款NFT，
          </div>
          <div class="c-info">
            每個NFT都由美術親自操刀，再經由團隊篩選，擁有這些NFT可讓您在貓逝遊戲裡與眾不同。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-two {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10%;
  background: url('~@/assets/img/bg/bg2.png');
  background-repeat: no-repeat;
  background-size: cover;

  .planet {
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    &-img {
      width: 80%;

      @include mediaquery_pad {
        width: 100%;
      }
    }
  }

  .nft {
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    &-img {
      width: 12%;
      margin: 7% 0 3%;
      transition: 0.5s;

      @include mediaquery_pad {
        width: 20%;
      }

      @include mediaquery_minipad {
        width: 25%;
      }

      @include mediaquery_phone {
        width: 30%;
      }

      &:hover {
        cursor: pointer;
      }

      &:active {
        transform: scale(2) rotate(360deg);
      }
    }

    &-intro {
      width: 100%;
      text-align: center;
    }
  }
}
</style>
