import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './candy-details.css';
import Button from 'react-bootstrap/Button'
import { withRouter } from "react-router";
import { useParams } from "react-router-dom";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

// import TextField from '@material-ui/core/TextField';

function mapStateToProps(state) {
    return {
        candyList: state.candyReducer.candy
    };
}
// const mapDispatchToProps = (dispatch) => ({
//     setCandy: (index, candyToEdit) => dispatch(actions.editCandy({ index: index, value: candyToEdit }))
// })
export default withRouter(connect(mapStateToProps)(function CandyDetails(props) {
    const { candyList, history } = props;
    const { index } = useParams();
    const [candy, setCandy] = useState(candyList[index]);
    const [validQ, setValidQ] = useState(false);

    const checkQuantity = value => {
        if (value > candy.quantity) {
            setValidQ(true)
        }
        else {
            setValidQ(false)
        }
    }
    return (
        <div className="center">
            <div className="center-item">
                <Row>
                    <Col>
                        <img className="img-candy" src={candy.picture} />
                    </Col>
                    <Col>
                        <h1> {candy.candyName}</h1>
                        <p>Wheit: {candy.weight}</p>
                        Quantity:
                        <br />
                       
                            <Tooltip  placement="right-start" arrow TransitionComponent={Zoom} title="Not enough in stock" open={validQ}>
                                <input
                                    id="quantity"
                                    type="number"
                                    onChange={(e) => checkQuantity(e.target.value)}
                                />
                            </Tooltip> 
                        {/* <TextField
                            id="outlined-number"
                            label="Number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        /> */}
                        <p>price: {candy.price}</p>
                        <Button variant="danger" type="submit" disabled={validQ}>Add To Order</Button>
                    </Col>
                </Row>
            </div>
        </div >)


}))