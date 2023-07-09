import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div>
      <h2>This is dashboard page.</h2>
      <Link href={`/`}>Home Page</Link>
    </div>
  )
}

export default About