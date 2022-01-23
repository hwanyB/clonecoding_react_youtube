import React from 'react';
import styled from '@emotion/styled/macro';

const CardWrapper = styled.a`
    text-decoration: none;
    color: #606060;
`;

const Card = styled.div`
    display: flex;
    margin-bottom: 16px;
    max-width: 862px;
`;

const Thumbnail = styled.img`
    flex: 0 0 246px;
    width: 246px;
    height: 138px;
    object-fit: cover;
    margin-right: 16px;
`;

const Info = styled.div`
    flex: 1;
    width: 200px;
    @media screen and (max-width: 529px){
        display: none;
    }
`;

const Title = styled.div`
    color: #030303;
    font-size: 18px;
    display: -webkit-box;
    overflow: hidden;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

const Meta = styled.div`
    display: flex;
    margin-bottom: 8px;
    font-size: 12px;
`;

const Uploader = styled.a`
    color: #030303;
    text-decoration: none;
    &:after {
        content: '•';
        margin: 0 4px;
    }
`;

const View = styled.div`
    &:after {
        content: '•';
        margin: 0 4px;
    }
`;

const Desc = styled.div`
    font-size: 12px;
    display: -webkit-box;
    overflow: hidden;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

const Time = styled.div`
`;

const ExploreCard = ({ data }) => {
    return(
            <CardWrapper href={`https://www.youtube.com/watch?v=${data.id}`}>
                <Card>
                    <Thumbnail src={data.thumbnail} alt={`${data.title}의 썸네일`} />
                    <Info>
                        <Title>{data.title}</Title>
                        <Meta>
                            <Uploader href={`https://www.youtube.com/channel/${data.channelId}`}>
                                {data.channelTitle}
                            </Uploader>
                            <View>{data.viewCount}</View>
                            <Time>{data.date}</Time>
                        </Meta>
                        <Desc>{data.description}</Desc>
                    </Info>
                </Card>
            </CardWrapper>
    );
}

export default ExploreCard;