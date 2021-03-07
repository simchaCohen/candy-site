import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../store/actions';
// import Form from 'react-bootstrap/Form'
import './add-candy.css';
import Button from 'react-bootstrap/Button'
import { withRouter } from "react-router";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { RiImageAddFill } from "react-icons/ri";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
function mapStateToProps(state) {
    return {
        candy: state.candyReducer.candy
    };
}
const mapDispatchToProps = (dispatch) => ({
    addCandy: (candyToAdd) => dispatch(actions.addCandy(candyToAdd))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(function AddCandy(props) {
    const { addCandy, history } = props;

    
    const [picture, setPictute] = useState();

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setPictute(URL.createObjectURL(event.target.files[0]));
        }
    }
    return (
        <div className="center">
            <div className="center-item">
                <Row >
                    <Col>

                        <Formik
                            initialValues={{ candyName: '', quantity: '', weight: '', price: '' }}
                            validationSchema={Yup.object({
                                candyName: Yup.string()
                                    .max(15, 'Must be 15 characters or less')
                                    .required('Required'),
                                quantity: Yup.number('Must be number')
                                    //    .max(20, 'Must be 20 characters or less')
                                    .required('Required'),
                                weight: Yup.number('Maust be number').required('Required'),
                                price: Yup.number('Maust be number').required('Required'),
                            })}
                            onSubmit={(values, { setSubmitting }) => {
                                values.picture = picture;
                                addCandy(values);
                                setSubmitting(false);
                                history.push('/manager/candy');
                            }}  >

                            <Form>
                                <div className="row margin">
                                    <div className="col-3">
                                        <label htmlFor="candyName">Candy Name</label>
                                    </div>
                                    <div className="col-9">
                                        <Col>
                                            <Field name="candyName" type="text" />
                                        </Col>
                                        <Col>
                                            <ErrorMessage name="candyName" />
                                        </Col>
                                    </div>

                                </div>
                                <Row className="margin">
                                    <Col sm={3}>
                                        <label htmlFor="quantity">Quantity</label>
                                    </Col>
                                    <Col sm={9}>
                                        <Col>
                                            <Field name="quantity" type="text" />
                                        </Col>
                                        <Col>
                                            <ErrorMessage name="quantity" />
                                        </Col>
                                    </Col>
                                </Row>
                                <Row className="margin">
                                    <Col sm={3}>
                                        <label htmlFor="weight">Weight</label>
                                    </Col>
                                    <Col sm={9}>
                                        <Col>
                                            <Field name="weight" type="text" />
                                        </Col>
                                        <Col>
                                            <ErrorMessage name="weight" />
                                        </Col>
                                    </Col>

                                </Row>
                                <Row className="margin">
                                    <Col sm={3}>
                                        <label htmlFor="price">Price</label>
                                    </Col>
                                    <Col sm={9}>
                                        <Col>
                                            <Field name="price" type="text" />
                                        </Col>
                                        <Col>
                                            <ErrorMessage name="price" /></Col>
                                    </Col>
                                </Row>
                                <br></br>
                                <Button variant="danger" >
                                    <label htmlFor="upload-photo">
                                        Add Photo <RiImageAddFill />
                                    </label>
                                </Button>


                                <input
                                    variant="danger"
                                    className="position-relative"
                                    name="Picture"
                                    type="file"
                                    onChange={onImageChange}
                                    id="upload-photo"
                                ></input>
                                <br></br>

                                <Button variant="danger" type="submit">Submit</Button>
                            </Form>

                        </Formik>
                    </Col>
                    {picture ? <Col sm={6} >
                        <img className="img-candy" id="target" src={picture} />
                    </Col> : ""}

                </Row>
            </div>
        </div >

    );
}));