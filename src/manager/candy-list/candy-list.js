import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../../store/actions';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { FiEdit3 } from 'react-icons/fi';
import { ImBin } from "react-icons/im";
import { withRouter } from "react-router";
import {
    Redirect
} from "react-router-dom";
import './candy-list.css';
function mapStateToProps(state) {
    return {
        candy: state.candyReducer.candy
    };
}
const mapDispatchToProps = (dispatch) => ({
    deleteCandy: (index) => dispatch(actions.deleteCandy(index))
})
export default withRouter(
 connect(mapStateToProps,mapDispatchToProps)(function CandyList(props) {
    const { candy,history ,deleteCandy} = props;
     const edit=(index)=> {
        // return <Redirect to={{ pathname: '/edit-candy' }} />
        history.push('/manager/edit-candy/'+index)
    }
     const add=()=> {
        // return <Redirect to={{ pathname: '/edit-candy' }} />
        history.push('/manager/add-candy')
    }
   
    return (
        <div className="center position-absolute">
            <div className="center-item" >
            <Table   >
                <thead>
                    <tr>
                        <th>name</th>
                        <th>quantity</th>
                        <th>weight</th>
                        <th>price</th>
                        <th></th>
                        <th></th>
                        <th><Button variant="danger" onClick={()=>add()}>Add</Button></th>
                    </tr>
                </thead>
                <tbody>
                    {candy.map((item,index) => {
                        return (
                            <tr key={item._id}>
                                <td>{item.candyName}</td>
                                <td>{item.quantity}</td>
                                <td>{item.weight}</td>
                                <td>{item.price}</td>
                                <td><Button variant="danger" onClick={()=>edit(index)}><FiEdit3 /></Button></td>
                                <td>
                                    <Button variant="danger"
                                 onClick={
                                  ()=>   deleteCandy(index)
                                    }
                                    >
                                        <ImBin />
                                        </Button>
                                        </td>
                            </tr>)
                    })}

                </tbody>
            </Table>
            </div>
        </div>
    );
}));