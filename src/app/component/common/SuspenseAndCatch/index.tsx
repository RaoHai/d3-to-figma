import React, { Suspense } from 'react';

export class SuspenseAndCatch extends React.PureComponent {
    state = { error: null, hasError: false };

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, error };
    }
    
    render() {
        const { state: { hasError }, props: { children } } = this;
        if (hasError) {
            return <h2>Oops!, Something went wrong...</h2>
        }
        return (
            <Suspense fallback={<span> loading... </span>}>
                {children}
            </Suspense>
        );
    }
}

export default function createSuspenseAndCatch<P>(component: React.FunctionComponent<P>): React.FunctionComponent<P> {
   return (props: P) => (
       <SuspenseAndCatch>
           {React.createElement(component, { ...props })}
       </SuspenseAndCatch>
   );
}