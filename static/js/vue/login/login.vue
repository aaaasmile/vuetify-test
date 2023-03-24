<template>
  <v-col>
    <button v-on:click="count++">You clicked me {{ count }} times.</button>
    <v-icon icon="mdi:mdi-plus" />
    <v-icon icon="mdi:mdi-minus" />
  </v-col>
</template>