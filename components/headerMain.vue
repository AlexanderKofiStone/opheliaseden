<template>
  <div class="header">
    <v-app-bar
      fixed
      height="40"
      dense
      color="black"
      src="~@/assets/images/background/dark-header.jpg"
    >
      <v-row align="center" justify="center">
        <v-toolbar-items class="items">
          <router-link to="#home" style="text-decoration: none; color: inherit"
            ><v-btn dark color="transparent" class="btn"
              >{{ home }}</v-btn
            ></router-link
          >
          <router-link to="#music" style="text-decoration: none; color: inherit"
            ><v-btn dark color="transparent" class="btn2"
              >{{ music }}</v-btn
            ></router-link
          >
          <router-link to="#about" style="text-decoration: none; color: inherit"
            ><v-btn dark color="transparent" class="btn3"
              >{{ about }}</v-btn
            ></router-link
          >
          <router-link
            to="#gallery"
            style="text-decoration: none; color: inherit"
            ><v-btn dark color="transparent" class="btn4"
              >{{ gallery }}</v-btn
            ></router-link
          >
        </v-toolbar-items>
      </v-row>
    </v-app-bar>
  </div>
</template>


<script>
export default {
  props: {
    home: {
      type: String,
      required: true,
    },
    music: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    gallery: {
      type: String,
      required: true,
    },
  },
};
</script>



<style lang="scss" scoped>
.btn {
  animation-name: title;
  animation-duration: 1.2s;
  animation-timing-function: ease-in-out;
}
.btn2 {
  animation-name: title;
  animation-duration: 1.2s;
  animation-timing-function: ease-in-out;
}
.btn3 {
  animation-name: title;
  animation-duration: 1.2s;
  animation-timing-function: ease-in-out;
}
.btn4 {
  animation-name: title;
  animation-duration: 1.2s;
  animation-timing-function: ease-in-out;
}
</style>