import BikeCard from 'common/bikeCard';
import Breadcrumb from 'common/breadCrumb';
import Filters from 'common/filters';
import { Container } from 'react-bootstrap';
import style from './style.module.scss';

export default function Procurement() {
  return (
    <Container fluid>
      <Breadcrumb/>
      <Filters />
      <BikeCard />
    </Container>
  );
}
