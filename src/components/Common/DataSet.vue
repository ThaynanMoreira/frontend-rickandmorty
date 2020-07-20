<template>
  <v-container fluid>
    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      :page="page"
      :search="search"
      :sort-by="sortBy.toLowerCase()"
      :sort-desc="sortDesc"
      :custom-filter="customFilter"
      hide-default-footer
    >
      <template v-slot:header>
        <DataSetHeader
          @updateSortDesc="(v) => sortDesc = v?`${v}`:''"
          @updateSortBy="(v) => sortBy = v?`${v}`:''"
          @updateSearch="(v) => search = v"
          :keys="keys"
          :search="search"
          :sortBy="sortBy"
          :sortDesc="sortDesc"
          />
      </template>

      <template v-slot:default="props">
        <slot :props="props"></slot>
      </template>

      <template v-slot:footer>
        <DataSetFooter 
          @updatePage="updatePage"
          @updateItemsPerPage="updateItemsPerPage"
          :totalItens="items.length"
          :page="page"
          :itemsPerPage="itemsPerPage"
          :itemsPerPageArray="itemsPerPageArray"
        />
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
  import DataSetFooter from '@/components/Common/DataSetFooter.vue'
  import DataSetHeader from '@/components/Common/DataSetHeader.vue'

  export default {
    components: {
      // ApolloExample,
      DataSetFooter,
      DataSetHeader,
    },
    props: {
      items: {
        default: () => [],
        required: true,
      },
      keys: {
        default: () => [],
        required: true,
      },
      filtered: {
        default: () => ['name'],
        required: true,
      }
    },
    data () {
      return {
        itemsPerPageArray: [6, 8, 10],
        search: '',
        filter: {},
        sortDesc: false,
        page: 1,
        itemsPerPage: 6,
        sortBy: 'id',
      }
    },
    computed: {},
    methods: {
      updatePage (number) {
        this.page = number
      },
      updateItemsPerPage (number) {
        this.itemsPerPage = number
      },
      customFilter (items, searchStr) {
        if(!items || !searchStr || (items && !items.length)) {
          return items;
        }
        searchStr = searchStr.toString().toLowerCase()
        return items.filter(i => (
          this.filtered.some(j => `${i[j]}`.toLowerCase().indexOf(searchStr) > -1)
        ));
      }
    },
  }
</script>