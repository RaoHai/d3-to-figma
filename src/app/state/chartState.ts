import { atom, selector } from 'recoil';
import useSWR from 'swr';
import { AtomKeysEnum } from './enums';

export interface ChartState {
    nodes: {
        id: number;
        pinned?: boolean;
        value: string;
    }[];
}

export const localChartState = atom({
    key: `${AtomKeysEnum.CHART_STATE}_local`,
    default: '@d3/box-plot',
});

export const chartState = atom<ChartState>({
    key: AtomKeysEnum.CHART_STATE,
    default: {
        nodes: [],
    },
});

export const localChartStateQuery = selector<ChartState>({
    key: AtomKeysEnum.CHART_STATE_QUERY,
    get: ({ get }) => {
        const document = get(localChartState);
        return require(`../../../assets/${document}.json`);
    },
});
