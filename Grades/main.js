"use strict";

let rank = [1, 2, 3]
let attendance = [true, true, true]

function solution(rank, attendance) {
    var answer = 0;
    let attendedStud = []
    let studNum = []
    for (let i = 0; i < rank.length; i++)
    {
        if (attendance[i]){
            attendedStud.push(rank[i])
            studNum.push(i)
        }
    }

    answer = findVal(attendedStud, studNum)

    return answer;
}

function findVal(arg1, arg2){
    let total = 0
    for (let j = 0; j < 3; j++){
        let min = arg1[0]
        let minNum = arg2[0]
        for (let i = 1; i < arg1.length; i++){
            if(min > arg1[i]){
                min = arg1[i]
                minNum = arg2[i]
            }
        }
        arg1 = arg1.filter((item) => item !== min)
        arg2 = arg2.filter((item) => item !== minNum)

        switch (j){
            case 0:
                total += minNum * 10000
                break
            case 1:
                total += minNum * 100
                break
            case 2:
                total += minNum
        }
    }

    return total
}

console.log(solution(rank, attendance))