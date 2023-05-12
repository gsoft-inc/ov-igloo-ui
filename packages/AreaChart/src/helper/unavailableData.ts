import type { DataSet, DataSetWithNull } from '../AreaChart';

export function getNullSequenceRanges(data: DataSet[]): number[][] {
  const sequenceRanges = [];
  let start = null;

  for (let i = 0; i < data.length; i += 1) {
    if (data[i].score === null && start === null) {
      start = i;
    } else if (data[i].score !== null && start !== null) {
      sequenceRanges.push([start, i - 1]);
      start = null;
    }
  }

  if (start !== null) {
    sequenceRanges.push([start, data.length - 1]);
  }

  return sequenceRanges;
}

export function getFakeScore(
  data: DataSetWithNull[],
  sequenceRanges: number[][]
): DataSetWithNull[] {
  sequenceRanges.map((range) => {
    const [first, last] = range;

    if (first === 0) {
      data[first].fakeScore = data[last + 1].score;
    }

    if (last === data.length - 1) {
      data[last].fakeScore = data[first - 1].score;
    }

    data.map((item: DataSetWithNull, index) => {
      if (index === first - 1) {
        item.fakeScore = item.score;
      }

      if (index === last + 1) {
        item.fakeScore = item.score;
      }

      return null;
    });

    return null;
  });

  return data;
}
