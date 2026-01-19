<script setup>
  // composables
  const { $pwa } = useNuxtApp()
  const { kings, filteredKings, search } = useKingsList()
  const showBio = ref(false)
</script>
<style>
  .v-card {
    margin-bottom: 10px;
  }
</style>
<template>
  <!-- PWA refresh banner-->
  <v-alert color="warning" v-show="$pwa.needRefresh">
    <h4> New content available, click on reload button to update. </h4>
    <v-btn color="primary" @click="$pwa.updateServiceWorker()">Reload</v-btn>
  </v-alert>

  <v-row>
    <v-col>
      <v-text-field clearable :label="'Search (' + filteredKings.length + ')'" v-model="search"></v-text-field>
    </v-col>
    <v-col>
      <v-switch label="Bio" v-model="showBio"></v-switch>
    </v-col>
  </v-row>

   <v-card v-for="king in filteredKings">
    <v-img
      :src="king.img"
      class="align-end"
      cover
    >
      <v-card-title class="text-white" v-text="king.name"></v-card-title>
    </v-img>
    <v-card-text>
      <v-img cover v-if="king.x && showBio" :src="king.x"></v-img>
      <v-img cover v-if="king.y && showBio" :src="king.y"></v-img>
      <v-img cover v-if="king.z && showBio" :src="king.z"></v-img>
      <v-img cover v-if="king.zz && showBio" :src="king.zz"></v-img>
      <v-row>
        <v-col>
          {{ king.from }} 
          <span v-if="king.to && king.to > king.from">to {{  king.to }}</span>
          <span v-if="king.to===null">to -</span>
        </v-col>
      </v-row>
      <v-row v-if="filteredKings.length < kings.length">
        <v-col><v-btn variant="plain" @click="search=king.before">⬅️</v-btn></v-col>
        <v-col>{{  king.before }}</v-col>
        <v-col>{{ king.after }} </v-col>
        <v-col><v-btn  variant="plain"@click="search=king.after">➡️</v-btn></v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
