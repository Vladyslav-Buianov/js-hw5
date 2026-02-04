const drink = '  ЧаЙ  ';
switch (drink.toLocaleLowerCase().trim()) {
    case 'кава':
        alert('Ви вибрали напиток: кава :)');
        break;

        case 'чай':
        alert('Ви вибрали напиток чай :)');
        break;

        case 'сік':
        alert('Ви вибрали напиток: сік :)');
        break;

    default:
        alert('Ви нічого не вибрали :(')
        break;
}
const dayOfTheWeek = '   ПонеДілок  ';
switch (dayOfTheWeek.toLocaleLowerCase().trim()) {
    case 'понеділок':
        alert('Робочий день :(')
        break;

    case 'вівторок':
        alert('Робочий день :(')
        break;

    case 'середа':
        alert('Робочий день :(')
        break;

    case 'четвер':
        alert('Робочий день :(')
        break;

    case `п'ятниця`:
        alert('Робочий день :(')
        break;

    case 'субота':
        alert(`Вихідні!!! ;)`)
        break;

    case 'неділя':
        alert('Вихідні!!! ;)')
        break;

    default:
        alert('Виберіть день тижня :|')
        break;
}
const numberOfMonth = 7;
switch (numberOfMonth) {
    case 1:
        alert('Зима')
        break;

    case 2:
        alert('Зима')
        break;

    case 3:
        alert('Весна')
        break;

    case 4:
        alert('Весна')
        break;

    case 5:
        alert('Весна')
        break;

    case 6:
        alert('Літо')
        break;

    case 7:
        alert('Літо')
        break;
        
    case 8:
        alert('Літо')
        break;

    case 9:
        alert('Осінь')
        break;

    case 10:
        alert('Осінь')
        break;

    case 11:
        alert('Осінь')
        break;

    case 12:
        alert('Зима')
        break;

    default:
        alert('Номер місяця не вибрано :(')
        break;
}
const nameOfColor = '   ЧервОний ';
switch (nameOfColor.toLocaleLowerCase().trim()) {
    case 'червоний':
        alert('стоп')
        break;

    case 'жовтий':
        alert('чекати')
        break;

    case 'зелений':
        alert('йти')
        break;

    default:
        alert('Вибрати один із кольорів світлофора :|')
        break;
}
const selectNumberOne = 12;
const selectOperator = '/';
const selectNumberTwo = 0;
if(selectNumberOne === 0 && selectOperator === '/'){
    console.log('Операція не можлива: ділення на 0 :|');
}else if(selectOperator === '/' && selectNumberTwo === 0){
    console.log('Операція не можлива: ділення на 0 :|');
}else {
    // 3. Eseguiamo l'operazione corretta
    let result;
    
    if (selectOperator === "/") {
        result = selectNumberOne / selectNumberTwo;
    } else if (selectOperator === "+") {
        result = selectNumberOne + selectNumberTwo;
    }else if (selectOperator === "-") {
        result = selectNumberOne - selectNumberTwo;
    }else if(selectOperator === "*"){
        result = selectNumberOne * selectNumberTwo;
    }else{
        console.log('Оператор не валідний :|');
    }
    
    console.log(`Результат: ${result}`);
}

