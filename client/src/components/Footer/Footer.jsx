import gfamLogo from '../../assets/gfam-logo.png';

const Footer = () => (
  <footer className='w-full' aria-labelledby='footer-heading'>
    {/* <h3 id='footer-heading' className='sr-only'>
      Footer
    </h3> */}
    <div className='mx-auto py-2 px-4'>
      <div className='flex items-center justify-center text-base text-gray-300'>
        Brought to you by
        <a
          href='https://gfam.live'
          target='_blank'
          rel='noreferrer noopener'
          className='pl-3 text-gray-400 hover:text-gray-500'
        >
          <span className='sr-only'>gfam.live</span>
          <img className='block h-8 w-auto' src={gfamLogo} alt='gfam.live' />
        </a>
      </div>
      <div className='mt-1'>
        <p className='text-center text-xs text-gray-400'>
          &copy; 2022 GFAM All rights reserved
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
