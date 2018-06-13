const DARK_MODE_START_HOUR = 22;
const DARK_MODE_END_HOUR = 10;

const isDarkMode = () => {
  const time = new Date();
  const hours = time.getHours();

  return hours >= DARK_MODE_START_HOUR || hours < DARK_MODE_END_HOUR;
};

// eslint-disable-next-line import/prefer-default-export
export { isDarkMode };
