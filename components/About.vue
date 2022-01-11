<template>
  <v-container id="about">
    <div class="about">
      <div class="container">
        <div class="title" v-slidefade>
          <h2>{{ about }}</h2>
        </div>
        <v-row align="center" justify="center">
          <v-img
            v-slideup
            class="ciara"
            lazy-src="~@/assets/images/gallery/1.jpg"
            src="~@/assets/images/gallery/1.jpg"
          ></v-img>
          <div>
            <p class="description" v-slideup>
              <span class="bold">Ophelia's Eden</span> is the alias of producer
              and singer-songwriter <span class="bold">Ciara Gayer</span>,
              creating a fantasy world with her original music.
              <span class="bold">Ciara</span> is inspired by the composers
              Quincy Jones and George Gershwin, as well as electronic producers
              Bonobo, James Blake, Sonder, Abra and vocalists Billie Holiday and
              Etta James. The first project is old-skl hip hop and soul rhythms
              combined with classical and jazz-infused orchestration, and of
              course <span class="bold">Ciara's</span> distinctive melancholic
              voice.
            </p>
            <p class="description" v-slideup>
              <span class="bold">"[I]</span> was instantly drawn in by her
              <span class="bold">bluesy, soulful</span> arrangements and raw,
              captivating vocals" <br /><em
                ><span class="bold">- Women's Music News -</span></em
              >
              <br /><br />
              <span class="bold">"OPHELIA’S EDEN</span> is the musical alias of
              <span class="bold">Brighton</span>-based producer and
              singer-songwriter <span class="bold">Ciara Gayer</span>. She tells
              us that her sound and style have been influenced by
              <span class="bold">jazz, dub, soul, classical</span> and
              <span class="bold">downtempo</span>. Quite a basket-load and all
              those influences and more can be detected on the lady’s current
              single – a mournful and meandering
              <span class="bold">‘Red Eyes’</span>. The song is intriguing with
              a flavour of <span class="bold">trip hop</span> that perfectly
              suits <span class="bold">Ms Gayer’s</span> melancholic vocal
              approach. The track is topped with sultry sax parts from
              <span class="bold">Don Benjamin</span>. Out now."
              <em
                ><span class="bold"><br />- Soul&Jazz&Funk -</span></em
              >
            </p>
          </div>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      about: 'ABOUT'
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 20px;

  .title {
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
  .ciara {
    margin-top: 20px;
    max-width: 400px;
    animation-name: photo;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
  }
  .description {
    color: lightgray;
    text-align: center;
    padding: 20px;
    margin-top: 20px;
    max-width: 600px;
  }
  .description {
    color: lightgray;
    text-align: center;
    padding: 20px;
    margin-top: 20px;
  }
}
</style>