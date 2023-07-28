import { pro } from '../assets';
import styles, { layout } from '../style';
import Button_2 from './Button_2';

const ProCleaner = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Visit our sister store
        <br className='sm:block hidden' /> Pro Cleaners
        <br className='sm:block hidden' /> in Pineville, NC
      </h2>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        <b>Find us at: </b>
        <br className='sm:block hidden' />
        12744 Lancaster Hwy C, Pineville, NC 28134{' '}
        <br className='sm:block hidden' />
        <br className='sm:block hidden' />
        <b>Hours: </b>
        <br className='sm:block hidden' />
        Monday: 8 AM - 6:30 PM <br className='sm:block hidden' />
        Tuesday: 8 AM - 6:30 PM
        <br className='sm:block hidden' />
        Wednesday: 8 AM - 6:30 PM
        <br className='sm:block hidden' />
        Thursday: 8 AM - 6:30 PM
        <br className='sm:block hidden' />
        Friday: 8 AM - 6:30 PM
        <br className='sm:block hidden' />
        Saturday: 9 AM - 3 PM
        <br className='sm:block hidden' />
        Sunday: Closed
      </p>

      <Button_2 styles='mt-10' />
    </div>

    <div className={layout.sectionImg}>
      <img
        src={pro}
        alt='card'
        className='w-[100%] h-[100%]'
      />
    </div>
  </section>
);

export default ProCleaner;
