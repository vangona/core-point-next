export const mergeWon = (number: number) => {
  return `${number.toLocaleString('ko-KR')}`;
};

export const convertMoneyString = (moneyNumber?: number) => {
  if (!moneyNumber) return '-';

  if (moneyNumber >= 10000) {
    const 억 = Math.floor(moneyNumber / 10000);
    const 만 = moneyNumber - 억 * 10000;
    return mergeWon(억) + '억 ' + (만 > 0 ? mergeWon(만) + '만 원' : '원');
  }

  return mergeWon(moneyNumber) + '만 원';
};
