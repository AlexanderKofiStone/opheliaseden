<template>
  <v-container class="gallery">
    <v-row align="center" justify="center">
      <li>
        <a v-slideup :href="one" target="blank"
          ><img
            src="@/assets/images/instagram/1.jpg"
            alt=""
            class="gallery-items-img"
            loading="lazy"
        /></a>
      </li>

      <li>
        <a v-slideup :href="two" target="blank"
          ><img
            src="@/assets/images/instagram/2.jpg"
            alt=""
            class="gallery-items-img"
            loading="lazy"
        /></a>
      </li>
      <li>
        <a v-slideup :href="three" target="blank"
          ><img
            src="@/assets/images/instagram/3.jpg"
            alt=""
            class="gallery-items-img"
            loading="lazy"
        /></a>
      </li>

      <li>
        <a v-slideup :href="four" target="blank"
          ><img
            src="@/assets/images/instagram/4.jpg"
            alt=""
            class="gallery-items-img"
            loading="lazy"
        /></a>
      </li>
      <li>
        <a v-slideup :href="five" target="blank"
          ><img
            src="@/assets/images/instagram/5.jpg"
            alt=""
            class="gallery-items-img"
            loading="lazy"
        /></a>
      </li>

      <li>
        <a v-slideup :href="six" target="blank"
          ><img
            src="@/assets/images/instagram/6.jpg"
            alt=""
            class="gallery-items-img last"
            loading="lazy"
        /></a>
      </li>
    </v-row>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      one: "https://www.instagram.com/p/CRV00h2JcVn/",
      two: "https://www.instagram.com/p/CQdHNZKngTL/",
      three: "https://www.instagram.com/p/COzVQpppWwn/",
      four: "https://www.instagram.com/p/CJdgRmwJ9Z1/",
      five: "https://www.instagram.com/p/COR53cPJaKV/",
      six: "https://www.instagram.com/p/CJLorITpEQK/",
    };
  },
};
</script>


<style lang="scss" scoped>
.gallery {
  margin-top: 50px;
  line-height: 0;
  -webkit-column-count: 3;
  -webkit-column-gap: 5px;
  -moz-column-count: 3;
  -moz-column-gap: 5px;
  column-count: 3;
  column-gap: 5px;
  padding: 30px;

  li {
    list-style: none;
  }

  img {
    width: 100%;
    margin-bottom: 10px;
    transition: filter 2s;
    padding: 20px;

    @media (max-width: 1200px) {
      padding: 40px;
    }
  }
}
@media (max-width: 1200px) {
  .gallery {
    -moz-column-count: 2;
    -webkit-column-count: 2;
    column-count: 2;
  }
}
@media (max-width: 1000px) {
  .gallery {
    -moz-column-count: 1;
    -webkit-column-count: 1;
    column-count: 1;
    padding: 80px;
  }
}
</style>




