"use strict";

let video_len = "34:33"
let pos = "13:00"
let op_start = "00:55"
let op_end = "02:55"
let commands = 	["next", "prev"]

function solution(video_len, pos, op_start, op_end, commands) {
    var answer = '';
    let videoLen = transToInt(video_len)
    let posTime = transToInt(pos)
    let opStart = transToInt(op_start)
    let opEnd = transToInt(op_end)
    console.log(transToTime(opEnd))
    return answer;
}

// 전달받은 시간 정보 정수로 변환
function transToInt(str) {
    let arr = str.split(':')
    return parseInt(arr[1]) + (60 * parseInt(arr[0]))
}

function transToTime(int) {
    let min = parseInt(int / 60)
    let sec = parseInt(int % 60)
    let strmin, strsec
    if (min < 10){
        strmin = '0' + min.toString()
    } else {
        strmin = min.toString()
    }
    if (sec < 10){
        strsec = '0' + sec.toString()
    } else {
        strsec = sec.toString()
    }
    return `${strmin}:${strsec}`
}

solution(video_len, pos, op_start, op_end, commands)