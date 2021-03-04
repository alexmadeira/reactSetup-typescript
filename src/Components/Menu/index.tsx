import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import User from '~/Components/Menu/Header/User'
import Cart from '~/Components/Menu/Header/Cart'

import { Container, Logo, MenuItem, MenuList, UserBox } from './styles'
const Menu: React.FC = () => {
  return (
    <Container>
      <Logo>
        <Image src="/img/logo.png" width={207} height={49} />
      </Logo>
      <MenuList>
        <MenuItem>
          <Link href="/">
            <a>
              <span>Novidades</span>
            </a>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/">
            <a>
              <span>Roupas</span>
            </a>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/">
            <a>
              <span>Acessórios</span>
            </a>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/">
            <a>
              <span>Últimas peças</span>
            </a>
          </Link>
        </MenuItem>
      </MenuList>
      <UserBox>
        <User />
        <Cart />
      </UserBox>
    </Container>
  )
}

export default Menu
