import React, { useState } from 'react';
import { Col, Row, Button, Input, Badge, Drawer, List, notification } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

// Import images
import img001 from '../../assets/images/img001.jpg';
import img002 from '../../assets/images/img002.jpg';
import img003 from '../../assets/images/img003.jpg';
import img004 from '../../assets/images/img004.jpg';
import img32 from '../../assets/images/img32.jpg';
import img33 from '../../assets/images/img33.jpg';
import img34 from '../../assets/images/img34.jpg';
import img35 from '../../assets/images/img35.jpg';
import img36 from '../../assets/images/img36.jpg';
import img37 from '../../assets/images/img37.jpg';
import img38 from '../../assets/images/img38.jpg';
import img42 from '../../assets/images/img42.jpg';

// Product data
const allProducts = [
  { key: '1', image: img001, title: 'Diva Colour Guard Liquid Detergent - 1.00 l', subtitle: 'Laundry Detergent', price: 435.00 },
  { key: '2', image: img002, title: 'Colgate Toothpaste Total Advanced Health - 120.00 g', subtitle: 'Toothpaste', price: 470.00 },
  { key: '3', image: img003, title: 'Sunlight Clean & Rose Fresh Detergent Powder - 1.00 kg', subtitle: 'Detergent Powder', price: 304.00 },
  { key: '4', image: img004, title: 'Rathna Steam Keeri Rice - 5.00 kg', subtitle: 'Keeri Samba', price: 1300.00 },
  { key: '5', image: img32, title: 'Dives Fish Patties - 200.00 g', subtitle: 'Fish Patties', price: 331.50 },
  { key: '6', image: img33, title: 'MDK Koththu Rotti - 1.00 kg', subtitle: 'Koththu Rotti', price: 600.00 },
  { key: '7', image: img34, title: 'Spring Home Roti Paratha', subtitle: 'Roti Paratha', price: 1200.00 },
  { key: '8', image: img35, title: 'Carrot - 500.00 g', subtitle: 'Carrot', price: 500.00 },
  { key: '9', image: img36, title: 'Big Onion - 500.00 g', subtitle: 'Big Onion', price: 130.00 },
  { key: '10', image: img37, title: 'Green Chillies - 100.00 g', subtitle: 'Green Chillies', price: 99.00 },
  { key: '11', image: img38, title: 'Beetroot - 250.00 g', subtitle: 'Beetroot', price: 48.00 },
  { key: '12', image: img42, title: 'Flora Toilet Rolls 2Ply - 2.00 pcs', subtitle: 'BToilet Roll', price: 456.00 },
];

function AppShop() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [cart, setCart] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  const [api, contextHolder] = notification.useNotification();

  const handleSearch = (value) => {
    setSearchTerm(value);
    const filtered = allProducts.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    // Show notification
    api.success({
      message: 'Added to Cart',
      description: `${product.title} has been added to your Grocery.`,
      placement: 'topRight',
      duration: 1,
    });
  };

  const removeFromCart = (productKey) => {
    const removedItem = cart.find(item => item.key === productKey);
    setCart(cart.filter((item) => item.key !== productKey));
    // Show notification for removal
    api.warning({
      message: 'Removed from Cart',
      description: `${removedItem.title} has been removed from your Grocery.`,
      placement: 'topRight',
      duration: 1,
    });
  };

  const totalPayment = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="block products shop page">
      {contextHolder}
      <div className="container">
        <div className="titleHolder">
          <h2>Products</h2>
        </div>

        <Input.Search
          placeholder="Search Product"
          allowClear
          enterButton="Search"
          size="large"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          style={{ marginBottom: '20px', width: '50%' }}
        />
      </div>

      <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 1000 }}>
        <Badge count={cart.length}>
          <Button shape="circle" icon={<ShoppingCartOutlined />} size="large" onClick={() => setCartVisible(true)} />
        </Badge>
      </div>

      <Drawer title="Shopping Cart" placement="right" onClose={() => setCartVisible(false)} open={cartVisible}>
        <List
          dataSource={cart}
          renderItem={(item) => (
            <List.Item actions={[<Button danger onClick={() => removeFromCart(item.key)}>Remove</Button>]}> 
              <List.Item.Meta
                avatar={<img src={item.image} alt={item.title} style={{ width: 50 }} />}
                title={item.title}
                description={`Rs.${item.price.toFixed(2)}`}
              />
            </List.Item>
          )}
        />
        <div style={{ marginTop: 20, fontWeight: 'bold', fontSize: '16px' }}>
          Total Payment: Rs.{totalPayment.toFixed(2)}
        </div>
      </Drawer>

      <Row gutter={[24, 24]}>
        {filteredProducts.map((product) => (
          <Col xs={24} sm={12} lg={6} key={product.key}>
            <div className="content">
              <div className="image">
                <img src={product.image} alt={product.title} />
              </div>
              <h3>{product.title}</h3>
              <h4>{product.subtitle}</h4>
              <div className="price">Rs.{product.price.toFixed(2)}</div>
              <Button type="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default AppShop;