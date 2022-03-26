import React, { useContext, useState } from 'react'
import { ContextApi } from '../../context'
import { Card, List, Wrap } from './style'

function Content() {
    const [data,setData]=useContext(ContextApi)
    console.log(data.name,'content bolimisan');
    return (
        <>
            <Wrap>
                {data.map((item)=>{
                    return(
                        <>
                        
                <Card>
                    <Card.video src={item.url} autoplay controls loop></Card.video>
                    <List>
                        <List.avatar src={item.avatar} />
                        <div>
                           <List.text title>{item.name}</List.text>
                           <List.text>{item.title}</List.text>
                           <List.text>{item.text} <span> {item.liked} liked</span></List.text> 
                            
                        </div>
                        
                    </List>
                </Card>
                        </>
                    )
                })}
            </Wrap>
        </>
    )
}

export default Content
