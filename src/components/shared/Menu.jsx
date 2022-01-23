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
    z-index: 99;
    background-color: white;
    @media screen and (max-width: 911px){
        width: 72px;
    }

`;

const LinkWrapper = styled.div`
    padding: 0 16px;
    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
    @media screen and (max-width: 911px){
        padding: 0 10px;
    }
`;

const FocusedLinkWrapper = styled.div`
    padding: 0 16px;
    background-color: rgba(0, 0, 0, 0.1);
    &:hover {
        background-color: rgba(0, 0, 0, 0.15);
    }
    @media screen and (max-width: 911px){
        padding: 0 10px;
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
    @media screen and (max-width: 911px){
        justify-content: center;
    }
`;

const MenuText = styled.div`
    font-size: 16px;
    margin-left: 10px;
    line-height: 25px;
    font-weight: 100;
    @media screen and (max-width: 911px){
        display: none;
    }
`;


const Menu = ({ activeMenu }) => {
    return (
        <Base>
            {
                activeMenu === 'home' ? (
                    <FocusedLinkWrapper>
                        <StyledLink to='/'>
                            <TiHome />
                            <MenuText>홈</MenuText>
                        </StyledLink>
                    </FocusedLinkWrapper>
                ) : (
                    <LinkWrapper>
                        <StyledLink to='/'>
                            <TiHome />
                            <MenuText>홈</MenuText>
                        </StyledLink>
                    </LinkWrapper>
                )
            }
            {
                activeMenu === 'explore' ? (
                    <FocusedLinkWrapper>
                        <StyledLink to='/explore'>
                            <FaRegCompass />
                            <MenuText>탐색</MenuText>
                        </StyledLink>
                    </FocusedLinkWrapper>
                ) : (
                    <LinkWrapper>
                        <StyledLink to='/explore'>
                            <FaRegCompass />
                            <MenuText>탐색</MenuText>
                        </StyledLink>
                    </LinkWrapper>
                )
            }
            {
                activeMenu === 'subscription' ? (
                    <FocusedLinkWrapper>
                        <StyledLink to='/subscription'>
                            <MdSubscriptions />
                            <MenuText>구독</MenuText>
                        </StyledLink>
                    </FocusedLinkWrapper>
                ) : (
                    <LinkWrapper>
                        <StyledLink to='/subscription'>
                            <MdSubscriptions />
                            <MenuText>구독</MenuText>
                        </StyledLink>
                    </LinkWrapper>
                )
            }
            
        </Base>
    )
}

export default Menu;