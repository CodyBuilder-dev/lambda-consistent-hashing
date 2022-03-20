const jumpConsistentHash = (nodes, num_buckets) => {
    let cnt = 0, position = 0;
	let left_distance;

	// N번만에 도달하는 확률이 1/N이 되도록
	// 1. 현재 남은 거리 계산
	// 2. 주사위가 1/남은거리가 되도록 설계
	while (position < num_buckets && cnt < nodes) {
		left_distance = num_buckets - position;
		position += Math.random() * (num_buckets) + 1;
		cnt += 1;
	}
	return cnt;
}


// lacal test
const nodeCnt = 5
const bucketCnt = 10
const hashMap = Array(nodeCnt+1).fill(0);
// for (let i = 0; i <100; ++i) {
//     hashMap[parseInt(jumpConsistentHash(i,bucketCnt))] += 1
// }

for (let i = 0; i <1000; ++i) {
	hashMap[jumpConsistentHash(nodeCnt,bucketCnt)] +=1
}
console.log(hashMap)
console.log(2862933555777941499)
console.log(Number.MAX_SAFE_INTEGER)