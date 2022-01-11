<template>
  <v-container id="gallery">
    <v-row align="center" justify="center">
      <div class="gall">
        <div class="title" v-slidefade><h2>{{ gallery }}</h2></div>
        <v-row align="center" justify="center">
          <v-dialog
            v-model="dialog"
            max-width="600px"
            overlay-color="black"
            overlay-opacity="1"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-fade
                class="btn"
                elevation="4"
                raised
                width="200"
                v-bind="attrs"
                v-on="on"
              >
                VIEW GALLERY
              </v-btn>
            </template>

            <div class="gallery">
              <v-row align="center" justify="center">
                <li v-slideup>
                  <img
                    src="@/assets/images/gallery/1.jpg"
                    alt=""
                    class="gallery-items-img"
                    loading="lazy"
                  />
                </li>

                <li v-slideup>
                  <img
                    src="@/assets/images/gallery/2.jpg"
                    alt=""
                    class="gallery-items-img"
                    loading="lazy"
                  />
                </li>
                <li v-slideup>
                  <img
                    src="@/assets/images/gallery/3.jpg"
                    alt=""
                    class="gallery-items-img"
                    loading="lazy"
                  />
                </li>
                <li v-slideup>
                  <img
                    src="@/assets/images/gallery/4.jpg"
                    alt=""
                    class="gallery-items-img"
                    loading="lazy"
                  />
                </li>
                <li v-slideup>
                  <img
                    src="@/assets/images/gallery/5.jpg"
                    alt=""
                    class="gallery-items-img"
                    loading="lazy"
                  />
                </li>
                <li v-slideup>
                  <img
                    src="@/assets/images/gallery/6.jpg"
                    alt=""
                    class="gallery-items-img"
                    loading="lazy"
                  />
                </li>
                <li v-slideup>
                  <img
                    src="@/assets/images/gallery/7.jpg"
                    alt=""
                    class="gallery-items-img"
                    loading="lazy"
                  />
                </li>
                <li v-slideup>
                  <img
                    src="@/assets/images/gallery/8.jpg"
                    alt=""
                    class="gallery-items-img"
                    loading="lazy"
                  />
                </li>
                <li v-slideup>
                  <img
                    src="@/assets/images/gallery/9.jpg"
                    alt=""
                    class="gallery-items-img"
                    loading="lazy"
                  />
                </li>
                <li v-slideup>
                  <img
                    src="@/assets/images/gallery/10.jpg"
                    alt=""
                    class="gallery-items-img"
                    loading="lazy"
                  />
                </li>
                <li v-slideup>
                  <img
                    src="@/assets/images/gallery/11.jpg"
                    alt=""
                    class="gallery-items-img"
                    loading="lazy"
                  />
                </li>
                <li v-slideup>
                  <img
                    src="@/assets/images/gallery/12.jpg"
                    alt=""
                    class="gallery-items-img"
                    loading="lazy"
                  />
                </li>
                <li v-slideup>
                  <img
                    src="@/assets/images/gallery/13.jpg"
                    alt=""
                    class="gallery-items-img"
                    loading="lazy"
                  />
                </li>
                <li v-slideup>
                  <img
                    src="@/assets/images/gallery/14.jpg"
                    alt=""
                    class="gallery-items-img"
                    loading="lazy"
                  />
                </li>
                <li v-slideup>
                  <img
                    src="@/assets/images/gallery/15.jpg"
                    alt=""
                    class="gallery-items-img"
                    loading="lazy"
                  />
                </li>
                <li v-slideup>
                  <img
                    src="@/assets/images/gallery/16.jpg"
                    alt=""
                    class="gallery-items-img"
                    loading="lazy"
                  />
                </li>
                <li v-slideup>
                  <img
                    src="@/assets/images/gallery/17.jpg"
                    alt=""
                    class="gallery-items-img"
                    loading="lazy"
                  />
                </li>
                <li v-slideup>
                  <img
                    src="@/assets/images/gallery/18.jpg"
                    alt=""
                    class="gallery-items-img"
                    loading="lazy"
                  />
                </li>
                <li v-slideup>
                  <img
                    src="@/assets/images/gallery/19.jpg"
                    alt=""
                    class="gallery-items-img"
                    loading="lazy"
                  />
                </li>
                <li v-slideup>
                  <img
                    src="@/assets/images/gallery/20.jpg"
                    alt=""
                    class="gallery-items-img"
                    loading="lazy"
                  />
                </li>
              </v-row>
            </div>
            <v-card-actions>
              <v-row align="center" justify="center">
                <v-btn
                  v-fade
                  class="close"
                  color="white"
                  icon
                  elevation="2"
                  @click="dialog = false"
                  >X</v-btn
                >
              </v-row>
            </v-card-actions>
          </v-dialog>
        </v-row>
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      gallery: "GALLERY",
      dialog: false,
    };
  },
};
</script>


<style lang="scss" scoped>
.gall {
  padding-top: 50px;
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
}
.gallery {
  line-height: 0;
  -webkit-column-count: 2;
  -webkit-column-gap: 5px;
  -moz-column-count: 2;
  -moz-column-gap: 5px;
  column-count: 2;
  column-gap: 5px;
  overflow: hidden;

  li {
    list-style: none;
  }

  img {
    width: 100%;
    margin-bottom: 10px;
    padding: 20px;
    transition: filter 2s;
  }
}
.close {
  position: fixed;
  top: 5%;
  right: 2%;
}
.btn {
  margin-top: 20px;
}
</style>
  






   