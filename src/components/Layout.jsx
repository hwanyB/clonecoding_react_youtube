import React from 'react';
import styled from '@emotion/styled/macro';

import Header from './shared/Header';
import Menu from './shared/Menu';

const Container = styled.div`
    display: flex;
    position: fixed;
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
    flex: 1;
    position: absolute;
    top: 100px;
    left: 200px;
    font-size: 30px;
`;



const Layout = ({children}) => {
    return (
        <Container>
            <Header />
            <LayoutWrapper>
                <Menu />
                <Contents>{children}</Contents>
            </LayoutWrapper>
        </Container>
    )
}
export default Layout;
