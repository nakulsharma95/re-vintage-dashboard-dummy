import Breadcrumb from '../../components/common/breadcrumbPrimary';
import Filters from '../../components/common/filters';

export default function PriceCalculator() {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <Breadcrumb title="Instant Estimator Configurator" />
      </div>
      <Filters
        title="Instant Estimator Configurator"
        subTitle="Here you will find the Contact details of CRE for active Motorcycle and General Info"
      />
      <div className="mb-3">18 item found</div>
    </div>
  );
}
