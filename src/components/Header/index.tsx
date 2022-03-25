import React from 'react'
import logoImg from "../../assets/logo.svg"
import { Container, Content } from './styles'

export function Header() {
  return (
    <Container>
      <Content>
      <img src={logoImg} alt='dt money'/>
      <button> Nova trasação</button>
      </Content>  
    </Container>
  )
}

