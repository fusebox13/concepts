const mutations = {
    BACK (state, payload) {
        state.CURRENT_DRAWER = state.DRAWER_STACK.pop();
      },
    SWITCH_TO_DRAWER_A (state, payload) {
    //serialize component state here
    state.DRAWER_STACK.push(state.CURRENT_DRAWER);
    state.CURRENT_DRAWER = {
        BODY_COMPONENT: "DrawerContentA",
        BODY_PAYLOAD: {
        data: "Some A data"
        }
    }
    },
    SWITCH_TO_DRAWER_B (state, payload) {
    //serialize component state here
    state.DRAWER_STACK.push(state.CURRENT_DRAWER);
    state.CURRENT_DRAWER = {
        BODY_COMPONENT: "DrawerContentB",
        BODY_PAYLOAD: {
        data: "Some B data"
        }
    }
    },
    SWITCH_TO_DRAWER_C (state, payload) {
    //serialize component state here
    state.DRAWER_STACK.push(state.CURRENT_DRAWER);
    state.CURRENT_DRAWER = {
        BODY_COMPONENT: "DrawerContentC",
        BODY_PAYLOAD: {
        data: "Some C data"
        }
    }
    },
 }
 
 export { mutations }