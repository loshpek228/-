

let currentDate = new Date();


let birthYear = prompt("Введите год вашего рождения:");


if (parseInt(birthYear) > currentDate.getFullYear()) {
    alert("Вы еще не родились.");
} else {
   
    let age = currentDate.getFullYear() - parseInt(birthYear);


    if (age < 30) {
        alert("Вы младше 30 лет.");
    } else if (age >= 30 && age < 60) {
        alert("Вы старше 30, но младше 60 лет.");
    } else {
        alert("Вам старше 60 лет. Рекомендуется посетить врача.");
    }
}




