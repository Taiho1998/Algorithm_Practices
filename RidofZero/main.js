"use strict";

function solution(n_str) {
    var answer = '';
    var strArr = []
    let i
    let j = 0
    for (i = 0; i < n_str.length; i++){
        strArr.push(n_str[i])
        console.log(strArr)
    }
    while(n_str[j]){
        if (n_str[j++] === '0')
            strArr.shift()
        else {
            j = 0
            break
        }
    }
    for (i = 0; i < strArr.length; i++)
        answer += strArr[i]
    return answer;
}

console.log(solution('0010'))