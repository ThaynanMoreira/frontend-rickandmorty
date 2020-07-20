<template>
  <v-toolbar dark color="blue darken-3" class="mb-1">
    <v-text-field
      v-model="search"
      @input="updateSearch"
      clearable
      flat
      solo-inverted
      hide-details
      prepend-inner-icon="mdi-magnify"
      label="Search"
    ></v-text-field>
    <template v-if="$vuetify.breakpoint.mdAndUp">
      <v-spacer></v-spacer>
      <v-select
        v-model="sortBy"
        @change="updateSortBy"
        flat
        solo-inverted
        hide-details
        :items="keys"
        prepend-inner-icon="mdi-magnify"
        label="Sort by"
      ></v-select>
      <v-spacer></v-spacer>
      <v-btn-toggle v-model="sortDesc" @change="updateSortDesc" mandatory>
        <v-btn depressed color="blue" :value="false">
          <v-icon>mdi-arrow-up</v-icon>
        </v-btn>
        <v-btn depressed color="blue" :value="true">
          <v-icon>mdi-arrow-down</v-icon>
        </v-btn>
      </v-btn-toggle>
    </template>
  </v-toolbar>
</template>

<script>
export default {
    components: {
    },
    props: {
      keys: {
        default: () => [],
        required: true
      },
      sortBy: {
        default: () => 'id',
        required: true,
      },
      sortDesc: {
        default: () => false,
        required: true,
      },
      search: {
        default: () => '',
        required: true,
      }
    },
    data () {
      return {}
    },
    computed: {},
    methods: {
      updateSortDesc (value) {
        this.$emit('updateSortDesc', value);
      },
      updateSortBy (value) {
        this.$emit('updateSortBy', value);
      },
      updateSearch (value) {
        this.$emit('updateSearch', value);
      },
    },
  }
</script>

<style>
</style>