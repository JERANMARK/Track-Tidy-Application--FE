import { Col, Row } from 'antd';

import bgImage1 from '../../../assets/images/ad-img1.png';
import bgImage2 from '../../../assets/images/ad-img1.png';

function Information() {
  return (
    <div className="block informationBlock">
      <Row gutter={[24, 24]}>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <div className='holder' style={{
              backgroundImage: `url(${bgImage1})`, 
              backgroundRepeat: 'no-repeat'
            }}
          >
           <centre> <h3>Smart Grocery System from</h3></centre>
                   <div className='price'>TRACK TIDY</div>
          </div>
        </Col>
        
      </Row>
    </div>
  );
}

export default Information;