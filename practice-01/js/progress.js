"use strict";
let status;

const totalTasks = 12;
const completedTasks = 5;


if (!Number.isInteger(totalTasks) || !Number.isInteger(completedTasks)) {
    console.log("Ошибка: количество задач должно быть целым числом.");
} else if (totalTasks < 0 || completedTasks < 0) {
    console.log("Ошибка: количество задач не может быть отрицательным.");
} else if (totalTasks > 1000 || completedTasks > 1000) {
    console.log ("Ошибка: количество задач не может превышать 1000.");
} else if (completedTasks > totalTasks) {
    console.log("Ошибка: количество выполненных задач не может превышать общее количество задач.");
} else if (totalTasks === 0 && completedTasks === 0) {
    console.log("Задач пока нет");
} else {
    const remainingTasks = totalTasks - completedTasks;
    const percentage = (completedTasks / totalTasks) * 100;
    if (completedTasks === 0){
        status = "Не начато";
    } else if (completedTasks === totalTasks) {
        status = "Завершено";
    } else {
        status = "В работе";
    }

    console.log(`Всего задач: ${totalTasks}`);
    console.log(`Выполнено: ${completedTasks}`);
    console.log(`Осталось: ${remainingTasks}`);
    console.log(`Прогресс: ${percentage.toFixed(1)}%`);
    console.log(`Статус: ${status}`);
}
