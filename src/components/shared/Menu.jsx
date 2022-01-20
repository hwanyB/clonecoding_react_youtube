import react from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled/macro";

const Base = styled.div`
    position: absolute;
    top: 100px;
    padding: 0 16px;
`;

const LinkWrapper = styled.div`
    margin-bottom:30px;
    padding: 0;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    background-color: red;
    color: white;
    padding: 10px;
    border-radius: 12px;
    font-weight: 600;
    font-size: 12px;
`;



const Menu = () => {
    return (
        <Base>
            <LinkWrapper>
                <StyledLink to='/'>홈</StyledLink>
            </LinkWrapper>
            <LinkWrapper>
                <StyledLink to='/explore'>탐색</StyledLink>
            </LinkWrapper>
            <LinkWrapper>
                <StyledLink to='/subscription'>구독</StyledLink>
            </LinkWrapper>
            <LinkWrapper>
                <StyledLink to='/assignment'>과제</StyledLink>
            </LinkWrapper>
        </Base>
    )
}

export default Menu;