import React from 'react';
import Layout from '../components/shared/Layout';
import SubscriptionCard from '../components/SubscriptionCard';
import sortedYoutubeData from '../data/sortedYoutubeData.json';

const Subscription = () => {
    return (
        <>
            <Layout activeMenu='subscription'>
                {sortedYoutubeData['data'].map((data, index) => {
                    return (
                        <SubscriptionCard data={data} key={`subscription-card-${index}`} />
                    );
                })}
            </Layout>
        </>
    ) 
}

export default Subscription;