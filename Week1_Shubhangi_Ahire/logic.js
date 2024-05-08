"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.secretHandshake = exports.LeapYear = exports.concatenateStrings = exports.splitString = void 0;
function splitString(str) {
    return str.split('_').join(' ');
}
exports.splitString = splitString;
function concatenateStrings(str1, str2) {
    return str1 + str2;
}
exports.concatenateStrings = concatenateStrings;
function LeapYear(year) {
    var ly = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    return ly;
}
exports.LeapYear = LeapYear;
function secretHandshake(number) {
    var binary = number.toString(2).padStart(5, '0');
    var actions = [];
    for (var i = binary.length - 1; i >= 0; i--) {
        if (binary[i] === '1') {
            switch (i) {
                case 4:
                    actions.push("wink");
                    break;
                case 3:
                    actions.push("double blink");
                    break;
                case 2:
                    actions.push("close your eyes");
                    break;
                case 1:
                    actions.push("jump");
                    break;
                case 0:
                    actions.reverse();
                    break;
            }
        }
    }
    return actions;
}
exports.secretHandshake = secretHandshake;
