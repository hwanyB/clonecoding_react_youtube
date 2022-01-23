import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    margin: 0;
`;
const FilterUl = styled.ul`
padding: 0;
margin: 0;
`;
const FilterLi = styled.button`

    height: 30px;
    color: #000;
    display: inline-block;
    margin-right: 10px;
    border-radius: 15px;
    margin-bottom: 20px;
    cursor: pointer;
    background-color: #c8c8c8;
    border: none;
    font-size: 12px;
    font-weight: 200;
    padding: 10px;
    line-height: 12px;
    box-sizing: border-box;
    &:active, :hover{
        background-color: #000;
        color: #fff;
    }
`;

const filterArr = ['','BTS','BLACKPINK','NCT', 'STAYC']

const HomeFilter = ({ onClick, filter }) => {
    return (
        <Container>
            <FilterUl>
                {
                    filterArr.map((value, idx) => {
                        return (
                            <FilterLi
                                key={`home-filter-${idx}`}
                                onClick={() => onClick(value)}
                            >
                                {value === ''? '전체' : value}
                            </FilterLi>
                        );
                    })
                }
            </FilterUl>
        </Container>
    )
}

export default HomeFilter;