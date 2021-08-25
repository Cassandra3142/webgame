const candidate = Array(45).fill().map((element,index) => {
  return index + 1;
})

const shuffle = [];
while (candidate.length > 0) {
  const random = Math.floor(Math.random() * candidate.length); // 무작위로 인덱스 뽑기
  const spliceArray = candidate.splice(random,1); // 뽑은 값은 배열에 들어가 있음
  const value = spliceArray[0]; // 배열에 들어 있는 값을 꺼내어
  shuffle.push(value); // shuffle 배열에 넣기
}

// for (i = candidate.length; 0 < i ; i -= 1) {
//   const random = Math.floor(Math.random() * i);
//   const spliceArray = candidate.splice(random,1);
//   const value = spliceArray[0];
//   shuffle.push(value);
// }
console.log(shuffle);

