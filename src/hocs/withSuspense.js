import React, { Suspense } from 'react';

export const withSuspense = (Component) => {
    return (props) => {
        return <Suspense fallback={<div>Fallback here</div>}>
            <Component {...props} />
        </Suspense>
    }
}