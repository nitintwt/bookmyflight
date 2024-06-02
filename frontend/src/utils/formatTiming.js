const formatTiming = (dateTime) => {
  // Extract the time part from the datetime string
  const timePart = dateTime?.split('T')[1];

  // Match the time part against the regular expression pattern
  const match = timePart?.match(/(\d+):(\d+):(\d+)/);

  // Extract hours and minutes from the matched groups
  const hours = match && match[1] ? match[1] : '0';
  const minutes = match && match[2] ? match[2] : '0';

  // Construct the human-readable format by combining hours and minutes
  return `${hours}:${minutes}`.trim();
};

export default formatTiming;
