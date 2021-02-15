import React, { useMemo } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'

import './index.scss';

export interface ObservableRenderProps {
    data: {
        nodes: {
            id: number;
            pinned?: boolean;
            value: string;
        }[];
    };
}

export default function ObservableRender({ data }: ObservableRenderProps) {
    const nodes = useMemo(() => data?.nodes || [], [data]);

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

