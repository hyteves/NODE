import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h2 className='text-pink-600 text-[80px] bg-red'>Hyandra Teves</h2>
    </main>
  )
}
