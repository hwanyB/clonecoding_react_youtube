import React from 'react';
import styled from '@emotion/styled/macro';

const Card = styled.a`
    text-decoration: none;
    cursor: pointer;
    min-height: 300px;
    margin-bottom: 20px;
`;

const Thumbnail = styled.img`
    width: 100%;
    height: 150px;
    object-fit: cover;
`;


const Info = styled.div`
    display: flex;
    margin-top: 12px;
`;

const ChannelImg = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 18px;
    margin-right: 12px;
    font-size: 11px;
`;

const Title = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: #030303;
`;

const Uploader = styled.div`
    font-size: 14px;
    margin-top: 8px;
    color: #030303;
`;

const TextWrapper = styled.div`
    display: flex;
    color: #030303;
`;

const View = styled.div`
    font-size: 14px;
    &:after {
        content: '•';
        margin: 0 4px;
}
`;
const Time = styled.div`
    font-size: 14px;
`;

const HomeCard = ({ data, index }) => {
    return(
        <Card
            href={`https://www.youtube.com/watch?v=${data.id}`}
            key={`home-card-${index}`}
        >
            <Thumbnail
                src={data.thumbnail}
                alt={`${data.title}의 썸네일`}
            />
            <Info>
                <a href={`https://www.youtube.com/channel/${data.channelId}`}>
                    <ChannelImg
                        src={data.channelThumbnail}
                        alt={`${data.channelTitle} 프로필 사진`}
                    />
                </a>
            <div>
                <Title> {data.title}</Title>
                <Uploader>{data.channelTitle}</Uploader>
                <TextWrapper>
                    <View>{data.viewCount}</View>
                    <Time>{data.date}</Time>
                </TextWrapper>
            </div>
            </Info>
    </Card>
    );
}

export default HomeCard;