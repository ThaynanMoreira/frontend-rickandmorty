<template>
  <!-- <v-row>
    <v-col
      v-for="item in items"
      :key="item.name"
      cols="12"
    >
      <DataSetCard :item="{color: 'secondary', src: '', title: item.name, subtitle: item.episode}"/>
      
    </v-col>
  </v-row> -->
  <v-layout row wrap justify-center align-center>
    <v-flex xs11 sm10 md8>
      <div v-for="item in items" :key="item.name">
        <DataSetCard :cardClass="'theme--dark rounded my-3'" :color="''" :title="`${item.episode}: ${item.name}`" :subtitle="item.air_date" textClass="''">
          <template>
            <v-card-text>Characters Names: {{(item.characters.map((ch) => ch.name)).toString().split(',').join(', ')}}</v-card-text>
            <v-card-actions>
            <v-chip small color="secondary" class="white--text">Characters: {{item.characters.length}}</v-chip>
            <v-spacer></v-spacer>

            <!-- <v-btn
              small
              replace
              color="info"
              href="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
              target="_blank"
            >Read More</v-btn> -->
          </v-card-actions>
          </template>
        </DataSetCard>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import DataSetCard from '@/components/Common/DataSetCard.vue'

export default {
  props: {
    items: {
      default: () => [],
      required: true,
    }
  },
  components: {
    DataSetCard,
  }
}
</script>

<style>

</style>