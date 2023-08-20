import Image from 'next/image'
import { Navbar } from "../components/Navbar"
import { Content } from '../components/Content'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <Content></Content>
      <Footer></Footer>
    </main>
  )
}
