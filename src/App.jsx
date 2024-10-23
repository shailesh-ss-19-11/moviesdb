import React from 'react'
import { apikey } from './constant'
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom'
import Home, { loader } from './pages/Home'
import MovieDetails, { loader as movieDetailsLoader } from './pages/MovieDetails'
import Root from './pages/Root'
import Error from './pages/Error'
const App = () => {
  console.log(apikey)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />} errorElement={<Error/>}>
        <Route index element={<Home />}  loader={loader}/>
        <Route path='/movie/:id' element={<MovieDetails />} loader={movieDetailsLoader}/>
        <Route path='*' element={<Error />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App