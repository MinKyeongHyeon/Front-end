function solution(board) {
    배열은 0~25
    안전지대 계산
    폭탄이 1,5,20,25일때는 3칸
    폭탄이 5의 배수이거나 5+1이면 위험지역은 5칸
    폭탄이 1,5,20,25일때는 3칸
    그 외에는 8칸
    
    const arr = board.flat();
    const dangerZone = danger =>{
    if(i === 1 || i === 5 || i === 20 || i === 25){
        danger = 3
    }else if(i % 5 === 0 || i%5===1){
        danger = 5;
    }else{
        danger = 8;
    }
}

    // 겹치는 칸
    // 폭탄의 거리가 1이면 겹치는 칸은 +3
    // 폭탄의 거리가 2면 +5칸
    // 폭탄의 거리가 3 이면+8칸
    // 폭탄의 거리가 4면 +5칸
    // 폭탄의 거리가 5면 +3칸...
    // 폭탄의 거리가 6이면 +5칸 ...
    // 폭탄의 거리가 7이면 +8칸 ...
    
    var answer = 0;
    return answer;
}