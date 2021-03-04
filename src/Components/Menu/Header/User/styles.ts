import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
`
export const Icon = styled.div`
  font-size: 2.3rem;
  display: flex;
  margin-right: ${props => props.theme.spaces};
`

export const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  p {
    font-size: 1.2rem;
    color: ${props => props.theme.colors.background};
  }
`
