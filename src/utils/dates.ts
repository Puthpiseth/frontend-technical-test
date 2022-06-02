export const convertTimeStampToDate = (timestamp: number) => {
  const dateFormat = new Intl.DateTimeFormat('en-US', {
    timeZone: 'UTC',
    dateStyle: 'medium',
  });

  return dateFormat.format(new Date(timestamp * 1e3));
}; // Month day, year

export const convertTimeStampToDateTime = (timestamp: number) => {
  const dateFormat = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
    timeStyle: 'long',
  });

  return dateFormat.format(new Date(timestamp * 1e3));
}; // Day, Number Month Year at HH:MM:SS
