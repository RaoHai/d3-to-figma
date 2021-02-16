import React, { Suspense } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import { useRecoilValue } from 'recoil';
import { localChartStateQuery } from '../../state/chartState';

import './index.scss';

export function ObservableRender() {
    const { nodes = [] } = useRecoilValue(localChartStateQuery);
    return (
        <>
            {nodes.map(({ value, id }) => {
                return <CodeMirror
                    className="w-full h-auto font-mono" 
                    key={id} 
                    value={value}
                    autoScroll={false}
                    options={{
                        mode: 'javascript',
                        viewportMargin: Infinity,
                        lineWrapping: true,
                        theme: 'd3-2-figma'
                    }}
                />;
            })}
        </>
    );
}

export default props => (
    <Suspense fallback={<span> loading... </span>}>
        <ObservableRender {...props} />
    </Suspense>
);