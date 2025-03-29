import { Col, Row, Button } from 'antd';

// Import images (Ensure the correct file paths)
import img1 from '../../../assets/images/img1.jpg';
import img2 from '../../../assets/images/img2.jpg';
import img3 from '../../../assets/images/img3.jpg';
import img4 from '../../../assets/images/img4.jpg';

// Product data (Now using imported images)
const products = [
  {
    key: '1',
    image: img1,
    title: 'Diva Colour Guard Liquid Detergent - 1.00 l',
    subtitle: 'Laundry Detergent',
    price: '435.00'
  },
  {
    key: '2',
    image: img2,
    title: 'Colgate Toothpaste Total Advanced Health - 120.00 g',
    subtitle: 'Toothpaste',
    price: '470.00'
  },
  {
    key: '3',
    image: img3,
    title: 'Sunlight Clean & Rose Fresh Detergent Powder - 1.00 kg',
    subtitle: 'Detergent Powder',
    price: 'Rs.304.00'
  },
  {
    key: '4',
    image: img4,
    title: 'Rathna Steam Keeri Rice - 5.00 kg',
    subtitle: 'Keeri Samba',
    price: 'Rs.1300.00'
  }
];

function RecentProducts() {
  return (
    <div className="block products">
      <h2>Recent Products</h2>
      <Row gutter={[24, 24]}>
        {products.map(product => (
          <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }} key={product.key}>
            <div className="content">
              <div className="image">
                <img src={product.image} alt={product.title} />
              </div>
              <h3>{product.title}</h3>
              <h4>{product.subtitle}</h4>
              <div className="price">{product.price}</div>
              <Button type="primary">Add to TrackTidy Card</Button>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default RecentProducts;
