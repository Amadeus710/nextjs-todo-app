import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../components/Layout'

const Home: NextPage = () => {
  return <Layout title="Home">{'hello'}</Layout>
}

export default Home
