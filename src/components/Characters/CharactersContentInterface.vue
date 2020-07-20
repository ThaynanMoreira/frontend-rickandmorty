<template>
  <v-row>
    <v-col
      v-for="item in items"
      :key="item.name"
      cols="12"
      sm="12"
      md="6"
      lg="4"
      xl="3"
    >
      <DataSetCard :color="'secondary'" :src="item.image" :title="item.name" :subtitle="item.origin.name">
        <template>
            <ul>
            <v-card-text class="pt-0">
              Episodes List:
              <li v-for="e in item.episode" :key="e.id">
                 {{`${e.episode}: ${e.name}`}}
              </li>
            </v-card-text>
          </ul>
            <v-card-actions>
            <v-chip small color="primary" class="white--text">Episodes: {{item.episode.length}}</v-chip>
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
      
    </v-col>
  </v-row>
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