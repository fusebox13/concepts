import Vue from "vue";
import Vuex from "vuex";
import { mutations } from "@/mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    CURRENT_DRAWER: {
      BODY_COMPONENT: "DrawerContentX",
      BODY_PAYLOAD: {
        data: "UH OH"
      }
    },
    DRAWER_STACK: []
  },
  mutations: mutations,
  actions: {}
});
