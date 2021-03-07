import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../store/actions';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './edit-candy.css';
import Button from 'react-bootstrap/Button'
import { withRouter } from "react-router";
import { useParams } from "react-router-dom";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { RiImageAddFill } from "react-icons/ri";
function mapStateToProps(state) {
    return {
        candy: state.candyReducer.candy
    };
}
const mapDispatchToProps = (dispatch) => ({
    setCandy: (index, candyToEdit) => dispatch(actions.editCandy({ index: index, value: candyToEdit }))
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(function EditCandy(props) {
    const { candy, setCandy, history } = props;
    const { index } = useParams();
    const [picture, setPictute] = useState( candy[index].picture);
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
                            initialValues={{ candyName: candy[index].candyName, quantity: candy[index].quantity, weight: candy[index].weight, price: candy[index].price }}
                            validationSchema={Yup.object({
                                candyName: Yup.string()
                                    .max(15, 'Must be 15 characters or less')
                                    .required('Required'),
                                quantity: Yup.number('Must be number')
                                    .required('Required'),
                                weight: Yup.number('Maust be number').required('Required'),
                                price: Yup.number('Maust be number').required('Required'),
                            })}
                            onSubmit={(values, { setSubmitting }) => {
                                values.picture = picture;
                                setCandy(index,values);
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

                                {/* <Field name="picture" onChange={onImageChange} type="file" className="position-relative upload-photo" /> */}

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
                    </Col >
                    {picture ? <Col sm={6}>
                        <img className="img-candy" id="target" src={picture} />
                    </Col> : ""}
                </Row>
            </div>
        </div >)

  
}))