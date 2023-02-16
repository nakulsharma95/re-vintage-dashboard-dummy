import React from 'react';
import { Row, Col } from 'react-bootstrap';
import NonReDetailCard from '../../components/non-re/nonReDetailCard';
import Breadcrumb from '../../components/common/breadcrumbPrimary';
import Filters from '../../components/common/filters';
import SortTabs from '../../components/common/sortTabs';
import EnquireBarChart from '../../components/non-re/enquireBarChart';
import EnquirePieChart from '../../components/non-re/enquirePieChart';

const NonRe = () => {
  const nonReData = [
    {
      bikeName: '2020 Pulsar NS',
    },
    {
      bikeName: '2015 Avenger',
    },
    {
      bikeName: '2021 TVS Ronin',
    },
    {
      bikeName: '2021 TVS Ronin',
    },
  ];
  return (
    <>
      <Breadcrumb title="Retail" addmoretitle="Non-RE" />
      <Filters title="Non-RE" filterInput export />
      <div className="bottom-white-border mt-3 mb-3" />
      <SortTabs selectAllCheck isSortTabBox />
	  <Row className='mb-4'>
		<Col md={6}>
			<EnquirePieChart />
		</Col>
		<Col md={6}>
			<EnquireBarChart />
		</Col> 
	  </Row>
      <Row>
        {nonReData.map((item, index) => (
          <Col md={3} key={index}>
            <NonReDetailCard reData={item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default NonRe;
