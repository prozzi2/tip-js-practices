"use strict";

const plannedText = "8"; // Общее количество задач
const completedText = "3"; // Количество выполненных задач
const additionalText = "2"; // Количество дополнительных задач, которые были выполнены

const planned = Number(plannedText); // Общее количество задач
const completed = Number(completedText); // Количество выполненных задач
const additional = Number(additionalText); // Количество дополнительных задач, которые были выполнены

if (
    Number.isNaN(planned) ||
    Number.isNaN(completed) ||
    Number.isNaN(additional)
) {
    console.log("Ошибка: все значения должны быть числами.");
} else if (
    planned < 0 ||
    completed < 0 ||
    additional < 0
) {
    console.log("Ошибка: количество задач не может быть отрицательным.");
} else if(
    completed + additional > planned
) {
    console.log("Ошибка: количество выполненных задач не может превышать общее количество задач.");
} else {
    const completedTotal = completed + additional; // Общее количество выполненных задач
    const remainingTasks = planned - completedTotal; // Количество оставшихся задач

    console.log("Выполнено:", completedTotal);
    console.log("Осталось:", remainingTasks);

    let controlSum = 0;

    for (let taskNumber = 1; taskNumber <= 4; taskNumber += 1) {
        controlSum += taskNumber;
    }

    console.log("Контрольная сумма:", controlSum);
}
