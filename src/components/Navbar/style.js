import styled from 'styled-components';

export const Wrap = styled.div` 
    width: 100%;
    padding: 15px 20px;
    background-color: #212121;
    color: white;
    display: flex;
    align-items: center;
    justify-content:${({btn})=>btn ? "center":"space-between"};
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`
export const Icon = styled.img`
    width: auto;
    height: 100%;
    cursor: pointer;
`
export const Search = styled.div` 
    display: flex;
    height: 30px;
`
Search.Input = styled.input`
    width: 400px;
    height: 30px;
    background-color: black;
    border: none;
    color:  rgba(255, 255, 255, 0.5);
    font-size:16px;
    outline: none;
    border-radius: 5px  0px 0px 5px;
    padding-left: 15px;
    
`
export const Right = styled.div`
    display: flex;
    height: 30px;
    column-gap: 20px;
`
export const Button = styled.input`
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 30px;
    color: white;
    padding: 8px 20px;
    margin-left: 20px;
    &:hover{
        background-color: white;
        color: black;
    }
`