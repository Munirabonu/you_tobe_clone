import React from 'react'
import Content from '../components/Content/Index'
import Menu from '../components/Menu/Index'
import Navbar from '../components/Navbar/Index'
import { Container, Wrap } from './style'

function Root() {
    return (
        <Container>
            
                <Menu />
            <Wrap>
            <Navbar />
            <Content />
            </Wrap>
        </Container>
    )
}

export default Root
