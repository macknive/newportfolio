<template>
  <div class="resume-container text-white">
    <b-container>
      <b-card>
        <b-row class="p-4">
          <b-col cols="3" class="p-0 c-1">1</b-col>
          <b-col class="p-0 c-2">2 </b-col>
          <b-col cols="1" class="p-0 c-3"> 3</b-col>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.resume-container {
  min-height: 1000px;
  background-color: #191923;
}
.c-1 {
  background: rgba(255, 255, 255, 0.3);
}
.c-2 {
}
.c-3 {
}

.card {
  height: 1000px;
  background-color: #191923;
}
</style>
