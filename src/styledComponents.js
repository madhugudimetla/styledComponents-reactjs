import styled from 'styled-components'
export const Heading=styled.h1`
font-size:45px;
font-weight:bold;
text-align:center;
`
export const CustomButton=styled.button`
color:${props=>(props.outline?'red':'white')};
font-size:30px;
background-color:${props=>(props.outline?'white':'red')};
border-radius:10px;
margin:10px;

`
export const Container=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:40px;
width:200px;

`