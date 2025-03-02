import React from 'react'
import PageComponent from '../components/pageComponent'

export default function Employers() {
  return (
    <PageComponent 
      path="/api/employer-page"
      isHomepage={false}
    //  fetchOptions={{ next: { revalidate: 6600 } }} 
     />
  )
}
