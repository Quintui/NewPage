import styled from 'styled-components';

export const SideBarContainer = styled.aside`
    position: fixed;
    align-items: center;
    height: 100%;
    width: 100%;
    z-index: 999;
    display: grid;
    top: 0;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')}

`