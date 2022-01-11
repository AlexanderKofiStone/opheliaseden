<template>
  <div class="app">
    <div class="main" id="home" v-hallucinate>
      <v-row align="center" justify="center">
        <div class="all">
          <p v-scrollanimation class="outNow" v-fade>{{ title }}</p>
          <v-btn
            class="listen"
            elevation="4"
            raised
            width="200"
            color="#1DB954"
            target="blank"
            href="https://open.spotify.com/track/2PBq2yjqL6AxAzX1y78Cvo?go=1&sp_cid=e0658f18-ebae-4d8e-aeab-ed5b33e80ddb&utm_source=embed_player_m&utm_medium=desktop&nd=1"
            >{{ spotify }}</v-btn
          >
        </div>
      </v-row>
    </div>
    <section class="one">
      <music />
      <about />
      <gallery />
      <instagram />
      <footer-socials />
    </section>
  </div>
</template>



<script>
import footerSocials from "../components/footerSocials.vue";
import Music from "../components/Music.vue";
import About from "../components/About.vue";
import Gallery from "../components/Gallery.vue";
import Instagram from "../components/Instagram.vue";
export default {
  name: "Home",

  components: {
    footerSocials,
    Music,
    About,
    Gallery,
    Instagram,
  },
  data() {
    return {
      title: "RED EYES - OUT NOW",
      spotify: "Listen on spotify",
    };
  },
};
</script>


<style lang="scss">
.app {
  overflow: hidden;
}
.main {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(black, 0), rgba(black, 0.2)),
    url("~@/assets/images/background/lighter.jpg") center no-repeat;
  background-size: cover;
  display: flex;
  animation-name: background;
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;

  @media (min-width: 1300px) {
    background: linear-gradient(rgba(black, 0), rgba(black, 0.2)),
      url("~@/assets/images/gallery/12.jpg") center no-repeat,
      url("~@/assets/images/gallery/8.jpg") no-repeat,
      url("~@/assets/images/gallery/20.jpg") right;
    background-size: contain;
    background-color: black;
  }
  .all {
    position: relative;
    top: 30%;
    text-align: center;
    animation-name: main;
    animation-duration: 1.7s;
    animation-timing-function: ease-in-out;
  }
  .outNow {
    color: white;
    font-size: 20px;
    font-weight: 400;
    position: relative;
    animation-name: flicker;
    animation-duration: 0.8s;
    animation-timing-function: ease-in-out;
    animation-delay: 1s;
  }
  .listen {
    color: white;
    animation-name: swipe;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
  }
}
.one {
  width: 100vw;
  background: linear-gradient(rgba(black, 0.9), rgba(black, 0.9)),
    url("~@/assets/images/background/trip3.jpg") center no-repeat;
  background-size: cover;
}
.bold {
  font-weight: 600;
  font-size: 16px;
  color: white;
}
</style>
