import { Header } from "../components/Header"
import { Content } from '../components/Content'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </main>
  )
}
