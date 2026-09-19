"use strict";

const totalTasks = 12;
const completedTasks = 5;
const dailyLimit = 3;


if (
    !Number.isInteger(totalTasks) ||
    !Number.isInteger(completedTasks) ||
    !Number.isInteger(dailyLimit)
) {
        console.log("Ошибка: все значения должны быть целыми числами.");
} else if (
    totalTasks < 0 ||
    completedTasks < 0 ||
    dailyLimit <= 0
) {
    console.log("Ошибка: количество задач не может быть отрицательным, а дневной лимит должен быть не меньше 1.");
} else if (
    totalTasks > 1000 ||
    completedTasks > 1000 ||
    dailyLimit > 1000
) {
    console.log("Ошибка: количество задач и дневной лимит не может превышать 1000.");
} else if (completedTasks > totalTasks) {
    console.log("Ошибка: количество выполненных задач не может превышать общее количество задач.");
} else {
    let remainingTasks = totalTasks - completedTasks;
    let day = 0;

    if (remainingTasks === 0) {
        console.log("Все задачи уже выполнены.");
    } else {
        console.log(`Осталось задач: ${remainingTasks}`);
    }

    while (remainingTasks > 0) {
        day += 1;
        const tasksToday = Math.min(dailyLimit, remainingTasks);
        remainingTasks -= tasksToday;
        console.log(`День ${day}: выполнено ${tasksToday}, осталось ${remainingTasks}`);
    }

    console.log(`Потребуется дней: ${day}`);
}
