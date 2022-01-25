import React from 'react';
import HorizontalCard from '../components/shared/HorizontalCard';
import Layout from '../components/shared/Layout';
import youtubeData from '../data/youtubeData.json';

const Explore = () => {
    return (
        <Layout activeMenu='explore'>
            {
                youtubeData['data'].map((data, index) => {
                    return (
                        <HorizontalCard key={`explore-card-${index}`} data={data} />
                    )
                })
            }
        </Layout>
    ) 
}

export default Explore;