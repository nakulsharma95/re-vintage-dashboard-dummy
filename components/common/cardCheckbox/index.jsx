/* eslint-disable @next/next/no-img-element */
import {
  Card,
  Col,
  OverlayTrigger,
  Row,
  Tooltip,
  Image,
} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { BiRupee } from 'react-icons/bi';
import ToggleSwitchCard from '../../retails/toggleSwitchCard';
import ArrowButton from '../buttons/ArrowButton';
import CustomCheckBox from '../customCheckBox';
import styles from './style.module.scss';

function BikeCardRadio({
  isEditButton,
  isCheckBoxVisible,
  imageUrl,
  isBikeTagVisible,
  bikeModal,
  bikeRc,
  bikekm,
  bikeOwner,
  bikeCc,
  bikePrice,
  bikeDealer,
  dealerAddress,
  creDetail,
  creName,
  creNumber,
  isOlxTagVisible,
  isBikeChassisVisible,
  isButtonVisible,
  isCardVisible,
  isCreContact,
  isCreDetails,
  isDealer,
  isOlxTooltipVisible,
  className,
  isViewButtonVisible,
  isStatusTagVisible,
  Status,
}) {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Last Listed on: 22 Dec
    </Tooltip>
  );

  return (
    <>
      <Card className={styles.bikeCardMain}>
        <div className={styles.ChassisImage}>
          <div className={`${styles.bikeImg} ${className}`}>
            <Image variant="top" src={imageUrl} alt="not-found" />
          </div>

          {isBikeChassisVisible && (
            <div className={`${styles.bikeChassisTag}`}>
              <span>FB29FH9219HR1</span>
            </div>
          )}

          {isStatusTagVisible && (
            <div className={`${styles.statusTag}`}>
              <span>Status:</span>
              {Status}
            </div>
          )}
        </div>

        {isCheckBoxVisible && (
          <div className={`${styles.bikeCardCheck}`}>
            <CustomCheckBox />
          </div>
        )}
        {isBikeTagVisible && (
          <div className={`${styles.bikeCardTag}`}>Self Procured</div>
        )}

        {isOlxTagVisible && (
          <div className={`${styles.bikeCardTagOlx}`}>
            Listed on
            <img src="/images/olx.png" className={styles.olxImage} alt="" />
            {isOlxTooltipVisible && (
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
                className="d-inline-flex align-items-center"
              >
                <Button className={styles.olxBtn}>2</Button>
              </OverlayTrigger>
            )}
          </div>
        )}
        <Card.Body className="px-0">
          <Card.Title className={styles.bkeName}>
            {bikeModal} <span> {bikeRc}</span>
          </Card.Title>
          <Row className={`${styles.bikeDetail} mx-0`}>
            <Col className={styles.detailTxt}>{bikekm}</Col>
            <Col className={styles.detailTxt}>{bikeOwner}</Col>
            <Col className={styles.detailTxt}>{bikeCc}</Col>
          </Row>
          <h4 className={styles.price}>
            <BiRupee size={21} />
            {bikePrice}
          </h4>
          {isDealer && (
            <>
              <p className={styles.dealer}>
                Dealer: <span>{bikeDealer}</span>
              </p>
              <span className={styles.dealerLocation}>{dealerAddress}</span>
            </>
          )}

          {isEditButton && (
            <div className={styles.bikeEditBtns}>
              <button type="button" className={styles.bikeEditBtn}>
                EDIT
              </button>
              <button type="button" className={styles.bikeSoldBtn}>
                SOLD / BOOKED
              </button>
            </div>
          )}
        </Card.Body>
      </Card>
      <Card className={styles.cardCreMain}>
        <Card.Body className="px-0">
          {isCreDetails && (
            <div className={styles.creDetails}>
              <h3>{creDetail}</h3>

              <p className={`${styles.creInfo} mb-0`}>
                Name:<span>{creName}</span>
              </p>

              <p className={`${styles.creInfo} mb-0`}>
                Number:<span>{creNumber}</span>
              </p>
            </div>
          )}

          {isCreContact && (
            <div className="d-flex">
              <p className={styles.contactCre}>Contact CRE</p>
              <p className={styles.contactCre}>Change CRE</p>
            </div>
          )}

          {isButtonVisible && (
            <div className={styles.creBtnBox}>
              <Button variant="primary w-full" className={styles.downloadBtn}>
                VIEW
              </Button>
              <ArrowButton detailLink="" title="APPROVE" buttonStyle="w-full" />
            </div>
          )}
          {isViewButtonVisible && (
            <div className={styles.creBtnBox}>
              <Button variant="primary w-full" className={styles.downloadBtn}>
                VIEW
              </Button>
            </div>
          )}
        </Card.Body>
        {isCardVisible && (
          <ToggleSwitchCard
            toggleLabal1="Inactive on OLX"
            toggleLabal2="Active on Marketplace"
          />
        )}
      </Card>
    </>
  );
}

export default BikeCardRadio;
