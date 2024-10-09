"use strict";

let video_len = "34:33"
let pos = "13:00"
let op_start = "00:55"
let op_end = "02:55"
let commands = 	["next", "prev"]

function solution(video_len, pos, op_start, op_end, commands) {
    var answer = '';
    let videoLen = transToInt(video_len)
    return answer;
}

function transToInt(str) {
    let arr = str.split(':')
    return parseInt(arr[1]) + (60 * parseInt(arr[0]))
}

solution(video_len, pos, op_start, op_end, commands)