import styled from 'styled-components';

export const Button = styled.button`
    background: ${({lightbg}) => (lightbg ? '#fff' : '#000000')};
    white-space: nowrap;
    color: ${({wordcl}) => (wordcl ? '#000000' : '#fff')};
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    


`  