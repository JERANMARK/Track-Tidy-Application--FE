import { Col, Row } from 'antd';
import { Carousel } from 'antd';
import '../home/grocery.css';
import AppHeader from '../commonn/header';



import image1 from '../../../assets/images/banner-img1.jpg';
import image2 from '../../../assets/images/banner-img2.jpg';
import image3 from '../../../assets/images/banner-img3.jpg';

function Hero() {
  return (
    <div className='heroBlock'>
      <Row gutter={[24, 24]}>
        {/* carousel */}
        <Col xs={24} lg={18}>
          <Carousel autoplay>
            <div>
              <img src={image1} alt="banner 1" />
            </div>
            <div>
              <img src={image2} alt="banner 2" />
            </div>
            <div>
              <img src={image3} alt="banner 3" />
            </div>
          </Carousel>
        </Col>
        {/* hero blocks */}
        <Col xs={24} lg={6}>
          <div className='heroBlocks'>
            <div className='holder'>
              <div className='icon'>
                <i className="fa-solid fa-truck"></i> 
              </div>
              <div className='content'>
                <h3>Smart Grocery System;</h3>
                <p>Manage your pantry and grocery list effortlessly with Track Tidy never forget an item again.</p>
              </div>
            </div>
            <div className='holder'>
              <div className='icon'>
                <i className="fa-solid fa-sack-dollar"></i>
              </div>
              <div className='content'>
                <h3>Seamless Inventory Tracking</h3>
                <p>Keep your essentials organized and track inventory to avoid overbuying or running out.</p>
              </div>
            </div>
            
          </div>  
        </Col>
      </Row>
    </div>
  );
}

export default Hero;