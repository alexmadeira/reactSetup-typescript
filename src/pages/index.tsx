import React from 'react'
import Head from 'next/head'

import Logo from '../assets/1.svg'
import { Container, LogoBox } from '~/styles/pages/Home'
import { useFetch } from '~/hooks/useFetch'

interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

const Home: React.FC = () => {
  const { data } = useFetch<Todo[]>('todos')
  if (!data) {
    return null
  }

  console.log(data[0].id)

  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <LogoBox>
        <Logo />
      </LogoBox>
      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure made by Alex Madeira.</p>
    </Container>
  )
}

export default Home
