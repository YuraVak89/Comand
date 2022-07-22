import React from 'react'
import { Link } from 'react-router-dom'
const Page404 = () => {
  return (
    <div>
      <h2>Sorry Page404</h2>
      <Link to="/burger"><h2>Click to home page</h2></Link>
    </div>
  )
}

export default Page404