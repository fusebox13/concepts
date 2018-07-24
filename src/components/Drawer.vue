<template>
  <div class="drawer-component">
        <h1>This is a drawer component!</h1>
        <ul>
            <li v-for="drawer in DRAWER_STACK" :key="drawer.length">{{drawer.BODY_COMPONENT}}</li>
        </ul>
        <component :is="CURRENT_DRAWER.BODY_COMPONENT" :payload="CURRENT_DRAWER.BODY_PAYLOAD"></component>
        <button @click="SWITCH_TO_DRAWER_A">a</button><button @click="SWITCH_TO_DRAWER_B">b</button><button @click="SWITCH_TO_DRAWER_C">c</button><button @click="BACK">Back</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import DrawerContentA from "@/components/DrawerContentA.vue";
import DrawerContentB from "@/components/DrawerContentB.vue";
import DrawerContentC from "@/components/DrawerContentC.vue";

export default {
  name: "Drawer",
  components: {
    "DrawerContentA": DrawerContentA,
    "DrawerContentB": DrawerContentB,
    "DrawerContentC": DrawerContentC
  },
  props: {
  },
  data(){
      return {
          body: "DrawerContentA"
      }
  },
  computed: {
      ...mapState(['CURRENT_DRAWER', "DRAWER_STACK"])
  },
  methods: {
      ...mapMutations(['SWITCH_TO_DRAWER_A', 'SWITCH_TO_DRAWER_B', 'SWITCH_TO_DRAWER_C', 'BACK'])
  }
};
</script>

<style scoped lang="scss">

</style>
