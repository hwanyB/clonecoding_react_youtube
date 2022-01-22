import React, { useState } from 'react';
import styled from '@emotion/styled/macro';

import Header from './Header';
import Menu from './Menu';

const Container = styled.div`
    width: 100%;
    display: flex;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: overlay;
    flex-direction: column;
`;
const LayoutWrapper = styled.div`
    display: flex;
    flex: 1;
`;
const Contents = styled.div`
    position: relative;
    font-size: 30px;
    background-color: #f8f8f8;
    z-index: -99;
    padding: 70px 220px;
    box-sizing: border-box;
    width: 100%;
`;



const Layout = ({children}) => {
    const [menuIsOpenned, setMenuIsOpenned] = useState(true);
    const handleMenuClick = ()=>{
        setMenuIsOpenned(prev => !prev);
    }
    return (
        <Container>
            <Header handleMenuClick={handleMenuClick} />
            <LayoutWrapper>
                {
                    menuIsOpenned && <Menu />
                }
                <Contents>{children}</Contents>
            </LayoutWrapper>
        </Container>
    )
}
export default Layout;
