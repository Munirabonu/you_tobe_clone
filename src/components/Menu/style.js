import styled from "styled-components"

export const Container = styled.div` 

`

// generic icon
export const Icon = styled.img`
    width: auto;
    height:${({ menu }) => menu ? '25px' : '30px'};
    cursor: pointer;
    padding-left:${({ menu }) => menu ? '0px' : '30px'};
`
export const Wrap = styled.div`
    width:100%;
    padding: 20px 0;
    min-height:${({menu})=>menu?'auto':'100vh'};
    height: ${({menu})=>menu?'0':'0%'};
    background-color: #212121;
    color: white;
`

export const List = styled.div`
    display: flex;
    gap: 30px;
    padding: 20px 30px;
    transition: .3s all;
    &:hover{
        background-color: rgb(77,77,77);
    }
`
export const ListClose = styled.div`
    text-align: center;
`
export const Text = styled.p`
    font-size: 20px;
`