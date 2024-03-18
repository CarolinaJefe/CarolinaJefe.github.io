const addSalaryBtn = document.getElementById('add-salary-btn');
const modifySalaryBtn = document.getElementById('modify-salary-btn');
const displaySalaryBtn = document.getElementById('display-salary-btn');
const displayResultsBtn = document.getElementById('display-results-btn');

const salaryName = document.getElementById('add-salary-name');
const salaryNumber = document.getElementById('add-salary-number');

const peopleSelect = document.getElementById('people-select');
const modifySalaryNumber = document.getElementById('modify-salary-number');

const resultsDiv = document.getElementById('results');

const resultsTable = document.getElementById('results_table_placeholder');

let person = [];
let salaries = [];
const nameRegex = /^[a-zA-Z]+$/;

const addSalary = () => {
    const salary = Number(salaryNumber.value);

    if (!nameRegex.test(salaryName.value) || !salary) {
        if (!nameRegex.test(salaryName.value)) {
            alert('Name must only contain letters!');
        } else {
            alert('Must insert all fields!');
        }
        return;
    }

    person.push(salaryName.value);
    salaries.push(salary);
    
    peopleSelect.innerHTML += `<option value="${salaryName.value}">${salaryName.value}</option>`
    salaryName.value = '';
    salaryNumber.value = '';
    salaryName.focus();
}

const modifySalary = () => {
    const salary = Number(modifySalary);

    if (salary) {
        salaries[peopleSelect.selectedIndex] = modifySalaryNumber.value;
    } else {
        alert('Non-numeric value detected!');
    }
}

const displaySalary = () => {
    let tableData = ``;
    for (let i = 0; i < person.length; i++) {
        tableData += 
        `
        <tr>
            <td>${person[i]}</td>
            <td>$${salaries[i]}</td>
        </tr>
        `
    }

    resultsTable.innerHTML = 
    `
    <h3>Result Table</h3>
    <div class="container">
        <table class="custom-table" id="results_table">
            <tr>
                <th>Name</th>
                <th>Salary</th>
            </tr>
    
            ${tableData}
        </table>
    </div>
    `
}


const displayResults = () => {
    const average = salaries.reduce((acc, cur) => acc + cur, 0) / salaries.length;
    const highest = Math.max(...salaries);

    resultsDiv.innerHTML =
    `
    <h2>Result</h2>
    <p>Average: ${average}</p>
    <p>Highest: ${highest}</p>
    `
}

document.addEventListener('DOMContentLoaded', function() {
    salaryName.focus();
});

addSalaryBtn.addEventListener('click', addSalary);
modifySalaryBtn.addEventListener('click', modifySalary);
displaySalaryBtn.addEventListener('click', displaySalary);
displayResultsBtn.addEventListener('click', displayResults);