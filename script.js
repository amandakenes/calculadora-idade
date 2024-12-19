const calculateBtn = document.getElementById("calculate-btn");

function getValues() {
    const result = document.getElementById("result");
    result.innerHTML = '';

    let date = new Date();
    let thisDay = date.getDate();
    let thisMonth = (date.getMonth() + 1);
    let thisYear = date.getFullYear();

    let day = Number(document.getElementById("day").value);
    let month = Number(document.getElementById("month").value);
    let year = Number(document.getElementById("year").value);

    if (String(day).length > 2) {
        alert('Quantidade de caracteres para dia inválidos!');
    } else if (String(month).length > 2) {
        alert('Quantidade de caracteres para mês inválido');
    } else if (String(year).length > 4 || String(year).length < 4) {
        alert('Quantidade de caracteres para ano inválido');
    } else if (year > thisYear) {
        alert('Insira um ano válido para realizar o cálculo de idade');
    } else if (year == thisYear) {
        let calculateAgeInMonths = thisMonth - month;
        let calculateAgeInDays = thisDay - day;

        result.innerHTML += `<p>Você tem ${calculateAgeInMonths} meses e ${calculateAgeInDays} dias!</p>`;
        result.style.display = "block";
    } else {
        if (thisDay < 10 || day < 10 || thisMonth < 10 || month < 10) {
            if (thisDay < 10) {
                thisDay = `0${thisDay}`;
            }

            if (thisMonth < 10) {
                thisMonth = `0${thisMonth}`;
            }

            if (day < 10) {
                day = `0${day}`;
            }

            if (month < 10) {
                month = `0${month}`;
            }
        }

        let calculateAgeInYears = thisYear - year;
        let calculateAgeInMonths = thisMonth - month;
        let calculateAgeInDays = thisDay - day;

        if (calculateAgeInDays < 0) {
            calculateAgeInMonths--;
            calculateAgeInDays += new Date(thisYear, thisMonth - 1, 0).getDate();
        }

        if (calculateAgeInMonths < 0) {
            calculateAgeInYears--;
            calculateAgeInMonths += 12;
        }

        result.innerHTML += `<p>Você tem ${calculateAgeInYears} anos, ${calculateAgeInMonths} meses e ${calculateAgeInDays} dias!</p>`;
        result.style.display = "block";
    }
}

calculateBtn.addEventListener('click', getValues);
