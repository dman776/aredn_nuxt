<template>
  <v-card flat>
    <v-card-title>{{ title }}</v-card-title>
    <!-- <v-card-subtitle>Container for a radio</v-card-subtitle> -->
    <v-card-text>
      <v-row>
        <v-col>
          <v-radio-group label="Radio Mode" v-model="info.radiomode" row dense>
            <v-radio label="Mesh" value="mesh"></v-radio>
            <v-radio label="Access Point" value="ap"></v-radio>
            <v-radio label="Disabled" value="disabled"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <SetupBasicMeshrf :info="info" v-if="info.radiomode === 'mesh'" />
          <SetupBasicLanap :info="info" v-if="info.radiomode === 'ap'" />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Setup-Radio",
  created() {},
  data() {
    return {
      // TODO: get channel list from API
      // TODO: get power levels from API
      channels: [
        { text: "-2 (2397 Mhz)", value: "-2" },
        { text: "-1 (2402 Mhz)", value: "-1" },
        { text: "0 (2407 Mhz)", value: "0" },
        { text: "1 (24xx Mhz)", value: "1" },
        { text: "2 (24xx Mhz)", value: "2" },
        { text: "3 (24xx Mhz)", value: "3" },
        { text: "4 (24xx Mhz)", value: "4" },
        { text: "5 (24xx Mhz)", value: "5" },
        { text: "6 (24xx Mhz)", value: "6" },
      ],
      channelbws: [5, 10, 20],
      power: [3, 4, 5, 6, 7, 8, 9, 10, 20, 21, 22],
    };
  },
  props: {
    info: {},
    title: "",
  },
  computed: {},
  methods: {
    submit() {
      alert("submit");
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped></style>
