import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  padding: 0 calc(${props => props.theme.spaces}*2);
`

export const Logo = styled.div`
  flex: 1;
  justify-content: flex-start;
`

export const MenuList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: Center;
  flex: 2;
  margin: 0 calc(${props => props.theme.spaces}*2);
`

export const MenuItem = styled.li`
  list-style: none;
  a {
    color: ${props => props.theme.colors.menu.link};
    text-transform: uppercase;
    font-size: 1.4rem;
    text-decoration: none;
    position: relative;
    span {
      position: relative;
      z-index: 2;
    }
    &::after {
      content: '';
      background: ${props => props.theme.colors.primary};
      position: absolute;
      height: 0.3rem;
      width: 0%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      transform-origin: center;
      transition: width 250ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
    }
    &:hover {
      &::after {
        width: 120%;
      }
    }
  }
`
export const UserBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`
