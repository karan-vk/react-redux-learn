import React from 'react'

const WithClass=(WrappedComponent,className)=> {
    return props=>(
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    )
}

export default WithClass
