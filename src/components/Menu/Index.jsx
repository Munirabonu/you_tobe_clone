import React, { useState } from 'react'
import { Icon, List, Wrap, Text, Container, ListClose, Logo } from './style';
import logo from '../../assets/icons/logo.png';
import menulogo from '../../assets/icons/menu.png';
import { menu } from '../../mock/menu';
function Menu() {
    const [click, setClick] = useState(true)
    

    const closeMenu = () => {
        setClick(!click);


    }
    
    return (

        <Container>
            <Wrap menu>

                <Icon src={menulogo} />
                <Icon src={logo} />
            </Wrap>
            <Wrap>
                {menu?.map((item) => {
                    return (
                        <>
                            <List>
                                <Icon menu src={item.url} />
                                <Text>{item.text}</Text>
                            </List>
                            {/* <ListClose>
                                <Icon menu src={item.url} />
                                <Text>{item.text}</Text>
                            </ListClose> */}
                        </>
                    )
                })}
            </Wrap>
        </Container>

    )
}

export default Menu;
