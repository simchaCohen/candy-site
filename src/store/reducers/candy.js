import produce from 'immer';
import createReducer from "./reducer-util";
import axios from 'axios';


const initialState = {
    candy: []
}

const candy = {
    editCandyToServer(state, action) {
        state.candy[action.payload.index] = action.payload.value;
    },
    addCandyToServer(state, action) {
        state.candy.push(action.payload);
    },
    getAllCandyServer(state, action) {
        state.candy.push(...action.payload);
    },
    deleteCandy(state, action) {
        state.candy.splice(action.payload, 1);
    },
    
};

export default produce((state, action) => createReducer(state, action, candy), initialState);

