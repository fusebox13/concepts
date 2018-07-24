<template>
  <div class="drawer-content-c">
        <h1>Payload Data C: {{payload.data}}</h1>
  </div>
</template>

<script>
export default {
  name: "DrawerContentC",
  props: {
      payload: {
        type: Object,
        required: true,
        default: {},
      }
  },
  data(){
      return {

      }
  }
};
</script>

<style scoped lang="scss">

</style>