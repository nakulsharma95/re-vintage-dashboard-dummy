import React from 'react';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import DemandNav from '../../../components/demand/demandNav';
import DemandPrimaryCard from '../../../components/demand/demandPrimaryCard';
import { Col, Row } from 'react-bootstrap';
import HeaderPrimary from '../../../components/common/headerPrimary';
import OutlineDropdown from '../../../components/common/buttons/OutlineDropdown';

function CustomerRequirements() {

  const cardList = [
    {
      imgUrl: '/images/bikeImage3.png',
      title: 'Classic J',
      smtitle: '250 Leads',
    },
    {
      imgUrl: '/images/bikeImage2.png',
      title: 'Bullet',
      smtitle: '200 Leads',
    },
    {
      imgUrl: '/images/bikeImage4.png',
      title: 'Bullet X',
      smtitle: '315 Leads',
    },
    {
      imgUrl: '/images/bikeImage.png',
      title: 'Himalayan',
      smtitle: '65 Leads',
    },
  ];

  const favDropdownList = [
    {
      dropdownTitle: 'This week',
      dropdownMenuTitle: 'Week 1',
    },
    {
      dropdownTitle: 'Delhi',
      dropdownMenuTitle: 'Mumbai',
    },
  ];

  
  return (
    <>
      <Breadcrumb title="Demand" />

      <DemandNav />

	  <HeaderPrimary
        headerClass="mb-4 mt-0"
        title="Requirement Request"
        subTitle="Please find all the necessary details"
      >
		
		<div className="d-flex align-items-center">
			<span className="sortText">Sort By:</span>
			{favDropdownList.map((item) => (
				<OutlineDropdown
					dropdownTitle={item.dropdownTitle}
					dropdownMenuTitle={item.dropdownMenuTitle}
				/>
			))}
		</div>
      </HeaderPrimary>

      <Row className="mt-3 mb-5">
        {cardList.map((item) => (
          <Col md={3}>
            <DemandPrimaryCard
              imgUrl={item.imgUrl}
              title={item.title}
              smtitle={item.smtitle}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default CustomerRequirements;
