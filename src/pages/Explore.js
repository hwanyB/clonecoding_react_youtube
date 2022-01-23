import React from 'react';
import ExploreCard from '../components/ExploreCard';
import Layout from '../components/shared/Layout';
import youtubeData from '../data/youtubeData.json';

const Explore = () => {
    return (
        <Layout activeMenu='explore'>
            {
                youtubeData['data'].map((data, index) => {
                    return (
                        <ExploreCard key={`explore-card-${index}`} data={data} />
                    )
                })
            }
        </Layout>
    ) 
}

export default Explore;