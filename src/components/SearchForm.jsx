import React from 'react'
import { Form, Link } from 'react-router-dom'

const SearchForm = ({ searchTerm }) => {
    return (
        <Form method='get'>
            <div className='py-3'>
                <Link className='text-decoration-none'><h3>Movie Search</h3></Link>
            </div>
            <div className='form-input'>
                <div className="input-group mb-3">
                    <input type="text" name='search' id='search' className="form-control" placeholder="search movie" aria-label="Username" defaultValue={searchTerm} aria-describedby="basic-addon1" />
                    <button type='submit' className='btn btn-sm btn-success'>Search</button>
                </div>
            </div>
        </Form>
    )
}

export default SearchForm