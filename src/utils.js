export const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000);

  // Format day with suffix
  const day = date.getDate();
  const daySuffix = getDaySuffix(day);
  const formattedDay = `${day}${daySuffix}`;

  // Format month
  const month = date.toLocaleString('default', { month: 'long' });

  // Format year
  const year = date.getFullYear();

  return `${formattedDay} ${month} ${year}`;
};

const getDaySuffix = (day) => {
  if (day >= 11 && day <= 13) {
    return 'th';
  }

  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

// Function to truncate text if it exceeds a specified length
export const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};
