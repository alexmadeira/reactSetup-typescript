import React from 'react'
import Head from 'next/head'

import { Container } from '~/styles/pages/Home'
import Menu from '~/Components/Menu'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <Menu />
    </Container>
  )
}

export default Home
