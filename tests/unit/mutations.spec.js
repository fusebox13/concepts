import { expect } from "chai";
import { mutations } from '@/mutations';

// destructure assign `mutations`
const { SWITCH_TO_DRAWER_A, SWITCH_TO_DRAWER_B, SWITCH_TO_DRAWER_C, BACK } = mutations

describe.only('mutations', () => {
  it('SWITCH_TO_DRAWER_A', () => {
    // mock state
    const currentState = { 
        CURRENT_DRAWER: {
            BODY_COMPONENT: "DrawerContentX",
            BODY_PAYLOAD: {
                data: "UH OH"
            }
        },
        DRAWER_STACK: []
    }
    const expectedState = { 
        CURRENT_DRAWER: {
            BODY_COMPONENT: "DrawerContentA",
            BODY_PAYLOAD: {
                data: "Some A data"
            },
            DRAWER_STACK: []
        }
    }
    // apply mutation
    SWITCH_TO_DRAWER_A(currentState)
    // assert result
    expect(currentState.CURRENT_DRAWER.BODY_COMPONENT).to.equal(expectedState.CURRENT_DRAWER.BODY_COMPONENT)
    expect(currentState.CURRENT_DRAWER.BODY_PAYLOAD.data).to.equal(expectedState.CURRENT_DRAWER.BODY_PAYLOAD.data)
});

it('SWITCH_TO_DRAWER_B', () => {
    // mock state
    const currentState = { 
        CURRENT_DRAWER: {
            BODY_COMPONENT: "DrawerContentX",
            BODY_PAYLOAD: {
                data: "UH OH"
            }
        },
        DRAWER_STACK: []
    }
    const expectedState = { 
        CURRENT_DRAWER: {
            BODY_COMPONENT: "DrawerContentB",
            BODY_PAYLOAD: {
                data: "Some B data"
            },
            DRAWER_STACK: []
        }
    }
    // apply mutation
    SWITCH_TO_DRAWER_B(currentState)
    // assert result
    expect(currentState.CURRENT_DRAWER.BODY_COMPONENT).to.equal(expectedState.CURRENT_DRAWER.BODY_COMPONENT)
    expect(currentState.CURRENT_DRAWER.BODY_PAYLOAD.data).to.equal(expectedState.CURRENT_DRAWER.BODY_PAYLOAD.data)
});

it('SWITCH_TO_DRAWER_C', () => {
    // mock state
    const currentState = { 
        CURRENT_DRAWER: {
            BODY_COMPONENT: "DrawerContentX",
            BODY_PAYLOAD: {
                data: "UH OH"
            }
        },
        DRAWER_STACK: []
    }
    const expectedState = { 
        CURRENT_DRAWER: {
            BODY_COMPONENT: "DrawerContentC",
            BODY_PAYLOAD: {
                data: "Some C data"
            },
            DRAWER_STACK: []
        }
    }
    // apply mutation
    SWITCH_TO_DRAWER_C(currentState)
    // assert result
    expect(currentState.CURRENT_DRAWER.BODY_COMPONENT).to.equal(expectedState.CURRENT_DRAWER.BODY_COMPONENT)
    expect(currentState.CURRENT_DRAWER.BODY_PAYLOAD.data).to.equal(expectedState.CURRENT_DRAWER.BODY_PAYLOAD.data)
});

it('BACK', () => {
    // mock state
    const currentState = { 
        CURRENT_DRAWER: {
            BODY_COMPONENT: "DrawerContentX",
            BODY_PAYLOAD: {
                data: "UH OH"
            }
        },
        DRAWER_STACK: []
    }
    const expectedState = { 
        CURRENT_DRAWER: {
            BODY_COMPONENT: "DrawerContentC",
            BODY_PAYLOAD: {
                data: "Some C data"
            },
            DRAWER_STACK: []
        }
    }
    // apply mutation
    SWITCH_TO_DRAWER_C(currentState)
    // assert result
    expect(currentState.CURRENT_DRAWER.BODY_COMPONENT).to.equal(expectedState.CURRENT_DRAWER.BODY_COMPONENT)
    expect(currentState.CURRENT_DRAWER.BODY_PAYLOAD.data).to.equal(expectedState.CURRENT_DRAWER.BODY_PAYLOAD.data)
<<<<<<< HEAD
    expect(currentState.DRAWER_STACK.length).to.equal(1);
=======
>>>>>>> 18aaf7af00441f3722c6dafe99d688865a8a051c
    // apply mutation
    BACK(currentState)
    expect(currentState.CURRENT_DRAWER.BODY_COMPONENT).to.equal("DrawerContentX")
    expect(currentState.CURRENT_DRAWER.BODY_PAYLOAD.data).to.equal("UH OH")
    expect(currentState.DRAWER_STACK.length).to.equal(0);
});



})