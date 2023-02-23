import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { RiShareBoxFill } from 'react-icons/ri';
import NonReDetailCard from '../../components/non-re/nonReDetailCard';
import Breadcrumb from '../../components/common/breadcrumbPrimary';
import SortTabs from '../../components/common/sortTabs';
import SearchPrimary from '../../components/common/searchPrimary';
import HeaderPrimary from '../../components/common/headerPrimary';
import OutlineButton from '../../components/common/buttons/OutlineButton';
import VerticalBarChart from '../../components/charts/verticalBarChart';
import styles from './style.module.scss';
import DoughnutChart from '../../components/charts/doughnutChart';

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

  // const textCenterValue = {
  //   beforeDraw(chart) {
  //     const { width } = chart.chart;
  //     const { height } = chart.chart;
  //     const { ctx } = chart.chart;
  //     ctx.restore();
  //     const fontSize = (height / 160).toFixed(2);
  //     ctx.font = `${fontSize}em sans-serif`;
  //     ctx.textBaseline = 'top';
  //     const text = 'Foo-basasasasasassasasar';
  //     const textX = Math.round((width - ctx.measureText(text).width) / 2);
  //     const textY = height / 2;
  //     ctx.fillText(text, textX, textY);
  //     ctx.save();
  //   },
  // };

  const optionsDoughnut = {
    responsive: true,
    maintainAspectRatio: false,
    centerText: {
      display: true,
      text: `90%sasassassa`,
    },
    plugins: {
      legend: {
        display: true,
        position: 'right',
        labels: {
          fontSize: 20,
          color: 'white',
        },
      },
    },
  };

  const doughnutChartData = {
    labels: [
      'Upcoming Bids',
      'Active Bids',
      'Closed Bids',
      'No Bids',
      'Seller Portal',
    ],
    datasets: [
      {
        label: 'My First Dataset',
        data: [100, 300, 100, 80, 50],
        backgroundColor: [
          '#F1DF67',
          '#D2635B',
          '#403E3E',
          '#DA291C',
          '#F28823',
        ],
        borderColor: ['#686868'],
        hoverOffset: 4,
        borderWidth: 0.2,
      },
    ],
  };

  // bar Chart Here
  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        display: false,
      },
      title: {
        display: false,
        text: '',
      },
    },
  };

  const labels = ['Bajaj', 'TVS', 'Honda', 'Hero', 'Others'];

  const barData = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [500, 420, 390, 380, 320],
        backgroundColor: [
          '#EE0000',
          '#F2AE00',
          '#FF8200',
          '#E25B56',
          '#403E3E',
        ],
      },
    ],
  };
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
          <div className={styles.enquireDoughnutChart}>
            <DoughnutChart options={optionsDoughnut} data={doughnutChartData} />
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
