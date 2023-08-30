import React from 'react'
import { Navigate } from 'react-router-dom'

const RoutesPrive = ({ children, status = []}) => {

    

    const user = JSON.parse(localStorage.getItem("users")) || null

    if (!user) return <Navigate to="/" />
    if(status.length > 0 && ! status.includes(user.status)) return <Navigate to="/" />
  return<>
    {children}
  </>
}

export default RoutesPrive