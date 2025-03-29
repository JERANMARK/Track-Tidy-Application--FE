import React from 'react';
import { Col, Row } from 'antd';

// Import images at the top of the file
import img15 from '../../../assets/images/img15.jpg';
import img16 from '../../../assets/images/img16.jpg';
import img17 from '../../../assets/images/img17.jpg';
import img18 from '../../../assets/images/img18.jpg';
import img19 from '../../../assets/images/img19.jpg';
import img20 from '../../../assets/images/img20.jpg';
import img21 from '../../../assets/images/img21.jpg';
import img23 from '../../../assets/images/img23.jpg';
import img27 from '../../../assets/images/img27.jpg';
import img28 from '../../../assets/images/img28.jpg';
import img29 from '../../../assets/images/img29.jpg';
import img30 from '../../../assets/images/img30.jpg';

// Product categories data
const productCategories = [
    {
        key: '1',
        image: img15,
        title: 'Frozen'
    },
    {
        key: '2',
        image: img16,
        title: 'Fresh Vegetables'
    },
    {
        key: '3',
        image: img17,
        title: 'Food Cupboard'
    },
    {
        key: '4',
        image: img18,
        title: 'Household'
    },
    {
        key: '5',
        image: img19,
        title: 'Drinks'
    },
    {
        key: '6',
        image: img20,
        title: 'Bakery'
    },
    {
        key: '7',
        image: img21,
        title: 'Fresh Fruits'
    },
    {
        key: '9',
        image: img23,
        title: 'Offers'
    },
    {
        key: '13',
        image: img27,
        title: 'Baby Product'
    },
    {
        key: '13',
        image: img28,
        title: 'Cooking Essentials'
    },
    {
        key: '13',
        image: img29,
        title: 'Rice'
    },
    {
        key: '13',
        image: img30,
        title: 'Meats'
    }
];

// ProductCategories Component
function ProductCategories() {
    return (
        <div className='block productCategories'>
            <h2>Shop by Category</h2>
            <Row gutter={[24, 24]}>
                {
                    productCategories.map(productCategory => (
                        <Col lg={4} key={productCategory.key}>
                            <div className='content'>
                                <div className='image'>
                                    <img src={productCategory.image} alt={productCategory.title} />
                                </div>
                                <h3>{productCategory.title}</h3>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </div>
    );
}

export default ProductCategories;
