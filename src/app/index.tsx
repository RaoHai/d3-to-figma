import React from 'react';
import { useObservableDocument } from '../hooks/useObservableDocument';
import ObservableRender from './component/ObservableRender';

import './style/index.scss';

export default function App() {
    const { data } = useObservableDocument('@d3/box-plot');

    return (
        <div className="md:container mx:max-auto p-4"> 
            <p className="font-serif"> D3 to Figma</p>
            <div className="grid grid-cols-1 gap-4 p-4">
                <p className="font-sans">Code</p>
                <ObservableRender data={data} />
            </div>
        </div>
    );
}
