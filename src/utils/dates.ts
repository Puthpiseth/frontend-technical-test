export const convertTimeStampToDate = (timestamp: number) => {
  const dateFormat = new Intl.DateTimeFormat('en-US', {
    timeZone: 'UTC',
    dateStyle: 'medium',
  });

  return dateFormat.format(new Date(timestamp * 1e3));
}; // ouput: Month day, year

export const convertTimeStampToDateTime = (timestamp: number) => {
  const dateFormat = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

  return dateFormat.format(new Date(timestamp * 1e3));
}; // output: Day, Number Month Year at HH:MM:SS
