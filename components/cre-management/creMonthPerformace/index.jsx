import { Card } from "react-bootstrap";
import VerticalBarChart from "../../charts/verticalBarChart";
import OutlineDropdown from "~/components/common/buttons/OutlineDropdown";
import styles from "./style.module.scss";

function CreMonthPerformace(props) {
  // bar Chart Here
  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
      title: {
        display: false,
        text: "",
      },
    },
  };

  const barData = {
    labels: [
      "Hunter 350",
      "Classic 350",
      "Scram 411",
      "Meteor",
      "Interceptor",
      "Continental GT",
      "Himalayan",
      "Bullet 350",
      "Bullet 350 ES",
      "Meteor Fireball",
    ],
    datasets: [
      {
        label: "Dataset 1",
        data: [500, 420, 390, 380, 320, 280, 260, 200, 160, 140],
        backgroundColor: [
          "#F1DF67",
          "#F1DF67",
          "#F2AE00",
          "#F1DF67",
          "#F1DF67",
          "#F1DF67",
          "#F1DF67",
          "#F1DF67",
          "#F1DF67",
        ],
      },
    ],
  };
  return (
    <Card className={styles.performanceCard}>
      <Card.Body className={styles.performanceCardBody}>
        <div className={styles.custumDivide}>
          <div className={styles.performanceCardText}>
            <h3>{props.performanceTitle}</h3>
          </div>

          <OutlineDropdown
            dropdownTitle="2022"
            options={["2023", "2024", "2025"]}
          />
        </div>
        <div className={styles.wishListedGraphBox}>
          <VerticalBarChart data={barData} options={barChartOptions} />
        </div>
      </Card.Body>
    </Card>
  );
}

export default CreMonthPerformace;
