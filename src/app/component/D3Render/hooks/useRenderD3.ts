import { useLayoutEffect, useMemo } from 'react';
const System = require('systemjs');
import { ChartState } from '../../../state/chartState';

export function useRenderD3(nodes: ChartState['nodes'], containerRef: React.RefObject<HTMLDivElement>) {
    // first, filter invalid nodes
    const validNodes = useMemo(() => nodes.filter(({ value }) => !value.startsWith('md`')), [nodes]);
    useLayoutEffect(() => {
       console.log('--> System', System, validNodes);
       const latestNode = validNodes[validNodes.length - 1];
       eval(latestNode.value);
       
    }, [validNodes, containerRef.current]);
}
