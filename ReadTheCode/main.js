// 문제 출처 https://school.programmers.co.kr/learn/courses/30/lessons/181932

"use strict";

let str = "abc1abc1abc" //테스트 케이스

function solution(code) {
    var answer = ''
    var mode = 0
    for (let i = 0; i < code.length; i++){
        if (mode == 0){
            if (code[i] != 1 && i%2 == 0){
                answer += code[i]
            }
            else if (code[i] == 1){
                mode = 1
            }
        }else {
            if (code[i] != 1 && i%2 == 1){
                answer += code[i]
            }
            else if (code[i] == 1){
                mode = 0
            }
        }
    }
    if (answer === '')
        return answer = "EMPTY"
    return answer;
}

console.log(solution(str))