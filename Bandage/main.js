let attacks =  [[1, 2], [3, 2]]
let bandage = 	[1, 1, 1]
let health = 5

function solution(bandage, health, attacks) {
    var answer = 0;
    let max_health = health
    let count = 0
    let casted = 0
    // 마지막 공격 시점 까지
    for (let i = 0; i < attacks[attacks.length - 1][0] ; i++){
        casted++
        //공격을 받았다면
        if (i + 1 === attacks[count][0]){
            health -= attacks[count][1]
            count++
            casted = 0
            //사망시
            if(health < 0){
                return -1
            }
        //시전 시간을 전부 충족시킬 경우
        } else if (casted === bandage[0]){
            health += bandage[1]
            health += bandage[2]
            // 체력의 최대값은 최대 체력을 넘어갈 수 없음
            if (health > max_health){
                health = max_health
            }
            casted = 0
        // 시전중
        } else{
            health += bandage[1]
            // 체력의 최대값은 최대 체력을 넘어갈 수 없음
            if (health > max_health){
                health = max_health
            }

        }
    }
    
    return answer = health;
}

console.log(solution(bandage, health, attacks))