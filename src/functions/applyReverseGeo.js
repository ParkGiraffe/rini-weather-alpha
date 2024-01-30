// lat, lon 데이터로 현재 주소 파악하기

export default function applyReverseGeo(geoObj) {
  // console.log(geoObj)
  // console.log(geoObj.countryName); // 대한민국
  // console.log(geoObj.city); // 전라남도
  // console.log(geoObj.locality); // 덕연동

  return {city: geoObj.city, locality: geoObj.locality};
}
