<script setup>
  // composables
  const { $pwa } = useNuxtApp()
  const { kings } = useKingsList()

  // page refs
  const search = ref('')

  const filteredKings = computed(() => {
    if (search.value === null || search.value.trim().length === 0) {
      return kings.value
    }

    const match = search.value.match(/([0-9][0-9][0-9][0-9])/)

    // search by year
    if (match) {
      const year = parseInt(match[0])
      return kings.value.filter((k) => {
        if (k.from <= year && (k.to === null || k.to >= year)) {
          return true
        }
      })
    }

    // don't filter if it's just numbers
    if (search.value.replace(/[0-9]/g,'').trim().length === 0) {
      return kings.value
    }

    // search by string
    const lc = search.value.toLowerCase()
    return kings.value.filter((k) => {
      return k.name.toLowerCase().includes(lc)
    })
  })

</script>
<template>
  <!-- PWA refresh banner-->
  <v-alert color="warning" v-show="$pwa.needRefresh">
    <h4> New content available, click on reload button to update. </h4>
    <v-btn color="primary" @click="$pwa.updateServiceWorker()">Reload</v-btn>
  </v-alert>

  <v-text-field clearable :label="'Search (' + filteredKings.length + ')'" v-model="search"></v-text-field>
  <v-card v-for="king in filteredKings">
    <v-img
      :src="king.img"
      class="align-end"
      cover
    >
      <v-card-title class="text-white" v-text="king.name"></v-card-title>
    </v-img>
    <v-card-text>
      {{ king.from }} 
      <span v-if="king.to && king.to > king.from">to {{  king.to }}</span>
      <span v-if="king.to===null">to -</span>
    </v-card-text>
  </v-card>
</template>
