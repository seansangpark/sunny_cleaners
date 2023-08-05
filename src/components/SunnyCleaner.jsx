import { sunny } from '../assets';
import styles, { layout } from '../style';
import PhoneNumberLink from './PhoneNumberLink';

const SunnyCleaner = () => {
  const phoneNumber = '+1-704-551-6222';

  return (
    <section
      id='product'
      className={layout.sectionReverse}
    >
      <div className={layout.sectionImgReverse}>
        <img
          src={sunny}
          alt='billing'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Located in <br className='sm:block hidden' />
          Charlotte, North Carolina
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          <b>Find us at: </b>
          <br className='sm:block hidden' />
          7631 Sharon Lakes Road Ste. O Charlotte, NC 28210{' '}
          <br className='sm:block hidden' />
          <br className='sm:block hidden' />
          <b>Call us at: </b>
          <br className='sm:block hidden' />
          <PhoneNumberLink phoneNumber={phoneNumber} />
          <br className='sm:block hidden' />
          <br className='sm:block hidden' />
          <b>Hours: </b>
          <br className='sm:block hidden' />
          Monday: 6:30 AM - 6 PM <br className='sm:block hidden' />
          Tuesday: 6:30 AM - 6 PM
          <br className='sm:block hidden' />
          Wednesday: 6:30 AM - 6 PM
          <br className='sm:block hidden' />
          Thursday: 6:30 AM - 6 PM
          <br className='sm:block hidden' />
          Friday: 6:30 AM - 6 PM
          <br className='sm:block hidden' />
          Saturday: 9 AM - 3 PM
          <br className='sm:block hidden' />
          Sunday: Closed
        </p>
      </div>
    </section>
  );
};

export default SunnyCleaner;
