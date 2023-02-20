import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { RiShareBoxFill } from 'react-icons/ri';
import NonReDetailCard from '../../components/non-re/nonReDetailCard';
import Breadcrumb from '../../components/common/breadcrumbPrimary';
import SortTabs from '../../components/common/sortTabs';
import SearchPrimary from '../../components/common/searchPrimary';
import HeaderPrimary from '../../components/common/headerPrimary';
import OutlineButton from '../../components/common/buttons/OutlineButton';
import PieChart from '../../components/charts/pieChart';
import VerticalBarChart from '../../components/charts/verticalBarChart';
import styles from './style.module.scss';

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

  // Pie Chart Here
  const pieOptions = {
    title: '',
    backgroundColor: 'transparent',
    pieHole: 0.5,
    pieSliceText: 'none',
    chartArea: { height: 180, width: 380 },
    slices: [
      {
        color: '#EE0000',
      },
      {
        color: '#F2AE00',
      },
      {
        color: '#FF8200',
      },
      {
        color: '#E25B56',
      },
      {
        color: '#707070',
      },
    ],
    pieSliceBorderColor: 'transparent',
    legend: {
      position: 'right',
      alignment: 'left',
      textStyle: {
        color: 'white',
        fontSize: 14,
      },
    },
    tooltip: {
      showColorCode: true,
    },
    fontSize: 12,
  };

  const pieData = [
    ['Item', 'Numbers'],
    ['From Web 1507', 10000],
    ['MIY 74', 6000],
    ['Instore 10', 10000],
    ['VDMP 20', 6000],
    ['From App 2', 10000],
  ];

  // bar Chart Here
  const barChartOptions = {
    title: '',
    titlePosition: 'none',
    backgroundColor: '',
    legend: 'none',
    chartArea: { height: 170 },
    hAxis: {
      title: '',
      titleTextStyle: {
        color: '#fff',
      },
      minorGridlines: {
        color: '#494949',
      },
      textStyle: { color: '#FFF' },
    },
    vAxis: {
      title: '',
      titleTextStyle: {
        color: '#fff',
      },
      gridlines: { color: '#494949' },
      minValue: 0,
      minorGridlines: {
        color: '#494949',
      },
      textStyle: { color: '#FFF' },
    },
  };
  const barData = [
    ['Year', 'Visitations', { role: 'style' }],
    ['Bajaj', 100, 'color: #EE0000'],
    ['TVS', 84, 'color: #F2AE00'],
    ['Honda', 76, 'color: #FF8200'],
    ['Hero', 52, 'color: #E25B56'],
    ['Others', 48, 'color: #707070'],
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
          <div className={styles.enquireBarChart}>
            <PieChart
              chartData={pieData}
              pieOptions={pieOptions}
              defaultValue="1616"
              defaultValueTextAlign="112px"
            />
          </div>
        </Col>
        <Col md={6}>
          <div className={styles.enquireBarChart}>
            <VerticalBarChart data={barData} options={barChartOptions} />
          </div>
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
