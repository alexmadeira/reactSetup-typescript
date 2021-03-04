import React from 'react'
import { HiOutlineShoppingBag } from 'react-icons/hi'

import { Container, Badge } from './styles'

const Cart: React.FC = () => {
  return (
    <Container>
      <Badge>10</Badge>
      <HiOutlineShoppingBag />
    </Container>
  )
}

export default Cart
