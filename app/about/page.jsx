import React from 'react'
import PageComponent from '../components/pageComponent'

export default function About() {
  return (
      <PageComponent path="/api/about-page" isHomepage={false} fetchOptions={{ next: { revalidate: 300 } }} />
  )
}
