import React from 'react';
import EvaluteForm from '~/components/priceCalculator/evaluateForm';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import styles from "./style.module.scss";

export default function Evalute() {
	return (
		<>
			<Breadcrumb title="Instant Estimator Configurator" />
			<div className={styles.evaluteMain}>
				<div className="mb-2">Evaluate In Easy Steps</div>
				<EvaluteForm />
			</div>
		</>
	);
}
