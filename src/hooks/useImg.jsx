const {useState} = require('react');

const useImg = type => {
  const [img, setImg] = useState('');

  const fetchImg = figure => {
    // 기온
    if (type === 'TMP') {
      if (figure >= 28) setImg('여름의 무더위');
      if (figure >= 23 && figure < 28) setImg('반팔 입기');

      if (figure >= 20 && figure < 23) setImg('얇은 긴팔 입기');
      if (figure >= 17 && figure < 20) setImg('맨투맨과 가디건 입기');

      if (figure >= 12 && figure < 17) setImg('겉옷 걸치기');
      if (figure >= 9 && figure < 12) setImg('여러 옷을 겹쳐서 입기');

      if (figure >= 5 && figure < 9) setImg('털옷 입기');
      if (figure < 5) setImg('꽁꽁싸매기');
    }

    // 강수량
    if (type === 'RN1') {
      if (figure === 0) setImg('비가 안 와요');
      if (figure > 0 && figure <= 3) setImg('이슬비');
      if (figure > 3 && figure <= 15) setImg('우산쓰고 다니세요');
      if (figure > 15 && figure <= 30) setImg('우산써도 신발과 바지가 젖어요');
      if (figure > 30 && figure <= 40) setImg('폭우, 걸어다니기 힘들어요');
      if (figure > 40 && figure <= 50) setImg('길에 물이 차기 시작해요');
      if (figure > 50) setImg('절대 밖에 나가지 마세요');
      if (figure >= 100) setImg('재난');
    }

    // 강수확률
    // if (type === 'POP') {
    // }
  };

  return [img, fetchImg];
};

export default useImg;
