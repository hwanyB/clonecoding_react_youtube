import React from 'react';
import HorizontalCard from './shared/HorizontalCard';
import styled from '@emotion/styled/macro';

const SubCardWrapper = styled.div`
    margin-bottom: 24px;
    border-bottom: 1px solid #e0e0e0;
`;

const Uploader = styled.a`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    color: #030303;
    text-decoration: none;
`;

const ChannelImage = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    margin-right: 8px;
`;

const ChannelName = styled.div`
    font-size: 12px;
`;

const HorizontalCardWrapper = styled.div`
    margin-bottom: 24px;
`;




const SubscriptionCard = ({ data }) => {
    return (
        <SubCardWrapper>
            <Uploader href={`https://www.youtube.com/channel/${data.channelId}`}>
                <ChannelImage src={data.channelThumbnail} alt={`${data.channelTitle} 프로필 사진`} />
                <ChannelName>{data.channelTitle}</ChannelName>
            </Uploader>
            <HorizontalCardWrapper>
                <HorizontalCard data={data} />
            </HorizontalCardWrapper>
        </SubCardWrapper>
    );
}

export default SubscriptionCard;