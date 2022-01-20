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
    height: 56px;
    padding: 0 16px;
    background-color: white;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
`;

const Tap = styled.nav`
    display: flex;
    align-items: center;
`;


const IconWrapper = styled.div`
    align-items: center;
    width: 40px;
    height: 40px;
    padding: 15px 0;
    cursor: pointer;
    margin-top: 10px;
`;

const Logo = styled.img`
    padding-left: 16px;
`;

const Input = styled.input`
    width: 450px;
    height: 30px;
    border: 1px solid #d3d3d3;
    box-sizing: border-box;
    flex: 1;
    margin-right: 10px;
`;

const Header = () => {
    return (
        <Base>
            <Tap>
                <IconWrapper>
                    <FiMenu size={30} />
                </IconWrapper>
                <Logo src={youtube_logo} />
            </Tap>
            <Tap>
                <Input />
                <IconWrapper>
                    <IoSearchOutline size={25} />
                </IconWrapper>
            </Tap>
            <Tap>
                <IconWrapper>
                    <BsGrid3X3Gap size={25} />
                </IconWrapper>
                <IconWrapper>
                    <HiOutlineDotsVertical size={25} />
                </IconWrapper>
            </Tap>
        </Base>
)
}

export default Header;