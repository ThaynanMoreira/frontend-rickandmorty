<template>
    <v-card
    :color="color"
    :class="cardClass"
    >
      <v-row
        align="start"
        justify="start"
        class="spacer"
        no-gutters
      >
        <v-col
          cols="12"
          sm="4"
          md="3"
          lg="3"
          xl="2"
          v-if="src"
          class="fill-height"
          align-self="start"
          
        >
          <v-avatar
              class="ma-0"
              size="100%"
              >
            <v-img
              alt="Avatar"
              contain
              class="ma-0"
              :src="src"
              lazy-src="https://rickandmortyapi.com/api/character/avatar/19.jpeg"
              >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular indeterminate size="25" color="grey lighten-5">
                  </v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-avatar>
        </v-col>
        <v-col
          align-self="start"
          cols="12"
          :class="textClass"
          v-if="title"
        >
         <v-card-title
                class="headline pt-0 d-block text-truncate"
                v-text="title"
            ></v-card-title>
          <v-card-subtitle class="d-block text-truncate" v-if="subtitle" v-text="subtitle"></v-card-subtitle>
          <slot></slot>
        </v-col>
      </v-row>
    </v-card>
</template>

<script>
  export default {
    name: 'card',
    props: {
      color: {
        default: () => 'secondary',
        required: false
      },
      cardClass: {
        default: () => 'theme--dark rounded',
        required: false
      },
      textClass: {
        default: () => 'col-sm-8 col-md-9 col-lg-9 col-xl-10',
        required: false
      },
      src: {
        default: () => '',
        required: false
      },
      title: {
        default: () => '',
        required: true
      },
      subtitle: {
        default: () => '',
        required: false
      },
    },
    data: () => ({}),
  }
</script>