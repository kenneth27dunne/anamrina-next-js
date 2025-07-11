import PageComponent from "./components/pageComponent";


export default function Home() {
  return (
    <PageComponent path="/api/home-page" isHomepage={true} fetchOptions={{ next: { revalidate: 0 } }} />    
  )
}