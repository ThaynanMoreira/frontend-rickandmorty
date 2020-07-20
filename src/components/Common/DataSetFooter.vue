<template>
  <v-row class="mt-2" align="center" justify="center">
    <span class="grey--text">Items per page</span>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn dark text color="primary" class="ml-2" v-bind="attrs" v-on="on">
          {{ itemsPerPage }}
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(number, index) in itemsPerPageArray"
          :key="index"
          @click="updateItemsPerPage(number)"
        >
          <v-list-item-title>{{ number }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-spacer></v-spacer>

    <span class="mr-4 grey--text">Page {{ page }} of {{ numberOfPages }}</span>
    <v-btn fab dark color="blue darken-3" class="mr-1" @click="formerPage">
      <v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <v-btn fab dark color="blue darken-3" class="ml-1" @click="nextPage">
      <v-icon>mdi-chevron-right</v-icon>
    </v-btn>
  </v-row>
</template>

<script>
export default {
    props: {
        totalItens: {
          default: () => 0,
          required: true,
        },
        page: {
          default: () => 1,
          required: true,
        },
        itemsPerPage: {
          default: () => 6,
          required: true,
        },
        itemsPerPageArray: {
            default: () => [6, 8, 10],
            required: true,
        }
    },
    computed: {
      numberOfPages () {
        return Math.ceil(this.totalItens / this.itemsPerPage)
      },
    },
    methods: {
      nextPage () {
        if (this.page + 1 <= this.numberOfPages) {
          this.updatePage(this.page + 1); 
        }
      },
      formerPage () {
        if (this.page - 1 >= 1) {
          this.updatePage(this.page - 1); 
        }
      },
      updatePage (number) {
        this.$emit('updatePage', number);
      },
      updateItemsPerPage (number) {
        this.$emit('updateItemsPerPage', number);
      },
    },
};
</script>

<style>
</style>