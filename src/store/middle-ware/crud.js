import { actions } from '../actions';
import {useHistory} from "react-router-dom";
// import Cookies from 'js-cookie';
// import $ from 'jquery'; 
import axios from 'axios';
export const addCandy = ({ dispatch, getState }) => next => action => {
    if (action.type === 'addCandy') {
        let urlData = 'http://localhost:7000/candy/addCandy'
        let candy = action.payload;
        axios.post(urlData, candy)
            .then(function (response) {
                console.log(response);
                dispatch(actions.addCandyToServer(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return next(action);
}
export const editCandy = ({ dispatch, getState }) => next => action => {
    
    if (action.type === 'editCandy') {
        const history=  useHistory();
        let candy = action.payload.value;
        console.log(candy);
        let urlData = `http://localhost:7000/candy/editCandy/${candy._id}`
        axios.put(urlData, candy)
            .then(function (response) {
                console.log(response);
                dispatch(actions.editCandyToServer({ index: action.payload.index, value: response.data }));
                history.push('/manager/candy');
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return next(action);
}

export const getAllCandy = ({ dispatch, getState }) => next => action => {
    console.log("getAllCandy");
    if (action.type === 'getAllCandy') {
        console.log("getAllCandy2");
        let urlData = 'http://localhost:7000/candy/getAllCandy';
        axios.get(urlData)
            .then(function (response) {
                console.log(response);
                dispatch(actions.getAllCandyServer(response.data.candy));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return next(action);

}