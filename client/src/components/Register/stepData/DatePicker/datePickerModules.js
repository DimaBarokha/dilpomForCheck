import React from 'react'
import AlertPage from "./Alert";

const DAYS_IN_WEEK = 7;
const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const WEEK_DAYS_FROM_MONDAY = [6, 0, 1, 2, 3, 4, 5];


export function areEqual(a, b) {
    if (!a || !b) return false;

    return (
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
    );
}

const Month = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    October: 9,
    November: 10,
    December: 11
};

export function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export function getDaysInMonth(date) {
    const month = date.getMonth();
    const year = date.getFullYear();
    const daysInMonth = DAYS_IN_MONTH[month];
    if (isLeapYear(year) && month === Month.February) {
        return daysInMonth + 1;
    } else {
        return daysInMonth;
    }
    return DAYS_IN_MONTH[month];
}



export function getDaysOfWeek(date) {
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 0) return 6;
    return dayOfWeek - 1;
}

export function getMonthData(year, month) {
    const result = [];
    const date = new Date(year, month);
    let day = 1;
    const daysInMonth = getDaysInMonth(date);
    const monthStartsOn = getDaysOfWeek(date);
    for (let i = 0; i < (daysInMonth + monthStartsOn) / DAYS_IN_WEEK; i++) {
        result[i] = [];
        for (let j = 0; j < DAYS_IN_WEEK; j++) {
            if ((i === 0 && j < monthStartsOn) || day > daysInMonth) {
                result[i][j] = undefined;
            } else {
                result[i][j] = new Date(year, month, day++);
            }
        }
    }
    return result;
}
