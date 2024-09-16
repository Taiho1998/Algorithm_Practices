"use strict";

function solution(my_string, is_suffix) {
    var answer = 0;
    let strLen = my_string.length
    let sufLen = is_suffix.length
    if (sufLen > strLen)
        return answer
    else {
        for (let i = 1; i < sufLen + 1; i++){
            if (my_string[strLen - i] === is_suffix[sufLen - i]){
                answer = 1
            } else {
                return answer = 0
            }
        }
    }
    return answer;
}

console.log(solution("banana", "bana"))