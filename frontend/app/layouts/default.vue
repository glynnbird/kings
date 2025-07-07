<script setup>
</script>
<template>
  <v-app theme="light">
    <v-app-bar density="compact" class="bg-purple-darken-2">
      <v-app-bar-title @click="navigateTo('/')" style="user-select:none;">Kings & Queens</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <Alert></Alert>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>
