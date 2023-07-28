import styles from '../style';
import Button from './Button';

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className='flex-1 flex flex-col'>
      <h2 className={styles.heading2}>Come visit us now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team are laundry and dry cleaning experts and ensure the highest
        standards of hygiene for your clothing, bedding, and household.
      </p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-9 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
