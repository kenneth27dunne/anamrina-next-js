import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <main className="min-h-[50vh] !my-0 flex flex-col justify-center items-center">
       <div className="text-center p-0 m-0">
          <h2 className="text-3xl">Oops! There was a problem</h2>
          <p>We could not find the page you were looking for.</p>
          <p>Go back to the <Link href="/">Home Page</Link> </p>
       </div>
    </main>
  )
}
