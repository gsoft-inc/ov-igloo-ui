import { DataSet } from '../AreaChart';

export function getFirstNullIndex(data: DataSet[], targetProperty: string) {
  return data.findIndex(
    (item) => item[targetProperty as keyof DataSet] === null
  );
}

export function getLastNullIndex(data: DataSet[], targetProperty: string) {
  return (
    data.length - 1 - getFirstNullIndex([...data].reverse(), targetProperty)
  );
}

export function getFirstNotNullIndex(data: DataSet[], targetProperty: string) {
  return data.findIndex(
    (item) => item[targetProperty as keyof DataSet] !== null
  );
}

export function getFirstScore(data: DataSet[], targetProperty: string) {
  const indexOfNotNull = getFirstNotNullIndex(data, targetProperty);
  return data[indexOfNotNull].score as number;
}

export function getIndexOfNotNull(data: DataSet[], targetProperty: string) {
  const firstNullIndex = getFirstNullIndex(data, targetProperty);
  const lastNullIndex = getLastNullIndex(data, targetProperty);

  let firstScore;
  if (firstNullIndex === 0) {
    firstScore = getFirstScore(data, targetProperty);
  }

  const indexBeforeFirstNull =
    firstNullIndex > 0 ? firstNullIndex - 1 : firstNullIndex;
  const indexAfterLastNull =
    data.length > lastNullIndex ? lastNullIndex + 1 : data.length;

  return {
    indexBeforeFirstNull,
    indexAfterLastNull,
    firstNullIndex,
    firstScore,
  };
}
