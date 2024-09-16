"use strict";

function solution(my_string, is_suffix) {
    var answer = 0;
    strLen = my_string.length()
    sufLen = is_suffix.length()
    if (suflen > strLen)
        return answer
    else {
        for (let i = 0; i < sufLen; i++){
            if (my_string[strLen - i] === is_suffix[sufLen - i]){
                answer = 1
            } else {
                answer = 0
                break
            }
        }
    }
    return answer;
}

console.log("banana", "ana")