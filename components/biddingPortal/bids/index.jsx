import Image from 'next/image';
import { Button } from 'react-bootstrap';
import { BiRupee } from 'react-icons/bi';
import styles from './style.module.scss';

export default function Bids() {
  const TopfiveBidsData = [
    {
      imageUrl: '/images/profile.png',
    },
    {
      imageUrl: '/images/profile-2.png',
    },
    {
      imageUrl: '/images/profile-3.png',
    },
    {
      imageUrl: '/images/profile.png',
    },
    {
      imageUrl: '/images/profile-4.png',
    },
  ];
  const AllBidsData = [
    {
      imageUrl: '/images/profile.png',
    },
    {
      imageUrl: '/images/profile-3.png',
    },
    {
      imageUrl: '/images/profile-2.png',
    },
    {
      imageUrl: '/images/profile-5.png',
    },
    {
      imageUrl: '/images/profile-3.png',
    },
    {
      imageUrl: '/images/profile.png',
    },
    {
      imageUrl: '/images/profile-3.png',
    },
    {
      imageUrl: '/images/profile-2.png',
    },
    {
      imageUrl: '/images/profile-5.png',
    },
    {
      imageUrl: '/images/profile-3.png',
    },
  ];
  return (
    <div className={styles.allBidsMain}>
      <div className={styles.bidsCols}>
        <div className={styles.title}>Top 5 Bids</div>
        <div className={styles.bidsPanel}>
          {TopfiveBidsData.map((item) => (
            <div className={styles.bidsList}>
              <div className={styles.bidsLeft}>
                <div className={styles.bidsImg}>
                  <Image
                    src={item.imageUrl}
                    alt="not-found"
                    width="32"
                    height="32"
                  />
                </div>
                <div className={styles.bidsText}>
                  <div className={styles.bidsTitle}>Neel Motors</div>
                  <div className={styles.bidsSmTitle}>DD28HF29D1D</div>
                  <div className={styles.bidsSmTitle}>Lajpat Nagar</div>
                </div>
              </div>
              <div className={styles.bidsBtn}>
                <Button variant="">
                  <Image
                    src="/images/noun-bid.png"
                    width="11"
                    height="11"
                    alt="not found"
                  />
                  Allocated
                </Button>
                <Button variant="">Contact</Button>
              </div>
              <div className={styles.bidsRight}>
                <div className={styles.bidsTitle}>
                  <span>
                    <BiRupee />
                  </span>{' '}
                  1,25,000.00
                </div>
                <div className={styles.bidsSmTitle}>30 Sep, 2022</div>
                <div className={styles.bidsSmTitle}>4:40 pm</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bidsCols}>
        <div className={styles.title}>All Bids</div>
        <div className={styles.bidsPanel}>
          {AllBidsData.map((item) => (
            <div className={styles.bidsList}>
              <div className={styles.bidsLeft}>
                <div className={styles.bidsImg}>
                  <Image
                    src={item.imageUrl}
                    alt="not-found"
                    width="32"
                    height="32"
                  />
                </div>
                <div className={styles.bidsText}>
                  <div className={styles.bidsTitle}>Neel Motors</div>
                  <div className={styles.bidsSmTitle}>DD28HF29D1D</div>
                  <div className={styles.bidsSmTitle}>Lajpat Nagar</div>
                </div>
              </div>
              <div className={styles.bidsBtn}>
                <Button variant="">
                  <Image
                    src="/images/noun-bid.png"
                    width="11"
                    height="11"
                    alt="not found"
                  />
                  Allocated
                </Button>
                <Button variant="">Contact</Button>
              </div>
              <div className={styles.bidsRight}>
                <div className={styles.bidsTitle}>
                  <span>
                    <BiRupee />
                  </span>{' '}
                  1,25,000.00
                </div>
                <div className={styles.bidsSmTitle}>30 Sep, 2022</div>
                <div className={styles.bidsSmTitle}>4:40 pm</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
