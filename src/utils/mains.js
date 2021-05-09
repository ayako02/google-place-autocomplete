// Prevent duplicate search keywords in histories
export const getHistories = (address, histories) => (histories.includes(address) ? histories : histories.concat(address));
