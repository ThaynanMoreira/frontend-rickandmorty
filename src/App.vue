<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="(item, i) in routerItens" :key="i" :to="item.path">
            <v-icon>{{item.icon}}</v-icon>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      color="secondary"
      app
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{$route.name}}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-filter</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer app>
      <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
// import Characters from "@/views/Characters.vue";
export default {
  
  name: 'App',

  components: {
    
  },

  data: () => ({
    drawer: false,
    group: null,
    routerItens: [
      { title: 'Home', icon: 'mdi-shield-home', path: '/' },
      { title: 'Characters', icon: 'mdi-view-dashboard-outline', path: '/characters' },
      { title: 'Episodes', icon: 'mdi-view-dashboard-outline', path: '/episodes' },
    ],
  }),

  watch: {
    group () {
      this.drawer = false
    },
  },
};
</script>
