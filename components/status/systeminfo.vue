<template>
  <v-card height="100%">
    <v-card-title class="headline">
      System
      <v-spacer />
      <v-icon color="blue">mdi-information</v-icon>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col class="text-end" cols="4">
          <p class="label">Model:</p>
          <p class="label">Target Type:</p>
          <p class="label">Firmware Version:</p>
          <p class="label">API Version:</p>
          <p class="label">Node Date/time:</p>
          <p class="label">Description:</p>
        </v-col>
        <v-col cols="8">
          <p class="mb-0">
            {{ info.model === undefined ? 'N/A' : info.model }}
          </p>
          <p class="mb-0">
            {{ info.target_type === undefined ? 'N/A' : info.target_type }}
          </p>
          <p class="mb-0">
            {{
              info.firmware_version === undefined
                ? 'N/A'
                : info.firmware_version
            }}
          </p>
          <p class="mb-0">
            {{ info.api_version === undefined ? 'N/A' : info.api_version }}
          </p>
          <p class="mb-0">{{ info.date }} {{ info.time }}</p>
          <p class="mb-0">
            {{ info.description === undefined ? 'N/A' : info.description }}
          </p>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'SystemInfo',
  created() {},
  data() {
    return {}
  },
  props: {
    info: {},
  },
  methods: {},
}
</script>

<style lang="css" scoped>
.label {
  margin-bottom: 0;
  font-weight: bold;
}
</style>
