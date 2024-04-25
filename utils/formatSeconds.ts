export function formatSeconds (seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const hoursDisplay = hours > 0 ? (hours < 10 ? '0' + hours : hours) + ':' : '';
  const minutesDisplay = (hours > 0 || minutes > 0 ? (minutes < 10 ? '0' + minutes : minutes) : '00') + ':';
  const secondsDisplay = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;

  return hoursDisplay + minutesDisplay + secondsDisplay;
}
