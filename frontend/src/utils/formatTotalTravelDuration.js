const formatTotalTravelDuration = (duration) => {
  // Match the duration string against the regular expression pattern
  const match = duration.match(/PT(\d+H)?(\d+M)?/);

  // Extract hours and minutes from the matched groups
  const hours = match[1] ? match[1].replace('H', '') : '0';
  const minutes = match[2] ? match[2].replace('M', '') : '0';

  // Construct the human-readable format by combining hours and minutes
  return `${hours}h ${minutes}m`.trim();
};

export default formatTotalTravelDuration;
