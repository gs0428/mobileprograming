import {addDays, differenceInDays} from 'date-fns';

type DateStatus = '진행중' | '종료' | `D-${number}`;

// 며칠 남았는지, 진행중인지, 종료인지 반환
export const dateStatus = (
  start: number | undefined,
  end: number | undefined,
): DateStatus => {
  const startDate = addDays(new Date(start! * 1000), 1);
  const endDate = addDays(new Date(end! * 1000), 1);

  const today = new Date();

  const todayStartDateGap = differenceInDays(startDate, today);
  const todayEndDateGap = differenceInDays(endDate, today);

  if (todayStartDateGap < 0 && todayEndDateGap < 0) return '종료';

  if (todayStartDateGap > 0 && todayEndDateGap > 0)
    return `D-${todayStartDateGap}`;

  return '진행중';
};
