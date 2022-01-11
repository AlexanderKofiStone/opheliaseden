 <template>
  <div class="footer" v-fade>
    <v-footer
      padless
      src="~@/assets/images/background/dark-header.jpg"
      class="footer justify-center"
    >
      <v-card
        flat
        tile
        class="black darken-4 white--text text-center"
        dark
        width="100%"
      >
        <v-card-text>
          <a :href="fb" target="blank"
            ><v-btn class="mx-4 white--text" icon>
              <v-icon size="24px"> mdi-facebook </v-icon>
            </v-btn></a
          >
          <a :href="insta" target="blank"
            ><v-btn class="mx-4 white--text" icon>
              <v-icon size="24px"> mdi-instagram </v-icon>
            </v-btn></a
          >
          <a :href="twitter" target="blank">
            <v-btn class="mx-4 white--text" icon>
              <v-icon size="24px"> mdi-twitter </v-icon>
            </v-btn></a
          >
          <a :href="youtube" target="blank"
            ><v-btn class="mx-4 white--text" icon>
              <v-icon size="24px"> mdi-youtube </v-icon>
            </v-btn></a
          >
        </v-card-text>

        <v-card-text class="white--text pt-0">
          <p>
            <em>Ophelias Eden</em> is currently in the process of writing &
            creating the album <em>'Boundary Road'</em>. If you want to be
            amongst the first to hear and purchase early bird releases get in
            contact directly / ciaragayer@gmail.com /
          </p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          <strong>© Ophelias Eden</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>


  <script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-youtube", "mdi-instagram"],
    fb: "https://www.facebook.com/opheliaseden",
    insta: "https://www.instagram.com/opheliaseden/?hl=en",
    twitter: "https://twitter.com/opheliaseden?lang=en-gb",
    youtube: "https://www.youtube.com/channel/UCUBI2JcWYqIP8sYLtIvXX8w",
  }),
};
</script>



<style lang="scss">
a {
  text-decoration: none;
}
</style>