import React, { createRef } from 'react';
import { useRecoilValue } from 'recoil';
import { localChartStateQuery } from '../../state/chartState';
import createSuspenseAndCatch from '../common/SuspenseAndCatch';
import { useRenderD3 } from './hooks/useRenderD3';

export function D3Render() {
    const canvasRef = createRef<HTMLDivElement>();
    const { nodes = [] } = useRecoilValue(localChartStateQuery);
    
    useRenderD3(nodes, canvasRef);

    return <div ref={canvasRef} />;
}

export default createSuspenseAndCatch(D3Render);