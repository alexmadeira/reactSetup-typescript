import React from 'react'
import { FiUser } from 'react-icons/fi'
import { Container, Icon, UserBox } from './styles'

const User: React.FC = () => {
  return (
    <Container>
      <Icon>
        <FiUser></FiUser>
      </Icon>
      <UserBox>
        <p>Ola, Nome</p>
        <p>Contas e Listas</p>
      </UserBox>
    </Container>
  )
}

export default User
