<template>
  <div class="drawer-content-a">
        <h1>Payload Data A: {{payload.data}}</h1>
  </div>
</template>

<script>
export default {
  name: "DrawerContentA",
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