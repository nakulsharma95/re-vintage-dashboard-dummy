import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import PaymentInformation from '../paymentInformation';
import ProcurementDetails from '../procurementDetails';

function MotorcycleAccordian() {
  const accordionData = [
    {
      title: 'Payment Information',
      description: <PaymentInformation/>,
    },
    {
      title: 'Evaluation Request',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      title: 'Evaluation Complete',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      title: ' Bidding',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      title: 'Procurement Details',
      description:<ProcurementDetails/> ,
    },
  ];
  return (
    <div>
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
    </div>
  );
}

export default MotorcycleAccordian;
