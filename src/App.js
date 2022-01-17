import youtubeData from './data/youtubeData.json';
import './App.css';

function App() {
  console.log('영상의 id값: ', youtubeData['data'][0]['id']); 
  console.log('채널의 id값: ', youtubeData['data'][0]['channelId']); 
  console.log('영상 기재 날짜: ', youtubeData['data'][0]['date']); 
  console.log('영상의 제목: ', youtubeData['data'][0]['title']); 
  console.log('영상의 썸네일: ', youtubeData['data'][0]['thumbnail']); 
  console.log('영상의 가사: ', youtubeData['data'][0]['description']); 
  console.log('채널의 제목: ', youtubeData['data'][0]['channelTitle']); 
  console.log('영상의 카테고리: ', youtubeData['data'][0]['category']); 
  console.log('영상의 조회수: ', youtubeData['data'][0]['viewCount']); 
  console.log('좋아요 수: ', youtubeData['data'][0]['likeCount']); 
  console.log('채널의 주소: ', youtubeData['data'][0]['channelUrl']); 
  console.log('채널의 썸네일: ', youtubeData['data'][0]['channelThumbnail']); 
  return (
    <div>리액트로 데이터 불러오기</div>
  );
}

export default App;
