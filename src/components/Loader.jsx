import React from 'react'
import { Placeholder } from 'react-bootstrap'
import { Bars } from 'react-loader-spinner'

const Loader = () => {
    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{
                height: '100vh',
            }}
        >
            <Bars
                height="80"
                width="80"
                colors={[]}
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}

export default Loader