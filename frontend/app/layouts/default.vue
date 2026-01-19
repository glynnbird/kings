<script setup>
   const { showBio } = useShowBio()
   const { search } = useKingsList()
</script>
<template>
  <v-app theme="light">
    <v-app-bar density="compact" class="bg-purple-darken-2" extended extension-height="70">
      <v-app-bar-title @click="navigateTo('/')" style="user-select:none;">Kings & Queens</v-app-bar-title>
      <template v-slot:extension>
        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="6">
             <v-text-field clearable placeholder="Search" v-model="search"></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-switch label="Bio" v-model="showBio"></v-switch>
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>
      </template>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <Alert></Alert>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>
