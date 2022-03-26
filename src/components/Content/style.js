import styled from "styled-components"

export const Wrap = styled.div`
    min-height:100vh;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 20px;
    background-color: rgb(24,24,24);
`
export const Card = styled.div`
    transition: all .5s;
    &:hover{
        transform: scale(1.2,1.2);
        transition: all .5s;
    }
`
Card.video = styled.video`
    width: 100%;
    height: 200px;
`
export const List = styled.div`
    display: flex;
    padding: 10px 0;
    gap: 20px;
`
List.avatar = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
`
// List.title=styled.p``
List.text = styled.div`
    padding: 5px 0;
    line-height: 24px;
    height: 30px;
    overflow:hidden;
    color: ${({ title }) => title ? 'white' : 'rgba(255, 255, 255, 0.6)'};
    font-size: ${({ title }) => title ? '16px' : "14px"};
    display: flex;
    justify-content: space-between;
`