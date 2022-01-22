import react from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled/macro";
import { TiHome } from 'react-icons/ti';
import { FaRegCompass } from 'react-icons/fa';
import { MdSubscriptions } from 'react-icons/md';


// styled-component

const Base = styled.div`
    position: fixed;
    top: 60px;
    left: 0;
    width: 200px;
    height: 100vh;
    background-color: white;
`;

const LinkWrapper = styled.div`
    padding: 0 16px;
    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    padding: 10px;
    border-radius: 12px;
    font-weight: 600;
    display: flex;
    font-size: 25px;
    color: #222;
`;

const MenuText = styled.div`
    font-size: 16px;
    margin-left: 10px;
    line-height: 25px;
    font-weight: 100;
`;


const Menu = () => {
    return (
        <Base>
            <LinkWrapper>
                <StyledLink to='/'>
                    <TiHome />
                    <MenuText>홈</MenuText>
                </StyledLink>
            </LinkWrapper>
            <LinkWrapper>
                <StyledLink to='/explore'>
                    <FaRegCompass />
                    <MenuText>탐색</MenuText>
                </StyledLink>
            </LinkWrapper>
            <LinkWrapper>
                <StyledLink to='/subscription'>
                    <MdSubscriptions />
                    <MenuText>구독</MenuText>
                </StyledLink>
            </LinkWrapper>
            {/* <LinkWrapper>
                <StyledLink to='/assignment'>과제</StyledLink>
            </LinkWrapper> */}
        </Base>
    )
}

export default Menu;