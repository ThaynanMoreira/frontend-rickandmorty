<template>
  <v-content>
    

    <!-- <ApolloExample/> -->
    <!-- Tchat example -->
    <ApolloQuery
      :query="require('../graphql/rickAPI/characters/get.gql')"
      :variables="{
          page: 1,
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
          <DataSet :items="data.characters.results" :keys="keys" >
            <template v-slot:default="{props}">
              <CharactersContentInterface :items="props.items" />
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
import CharactersContentInterface from '@/components/Characters/CharactersContentInterface.vue'

export default {
  name: "App",

  components: {
    // ApolloExample,
    DataSet,
    CharactersContentInterface
  },

  data: () => ({
    keys: ['name', 'status', 'species', 'gender', 'type'],
  })
};
</script>