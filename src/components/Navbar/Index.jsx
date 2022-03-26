import React, { useContext, useState } from 'react'
import { Wrap, Logo, Search, Right, Icon, Button } from './style';
import search from '../../assets/icons/search.png';
import video from '../../assets/icons/video.png';
import bar from '../../assets/icons/mick.png';
import drop from '../../assets/icons/drop.png';
import avatar from '../../assets/imgs/avatar.png';
import { category } from '../../mock/category';
import { ContextApi } from '../../context';
import { content } from '../../mock/content';

function Navbar() {
    const [data,setData]=useContext(ContextApi)
    const searchVideo = (e) => {
        const newData=data.filter(item=>item.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
        setData(newData)
        if(e.target.value==''){
           setData(content) 
        }
    }
    const onKey=(e)=>{
        e.key=='Enter'&& searchVideo()
    }
    const filterCategory=(e)=>{
        if(e.toLocaleLowerCase()=='all'){
            setData(content)
        }
        else{
            
            setData(content.filter((item)=>item.category.toLocaleLowerCase()==e.toLocaleLowerCase()))
        }
        console.log(e.toLocaleLowerCase());
    }
    return (
        <>
            <Wrap>
                <Search>
                    <Search.Input
                        type="text"
                        placeholder="Search video"
                        onChange={searchVideo}
                        onKeyDown={onKey}
                        
                    />
                    <Icon src={search} onClick={searchVideo} />
                </Search>
                <Right>
                    <Icon src={drop} />
                    <Icon src={bar} />
                    <Icon src={video} />
                    <Icon src={avatar} />
                </Right>
            </Wrap>
            <Wrap btn>
                {category.map((item) => {
                    return (
                        <Button type='submit' value={item.name} onClick={()=>filterCategory(item.name)} />
                    )
                })}
            </Wrap>
        </>
    )
}

export default Navbar
