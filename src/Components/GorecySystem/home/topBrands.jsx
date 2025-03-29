import { Col, Row } from "antd"; 
// Importing required components from Ant Design

// Product data
import img1 from "../../../assets/images/img9.jpg"; // Importing images directly
import img2 from "../../../assets/images/img10.jpg";
import img3 from "../../../assets/images/img11.jpg";
import img4 from "../../../assets/images/img12.jpg";

// Define the products array
const products = [
  {
    key: "1",
    image: img1,  // Use imported images
    title: "Baby Cheramy",
  },
  {
    key: "2",
    image: img2,
    title: "Kotmale",
  },
  {
    key: "3",
    image: img3,
    title: "Munchee",
  },
  {
    key: "4",
    image: img4,
    title: "KIST",
  },
];

function TopBrands() {
  return (
    <div className="block products">
      <h2>Shop by Brands</h2>
      <Row gutter={24}>
        {products.map((product) => (
          <Col xs={24} sm={12} lg={6} key={product.key}> {/* Added responsiveness */}
            <div className="content">
              <div className="image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="title">
                <h3 style={{ textAlign: "center" }}>{product.title}</h3>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default TopBrands;
