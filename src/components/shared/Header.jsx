import react from "react";
import styled from "@emotion/styled/macro";
import youtube_logo from '../../data/youtube_logo.png';
import { FiMenu } from 'react-icons/fi';
import { IoSearchOutline } from 'react-icons/io5';
import { BsGrid3X3Gap } from 'react-icons/bs';
import { HiOutlineDotsVertical } from 'react-icons/hi';


const Base = styled.header`
    display: flex;
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
    padding: 10px 16px;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    margin: 0;
    background-color: white;
    z-index: 99;
`;
const LeftTap = styled.div`
    display: flex;
    box-sizing: border-box;
    align-items: center;
    flex: 1;
`;

const CenterTap = styled.div`
    flex: 2;
    display: flex;


`;

const RightTap = styled.div`
    display: flex;
    padding: 0;
    box-sizing: border-box;
    align-items: center;
    justify-content: right;
    flex: 1;
`;


const IconWrapper = styled.div`
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    cursor: pointer;
    &:active {
        background-color: rgba(0, 0, 0, 0.05);
    }
`;

const SearchIconWrapper = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    width: 50px;
    height: 40px;
    background-color: #f8f8f8;
    border: 1px solid #d3d3d3;
    box-sizing: border-box;
    position: relative;
    left: -1px;
    cursor: pointer;
`;

const Logo = styled.img`
    padding-left: 10px;
    box-sizing: border-box;
    height: 35px;
`;

const Input = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid #d3d3d3;
    box-sizing: border-box;
    outline: none;
`;

const Header = ({handleMenuClick}) => {
    
    return (
        <Base>
            <LeftTap>
                <IconWrapper onClick={handleMenuClick}>
                    <FiMenu size={30} />
                </IconWrapper>
                <Logo src={youtube_logo} />
            </LeftTap>
            <CenterTap>
                <Input />
                <SearchIconWrapper>
                    <IoSearchOutline size={23} />
                </SearchIconWrapper>
            </CenterTap>
            <RightTap>
                <IconWrapper>
                    <BsGrid3X3Gap size={25} />
                </IconWrapper>
                <IconWrapper>
                    <HiOutlineDotsVertical size={25} />
                </IconWrapper>
            </RightTap>
        </Base>
)
}

export default Header;