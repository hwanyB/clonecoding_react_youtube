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
    box-sizing: border-box;
    width: 100%;
`;
const ContentsLayout = styled.div`
    z-index: 9999;
    flex: 1;
    max-width: 1284px;
    margin: 100px auto;
    padding: 0 13%;
    padding-left: ${({menuIsOpenned}) => menuIsOpenned === true && `calc(13% + 200px)`};

    @media screen and (min-width: 0px) and (max-width: 911px){
        padding: 0 5%;
        padding-left: ${({menuIsOpenned}) => menuIsOpenned === true && `calc(5% + 72px)`};
    }
    @media screen and (min-width: 912px) and (max-width: 1125px){
        flex: 0 1 642px;
        padding: 0 5%;
        padding-left: ${({menuIsOpenned}) => menuIsOpenned === true && `calc(5% + 200px)`};
    }
    @media screen and (min-width: 1126px) and (max-width: 1339px){
        flex: 0 1 856px;
    }
    @media screen and (min-width: 1340px) and (max-width: 1553px){
        flex: 0 1 1070px;
    }
    @media screen and (min-width: 1554px){
        flex: 0 1 1284px;
    }
`;




const Layout = ({ children, activeMenu }) => {
    const [menuIsOpenned, setMenuIsOpenned] = useState(true);
    const handleMenuClick = ()=>{
        setMenuIsOpenned(prev => !prev);
    }
    return (
        <Container>
            <Header handleMenuClick={handleMenuClick} />
            <LayoutWrapper>
                {
                    menuIsOpenned && <Menu activeMenu={activeMenu} />
                }
                <Contents>
                    <ContentsLayout menuIsOpenned={menuIsOpenned}>{children}</ContentsLayout>
                </Contents>
            </LayoutWrapper>
        </Container>
    )
}
export default Layout;
