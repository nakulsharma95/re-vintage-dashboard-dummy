import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { RiShareBoxFill } from 'react-icons/ri';
import NonReDetailCard from '../../components/non-re/nonReDetailCard';
import Breadcrumb from '../../components/common/breadcrumbPrimary';
import SortTabs from '../../components/common/sortTabs';
import EnquireBarChart from '../../components/non-re/enquireBarChart';
import EnquirePieChart from '../../components/non-re/enquirePieChart';
import SearchPrimary from '../../components/common/searchPrimary';
import HeaderPrimary from '../../components/common/headerPrimary';
import OutlineButton from '../../components/common/buttons/OutlineButton';

function NonRe() {
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
      <HeaderPrimary headerClass="mb-2" title="Non-RE">
        <OutlineButton title="Export Data" rightIcon={<RiShareBoxFill />} />
        <SearchPrimary />
      </HeaderPrimary>

      <div className="bottom-white-border mt-3 mb-3" />
      <SortTabs selectAllCheck isSortTabBox />
      <Row className="mb-4">
        <Col md={6}>
          <EnquirePieChart />
        </Col>
        <Col md={6}>
          <EnquireBarChart />
        </Col>
      </Row>
      <Row>
        {nonReData.map((item) => (
          <Col md={3}>
            <NonReDetailCard reData={item} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default NonRe;
