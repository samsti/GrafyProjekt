const tableBody = document.getElementById('table-body');
const salaryCheckbox = document.getElementById('age');
const moneyCheckbox = document.getElementById('money');
const dataSalary = [];
const dataMoney = [];

for (let i = 1; i <= 100; i++) {
    const id = i;
    const name = faker.name.findName();
    const salary = parseFloat(faker.finance.amount(500, 6000));
    const money = parseFloat(faker.finance.amount(500, 10000));

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${id}</td>
        <td>${name}</td>
        <td>${salary} $</td>
        <td>${money} $</td>
    `;
    tableBody.appendChild(row);

    dataSalary.push([name, salary]);
    dataMoney.push([name, money]);
}

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    const combinedData = new google.visualization.DataTable();
    combinedData.addColumn('string', 'name');
    combinedData.addColumn('number', 'salary');
    combinedData.addColumn('number', 'money');
    for (let i = 0; i < dataSalary.length; i++) {
        combinedData.addRow([dataSalary[i][0], dataSalary[i][1], dataMoney[i][1]]);
    }

    const options = {
        title: 'Age vs Money',
        width: 1000,
        height: 500,
        vAxis: {
            title: '',
        },
        hAxis: {
            title: 'Names',
        },
        legend: 'none',

    };

    if (salaryCheckbox.checked && moneyCheckbox.checked) {
        options.vAxis.format = '$#,##0.00';
    } else if (salaryCheckbox.checked) {
        options.vAxis.title = 'Salary';
        options.vAxis.format = '$#,##0.00';
    } else if (moneyCheckbox.checked) {
        options.vAxis.title = 'Money';
        options.vAxis.format = '$#,##0.00';
    }

    const chart = new google.visualization.LineChart(document.getElementById('chart'));

    if (salaryCheckbox.checked && moneyCheckbox.checked) {
        chart.draw(combinedData, options);
    } else if (salaryCheckbox.checked) {
        const dataTableAge = new google.visualization.DataTable();
        dataTableAge.addColumn('string', 'name');
        dataTableAge.addColumn('number', 'salary');
        dataTableAge.addRows(dataSalary);
        chart.draw(dataTableAge, options);

    } else if (moneyCheckbox.checked) {
        const dataTableMoney = new google.visualization.DataTable();
        dataTableMoney.addColumn('string', 'name');
        dataTableMoney.addColumn('number', 'money');
        dataTableMoney.addRows(dataMoney);
        chart.draw(dataTableMoney, options);
    }
}
