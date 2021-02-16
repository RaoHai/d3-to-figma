import React from 'react';
import { RecoilRoot } from 'recoil';
import ObservableRender from './component/ObservableRender';

import './style/index.scss';

export default function App() {
    return (
        <RecoilRoot>
            <div className="md:container mx:max-auto p-4"> 
                <p className="font-serif"> D3 to Figma</p>
                <div className="grid grid-cols-1 gap-4 p-4">
                    <p className="font-sans">Code</p>
                    <ObservableRender />
                </div>
            </div>
        </RecoilRoot>
    );
}
