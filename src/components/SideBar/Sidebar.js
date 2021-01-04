import React from 'react'
import {
    SideBarContainer,
    Icon,
    CloseBtn,
    SideBarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarBtn,
    SidebarRoute
} from './SidebarElements'

const SideBar = ({toggle, isOpen}) => {
    return (
        <SideBarContainer isOpen ={isOpen} onClick = {toggle}>
           <Icon>
                <CloseBtn onClick = {toggle} />
            </Icon> 
            <SideBarWrapper>
                 <SidebarMenu>
                    <SidebarLink onClick = {toggle} to = 'about'> About</SidebarLink>
                    <SidebarLink onClick = {toggle} to = 'about'> About</SidebarLink>
                    <SidebarLink onClick = {toggle} to = 'about'> About</SidebarLink>
                    <SidebarLink onClick = {toggle} to = 'about'> About</SidebarLink>
                    <SidebarLink onClick = {toggle} to = 'about'> About</SidebarLink>
                </SidebarMenu>
                 <SidebarBtn>
                    <SidebarRoute to = '/signin'> Sign In </SidebarRoute>
                </SidebarBtn>  
            </SideBarWrapper> 
        </SideBarContainer>
    )
}

export default SideBar
