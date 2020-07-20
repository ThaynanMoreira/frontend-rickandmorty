<template>
  <v-content>
    

    <!-- <ApolloExample/> -->
    <!-- Tchat example -->
    <ApolloQuery
      :query="require('../graphql/rickAPI/episodes/get.gql')"
      :variables="{
          page: page,
          filter: {}
        }"
    >
      <template slot-scope="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occured</div>

        <!-- Result -->
        <div v-else-if="data" class="result apollo">
          <DataSet :items="data.episodes.results" :keys="keys" :filtered="['name']">
            <template v-slot:default="{props}">
              <EpisodesContentInterface :items="props.items" />
            </template>
          </DataSet>
        </div>

        <!-- No result -->
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>
  </v-content>
</template>
<script>
// const ApolloExample = import('./components/ApolloExample');
import DataSet from "@/components/Common/DataSet.vue";
import EpisodesContentInterface from '@/components/Episodes/EpisodesContentInterface.vue'

export default {
  name: "App",

  components: {
    // ApolloExample,
    DataSet,
    EpisodesContentInterface
  },

  data: () => ({
    page: 1,
    keys: ['name', 'episode', 'air_date'],
  }),
  methods: {
    pageUp() {
      this.page = this.page + 1;
    }
  }
};
</script>