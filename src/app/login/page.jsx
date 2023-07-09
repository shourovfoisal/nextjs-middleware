import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div>
      <h2>This is login page.</h2>
      <Link href={`/`}>Home Page</Link>
    </div>
  )
}

export default Login