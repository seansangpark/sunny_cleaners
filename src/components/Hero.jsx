import styles from '../style';
import { clothing } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => (
  <section
    id='home'
    className={`flex md:flex-row flex-col ${styles.paddingY}`}
  >
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
          The Next
          <br className='sm:block hidden' /> {'  '}
          <span className='text-gradient'>Generation</span> {'  '}
        </h1>
      </div>
      <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
        Cleaning Service.
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        It is our mission to provide fine dry cleaning and laundry services at
        affordable prices for all.
      </p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={clothing}
        alt='billing'
        className='w-[100%] h-[100%] relative z-[5]'
      />
      <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
      <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient' />
      <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
    </div>
  </section>
);

export default Hero;
