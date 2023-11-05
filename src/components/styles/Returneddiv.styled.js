import styled from "styled-components";

export const DateBox = styled.div`
width: 60px;
height: 20px;
padding: 4px;
text-align: center;
color: #80848A;
font-size: 14px;
border-radius: 8px;
background: rgba(160, 172, 231, 0.10);
display:none;
`

export const Box = styled.div`
width: 510px;
height: 30px;
display: flex;
padding: 12px 20px 12px 14px;
border-radius: 8px;
background: #FFF;
display: flex;
justify-content: space-between;
&: hover ${DateBox}{
  display: block;
}
`

export const Checkbox = styled.input`
-webkit-appearance: none;
height: 20px;
width: 20px;
background-color: #EAEBED;
border-radius: 7px;
cursor: pointer;
&:checked{
    background-color: #434851;
}
&:checked::before {
    content: '✔';
    color: white; 
    font-size: 16px; 
    margin: 0 0 2px 4px;
  }
`
export const TodoText = styled.h4`
color: #000;
font-family: Inter;
font-size: 16px;
font-weight: 400;
margin-left: 5px;
`

export const Leftside = styled.div`
display: flex;
align-items: center;
`

export const Rightside = styled.div`
display: flex;
align-items:center;
gap: 15px;
`

export const DeleteBtn = styled.div`
width: 11px;
height: 11px;
border-radius: 4px;
border: 2px solid ${(props) => props.color};
background: transparent;
cursor: pointer;
`