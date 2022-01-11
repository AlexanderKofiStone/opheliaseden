<template>
  <v-container id="music">
    <div class="about">
      <div v-slidefade class="title"><h2>{{ music }}</h2></div>
      <div class="content">
        <iframe
          v-slideup
          class="redEyes"
          src="https://open.spotify.com/embed/track/2PBq2yjqL6AxAzX1y78Cvo?utm_source=generator&amp;theme=0"
          width="100%"
          height="260"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
        <iframe
          v-slideup
          class="honeyMoon"
          src="https://open.spotify.com/embed/track/0szM4a61U6otyI4iAnRRZS?utm_source=generator&amp;theme=0"
          width="100%"
          height="260"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>
      <v-carousel height="400" hide-delimiters v-slidefade>
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet :color="colors[i]" height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <div>
                {{ slide }}
                <div class="responsive2">
                  <div class="container2">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/iy0AwGlOJps"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                  </div>
                </div>
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet :color="colors[i]" height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <div>
                {{ slide }}
                <div class="responsive2">
                  <div class="container2">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/IWbTYIqjHn0"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                  </div>
                </div>
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
    <v-row align="center" justify="center">
      <v-img class="redImage" v-flicker src="~@/assets/images/other/red.jpg"></v-img>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      music: "MUSIC",
      colors: ["black"],
      slides: ["First"],
    };
  },
};
</script>


<style lang="scss" scoped>
.title {
  margin-top: 20px;
  padding: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
  animation-name: background;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  h2 {
    font-family: "Raleway", sans-serif;
  }
}
.content {
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 45px;
}
.responsive2 {
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  position: relative;
}
.container2 iframe {
  animation-name: background;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  @media (max-width: 800px) {
    padding: 70px;
  }
}
.redImage {
  animation-name: flicker;
  animation-duration: 1.5s;
  animation-timing-function: ease-in-out;
  max-width: 400px;
  @media (min-width: 1200px) {
    display: none;
  }
}
.redImage:nth-child(2) {
  color: #67f3da;
  animation: flicker 1.5s;
}

.redImage:nth-child(3) {
  color: #f16f6f;
  animation: flicker 1.5s;
}
.redEyes {
  animation-name: title;
  animation-duration: 1.5s;
  animation-timing-function: ease-in-out;
}
.honeyMoon {
  animation-name: title;
  animation-duration: 1.5s;
  animation-timing-function: ease-in-out;
}
</style>
