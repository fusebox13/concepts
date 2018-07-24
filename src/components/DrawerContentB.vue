<template>
  <div class="drawer-content-b">
        <h1>Payload Data B: {{payload.data}}</h1>
  </div>
</template>

<script>
export default {
  name: "DrawerContentB",
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