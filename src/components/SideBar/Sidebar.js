import React from 'react'

const SideBar = () => {
    return (
        <SideBarContainer>
            <Icon>
                <CloseBtn/>
            </Icon>
            <SideBarWrapper>
                <SidebarMenu>
                    <SidebarLink  to = 'about'> About</SidebarLink>
                    <SidebarLink to = 'about'> About</SidebarLink>
                    <SidebarLink to = 'about'> About</SidebarLink>
                    <SidebarLink to = 'about'> About</SidebarLink>
                    <SidebarLink to = 'about'> About</SidebarLink>
                </SidebarMenu>
                <SidebarBtn>
                    <SidebarRoute to = '/signin'> Sign In </SidebarRoute>
                </SidebarBtn>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar
