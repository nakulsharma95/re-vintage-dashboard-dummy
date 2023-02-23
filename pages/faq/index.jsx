import { Row, Tab, Tabs } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import { FaSearch } from 'react-icons/fa';
import HeaderPrimary from '../../components/common/headerPrimary';
import style from './style.module.scss';

export default function FAQpage() {
  const accordionData = [
    {
      title: "The standard Lorem Ipsum passage, used since the 1500s",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      title: "Section 1.10.33 of Finibus Bonorum written by Cicero in 45 BC",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      title: "  Section 1.10.33 of Finibus Bonorum written by Cicero in 45 BC",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      title: "The standard Lorem Ipsum passage, used since the 1500s",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
  ];
  return (
    <div className={style.homepageStyle}>
      <HeaderPrimary
        headerClass="mb-3"
        title="Frequently Asked Questions"
        subTitle="Here you will see the most latest update"
      />

      <div className={style.faqSearch}>
        <Form.Control type="email" placeholder="Search FAQs" />
        <FaSearch className={style.inputSearch} size={15} />
      </div>

      <div className="custom-tab-style">
        <Tabs
          className="mb-3"
          defaultActiveKey="title3"
          id="uncontrolled-tab-example"
        >
          <Tab eventKey="title1" title="Order" />
          <Tab eventKey="title2" title="Bill & payment" />
          <Tab eventKey="title3" title="Account">
            <div className="primary-accordion-style pt-3">
              <Accordion>
                {accordionData.map((item, index) => (
                  <Accordion.Item eventKey={index}>
                    <Accordion.Header>{item.title}</Accordion.Header>
                    <Accordion.Body>{item.description}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </Tab>
          <Tab eventKey="title4" title="Shipping" />
          <Tab eventKey="title5" title="Retrun and refund" />
          <Tab eventKey="title6" title="Promations" />
          <Tab eventKey="title7" title="Others" />
        </Tabs>
      </div>
    </div>
  );
}
