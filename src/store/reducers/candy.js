import produce from 'immer';
import createReducer from "./reducer-util";


const initialState = {
    candy: [{
        candyId :1,
        candyName:'lolipop',
        weight:20,
        quantity:50,
        picture:'',
        price:1.5
    },
    {
        candyId :2,
        candyName:'bamba',
        weight:30,
        quantity:40,
        picture:'',
        price:4
    }]
}

const candy = {
    editCandy(state, action) {
        state.candy[action.payload.index] = action.payload.value;
    },
    addCandy(state, action) {
        state.candy.push(action.payload);
    },
    deleteCandy(state, action) {
        state.candy.splice(action.payload, 1);
    },

};

export default produce((state, action) => createReducer(state, action, candy), initialState);

