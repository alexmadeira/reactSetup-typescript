import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.3rem;
  margin-left: calc(${props => props.theme.spaces}*2);
  cursor: pointer;
`

export const Badge = styled.em`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  font-size: 1rem;
  font-weight: 300;
  font-style: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 1.8rem;
  height: 1.8rem;
  position: absolute;
  right: -1rem;
  top: 1rem;
`
