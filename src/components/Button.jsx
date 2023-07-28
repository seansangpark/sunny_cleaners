const Button = ({ styles }) => {
  const handleMapButtonClick = (e) => {
    // Prevent the default behavior of the button click
    e.preventDefault();

    // URL for Sunny Dry cleaners & Alterations on Google Maps
    const mapURL = 'https://goo.gl/maps/r1FhAjevehy3fmK16';

    // Check if the user is on an iPhone
    const isiPhone = /iPhone|iPod/.test(navigator.userAgent);

    // Check if the user is on an Android device
    const isAndroid = /Android/.test(navigator.userAgent);

    // Open the URL based on the client machine and browser
    if (isiPhone && navigator.standalone) {
      // If iPhone user with Google Maps app
      window.location.href = `maps://maps.google.com/maps?daddr=${mapURL}`;
    } else if (
      isAndroid &&
      window.navigator.userAgent.toLowerCase().indexOf('chrome') > -1
    ) {
      // If Android user with Google Maps app and using Chrome browser
      window.location.href = `https://maps.google.com/maps?daddr=${mapURL}`;
    } else {
      // For other devices or browsers, use the anchor tag to open in a new tab
      window.open(mapURL, '_blank');
    }
  };

  return (
    <button
      href='/'
      onClick={handleMapButtonClick}
      type='button'
      className={`py-4 px-6 bg-orange-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
    >
      Locate Us
    </button>
  );
};

export default Button;
