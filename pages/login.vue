<template>
  <div>
    <div>LOGIN PAGE</div>
    <v-btn class="mx-2" fab dark small color="primary" @click="toggleAuthenticated()">
      <v-icon v-if="isAuthenticated()" dark> mdi-lock-open-variant </v-icon>
      <v-icon v-else dark> mdi-lock </v-icon>
    </v-btn>
    <v-btn class="mx-2" fab dark small color="primary" @click="login()">LOGIN</v-btn>
    <v-btn class="mx-2" fab dark small color="primary" @click="test()">TEST</v-btn>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
const dataUrl = "/apiprotected?topic=setup_basic";

export default {
  name: "Login",
  head() {
    return {
      title: this.$store.state.nodename + " " + this.$options.name,
    };
  },
  created() {},
  data() {
    return {
      info: {},
    };
  },
  props: {},
  methods: {
    login() {
      this.$http.setHeader("Authorization", "Basic  cmXXXXXXXXXXbGwxMQ==");
      // console.log("Basic " + Buffer.from("root:XXXXXYYYYZZ", "base64"));
    },
    async test() {
      this.info = await this.$http
        .$get(this.getApiRoot() + dataUrl)
        .then((res) => res.json())
        .catch((e) => {
          console.log("caught error: " + e);
        });
    },
    toggleAuthenticated() {
      this.toggle();
    },
    ...mapMutations({
      addHosts: "hosts/add",
      toggle: "toggle",
    }),
    ...mapGetters({
      getHosts: "hosts/getHosts",
      getHost: "hosts/getHost",
      getHostsFiltered: "hosts/getHostsFiltered",
      isAuthenticated: "isAuthenticated",
      getApiRoot: "getApiRoot",
    }),
  },
};
</script>

<style lang="scss" scoped></style>
