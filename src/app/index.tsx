import React from 'react';
import { RecoilRoot } from 'recoil';
import D3Render from './component/D3Render';
import ObservableRender from './component/ObservableRender';

import './style/index.scss';

export default function App() {
    return (
        <RecoilRoot>
            <div className="md:container mx:max-auto p-4"> 
                <p className="font-serif"> D3 to Figma</p>
                <div className="grid grid-cols-1 gap-4 p-4">
                    <D3Render />
                    <ObservableRender />
                </div>
            </div>
        </RecoilRoot>
    );
}
