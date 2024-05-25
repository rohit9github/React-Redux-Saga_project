import { useDispatch, useSelector } from 'react-redux';
import { addToCart, emptyCart, removeToCart } from '../Redux/Action';
import { productListing } from '../Redux/ProductAction';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';



function Main() {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.productData);
    console.log(data)
    useEffect(() => {
        dispatch(productListing())
    }, [])

    return (
        <>
            <div className='mt-5'>
                <Button variant="danger" onClick={() => dispatch(emptyCart())} >Empty To Cart</Button>
            </div>
            <div className='productContainer'>
                <Container>
                    <Row className="justify-content-md-center">
                        {data.map((v, i) => {
                            return (
                                <Col md="3" className='mt-5'>
                                    <Card border="success"  style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={v.photo} style={{height:"280px" , objectFit:"cover"}} />
                                        <Card.Body>
                                            <Card.Title>Name :- {v.name}</Card.Title>
                                            <Card.Text>
                                                <div className='productPrice'>Price :- {v.price}</div>
                                                <div className='productQuantity'>Quantity :- {v.quantity}</div>
                                                <div className='productTotalPrice'>Category :- {v.category}</div>
                                                <div className='productId'>Brand :- {v.brand}</div>
                                            </Card.Text>
                                            <div>
                                                <Button variant="primary" onClick={() => dispatch(addToCart(v))}>Add To Cart</Button>
                                                <Button variant="secondary" className='ms-3' onClick={() => dispatch(removeToCart(v.id))} >Remove</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>

        </>
    );
}

export default Main;
