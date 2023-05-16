import type { DataSet } from '../AreaChart';

type DataWithRender = DataSet & {
  render?: {
    [index: string]: number | null;
    uiScoreBackground: number | null;
  };
};

export function getUniqueKeys(data: DataWithRender[]) {
  return data.reduce((keys: string[], data) => {
    if (data.render) {
      const keysStartingWithFakeScore = Object.keys(data.render).filter((key) =>
        key.startsWith('fakeScore')
      );

      keysStartingWithFakeScore.map((key) => {
        if (!keys.includes(key)) {
          keys.push(key);
        }
        return null;
      });
    }

    return keys;
  }, []);
}

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

interface Options {
  options: {
    [index: string]: null | number;
    uiScoreBackground: null | number;
  };
}

export function getFakeScore(
  data: DataWithRender[],
  sequenceRanges: number[][]
) {
  sequenceRanges.map((range, index) => {
    const [first, last] = range;
    const fakeScore = `fakeScore${index}`;

    if (first === 0) {
      data[first].render = {
        ...data[first].render,
        [fakeScore]: data[last + 1].score,
        uiScoreBackground: data[last + 1].score,
      };
    }

    if (last === data.length - 1) {
      data[last].render = {
        ...data[last].render,
        [fakeScore]: data[first - 1].score,
        uiScoreBackground: data[first - 1].score,
      };
    }

    data.map((item: DataWithRender, index) => {
      if (item.render === undefined) {
        item.render = {
          uiScoreBackground: item.score,
        };
      }

      if (index === first - 1) {
        item.render = {
          ...item.render,
          [fakeScore]: item.score,
          uiScoreBackground: item.score,
        };
      }

      if (index === last + 1) {
        item.render = {
          ...item.render,
          [fakeScore]: item.score,
          uiScoreBackground: item.score,
        };
      }

      return null;
    });

    return null;
  });

  return data;
}
