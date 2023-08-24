<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="q-gutter-sm">
        <div class="text-h4">Colors</div>
        <q-separator class="q-my-md" />
        <div class="q-pa-xs rounded-borders bg-primary text-yellow">
          primary
        </div>
        <div class="q-pa-xs rounded-borders bg-secondary text-white">
          secondary
        </div>
        <div class="q-pa-xs rounded-borders bg-accent text-white">accent</div>
        <div class="q-pa-xs rounded-borders bg-dark text-white">dark</div>
        <div class="q-pa-xs rounded-borders bg-positive">positive</div>
        <div class="q-pa-xs rounded-borders bg-negative">negative</div>
        <p>Variables</p>
      </div>
    </section>
    <section class="q-mb-xl">
      <div class="text-h4">components</div>
      <q-separator class="q-my-md" />
      <q-btn color="error" text-color="error">aaa</q-btn>
    </section>
  </q-page>
</template>

<script setup></script>

<style lang="scss" scoped>
p {
  color: $red;
  background-color: $grey-5;
}

.text-error {
  color: $red;
}
.error {
  color: $red;
}
</style>
