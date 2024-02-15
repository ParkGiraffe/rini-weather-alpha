const {useState} = require('react');

const useImg = type => {
  const [img, setImg] = useState(require('../assets/emoticon/tmp7.png'));

  const fetchImg = figure => {
    // 기온
    if (type === 'TMP') {
      if (figure >= 28) setImg(require('../assets/emoticon/tmp7.png'));
      if (figure >= 23 && figure < 28)
        setImg(require('../assets/emoticon/tmp6.png'));

      if (figure >= 20 && figure < 23)
        setImg(require('../assets/emoticon/tmp5.png'));
      if (figure >= 17 && figure < 20)
        setImg(require('../assets/emoticon/tmp4.png'));

      if (figure >= 12 && figure < 17)
        setImg(require('../assets/emoticon/tmp3.png'));
      if (figure >= 9 && figure < 12)
        setImg(require('../assets/emoticon/tmp3.png'));

      if (figure >= 5 && figure < 9)
        setImg(require('../assets/emoticon/tmp2.png'));
      if (figure < 5) setImg(require('../assets/emoticon/tmp1.png'));
    }

    // 강수량
    if (type === 'RN1') {
      if (figure === 0) setImg(require('../assets/emoticon/rn1.png'));
      if (figure > 0 && figure <= 3)
        setImg(require('../assets/emoticon/rn2.png'));
      if (figure > 3 && figure <= 15)
        setImg(require('../assets/emoticon/rn3.png'));
      if (figure > 15 && figure <= 30)
        setImg(require('../assets/emoticon/rn3.png'));
      if (figure > 30 && figure <= 40)
        setImg(require('../assets/emoticon/rn4.png'));
      if (figure > 40 && figure <= 50)
        setImg(require('../assets/emoticon/rn4.png'));
      if (figure > 50) setImg(require('../assets/emoticon/rn5.png'));
      if (figure >= 100) setImg(require('../assets/emoticon/rn5.png'));
    }

    console.log(type, figure)
    // 강수확률
    // if (type === 'POP') {
    // }
  };

  return [img, fetchImg];
};

export default useImg;
