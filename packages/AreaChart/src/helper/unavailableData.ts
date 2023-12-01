import type { DataSet } from "../AreaChart";

type DataWithRender = DataSet & {
    render?: {
        [index: string]: number | null;
        uiScoreBackground: number | null;
    };
};

export function getUniqueKeys(data: DataWithRender[]): string[] {
    return data.reduce((keys: string[], data) => {
        if (data.render) {
            const keysStartingWithFakeScore = Object.keys(data.render).filter(key =>
                key.startsWith("fakeScore")
            );

            keysStartingWithFakeScore.map(key => {
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

export function getFakeScore(
    data: DataWithRender[],
    sequenceRanges: number[][]
): DataWithRender[] {
    sequenceRanges.map((range, index) => {
        const [first, last] = range;
        const fakeScore = `fakeScore${index}`;
        const endIsNull = data.length - 1 === last;
        const startIsNull = first === 0;

        if (endIsNull && startIsNull) {
            data[first].render = {
                ...data[first].render,
                [fakeScore]: 0,
                uiScoreBackground: 0
            };

            data[last].render = {
                ...data[last].render,
                [fakeScore]: 0,
                uiScoreBackground: 0
            };

            return null;
        }
        
        if (startIsNull) {
            data[first].render = {
                ...data[first].render,
                [fakeScore]: data[last + 1].score,
                uiScoreBackground: data[last + 1].score
            };
        }

        if (endIsNull) {
            data[last].render = {
                ...data[last].render,
                [fakeScore]: data[first - 1].score,
                uiScoreBackground: data[first - 1].score
            };
        }

        data.map((item: DataWithRender, i) => {
            if (item.render === undefined) {
                item.render = {
                    uiScoreBackground: item.score
                };
            }

            if (i === first - 1 || i === last + 1) {
                item.render = {
                    ...item.render,
                    [fakeScore]: item.score,
                    uiScoreBackground: item.score
                };
            }

            return null;
        });

        return null;
    });

    return data;
}
