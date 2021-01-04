import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa'
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom'

export const SideBarContainer = styled.aside`
    position: fixed;
    align-items: center;
    background-color: #000000;
    height: 100%;
    width: 100%;
    z-index: 999;
    display: grid;
    top: 0;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    transition: all .4s ease-in-out;

`
    
export const SideBarWrapper = styled.div`
`

export const CloseBtn = styled(FaTimes)`
    color: #fff;
`

export const Icon = styled.div`
   position: absolute;
   font-size: 40px;
   top: 16px;
   right: 16px;
   cursor: pointer;
`

export const SidebarMenu = styled.ul`
    display: grid;
    align-items: center;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 100px);

   @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 80px);
    }

`

export const SidebarLink = styled(LinkS)`
    cursor: pointer;
    font-size: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    transition: all .2s ease-in-out ;
    
    &:hover {
        color: blue;
        transition: all .2s ease-in; 
    }

    
`

export const SidebarBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SidebarRoute = styled(LinkR)`
    text-decoration: none;
    color: #000000;
    outline: none;
    font-size: 30px;
    background-color: #fff;
    border-radius: 25px;
    padding: 10px 50px ;

    &:hover {
        transition: all .2s ease-in-out;
        transform: scale(1.04)
    }

    @media screen and (max-width: 480px) {
        font-size: 26px;
        padding: 10px 40px ;
    }

   
`