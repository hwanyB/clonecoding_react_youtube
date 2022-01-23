import React, { useState } from 'react';
import styled from '@emotion/styled/macro';
import HomeCard from '../components/home/HomeCard';
import Layout from '../components/shared/Layout';
import HomeFilter from '../components/home/HomeFilter';
import youtubeData from '../data/youtubeData.json';

const Grid = styled.div`
    display: grid;
    width: 100%;
    row-gap: 20px;
    column-gap: 16px;
    grid-template-columns: repeat(5, 1fr);
    @media screen and (max-width: 1280px){
        grid-template-columns: repeat(4, 1fr);
    }
    @media screen and (max-width: 1144px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 800px){
        grid-template-columns: repeat(2, 1fr);
    }
`;
const Home = () => {
    const [filter, setFilter] = useState('');
    const changeFilter = (value) => {
        setFilter(value);
    }

    return (
        <>
            <Layout activeMenu='home'>
                <HomeFilter onClick={changeFilter} filter={filter} />
                <Grid>
                    {
                        youtubeData['data'].filter((data) => data.title.includes(filter) || data.channelTitle.includes(filter)).map((data, index) => {
                            return (
                                
                                    <HomeCard key={`explore-card-${index}`} data={data} />
                                
                            )
                        })
                    }
                </Grid>
        </Layout>
        </>
    ) 
}

export default Home;