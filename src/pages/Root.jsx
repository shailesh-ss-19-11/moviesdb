import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useNavigation } from 'react-router-dom'
import Loader from '../components/Loader';
const Root = () => {
    const navigation = useNavigation();

    return (
        <div className='container'>
            {navigation.state === 'loading' ? <Loader /> : <Outlet />}
        </div>
    )
}

export default Root