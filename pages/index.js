import Head from 'next/head'
import { Inter } from '@next/font/google'
import Layout from '../components/Layout'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout>
        <p>welcome to Nextjs</p>
      </Layout>
    </>
  )
}
