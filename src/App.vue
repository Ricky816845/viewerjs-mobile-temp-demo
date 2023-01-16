<template>
  <v-app class="app">
    <v-main>
      <v-container>
        <v-card>
          <v-card-text>
            <h1>Test</h1>
            <img src="../src/assets/demopic.jpg" @click="viewImage($event)" />
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>
<style>
img {
  width: 100%;
}
</style>
<script>
export default {
  name: "App",
  data() {
    return {
      opitons: {
        button: false,
        navbar: false,
        title: false,
        toolbar: false,
        tooltip: false,
      },
    };
  },
  methods: {
    viewImage(event) {
      this.$viewerApi({
        options: this.opitons,
        images: [event.target.src],
      });
    },
  },
};
</script>
