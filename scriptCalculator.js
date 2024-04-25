document.getElementById('calculate').addEventListener('click', function(){

    const txAdm = document.getElementById('txAdmConfig').value / 100;
    const iof = document.getElementById('iofConfig').value / 100;
    const value = document.getElementById('value').value;
    const fee = (document.getElementById('fee').value) / 100;
    const time = document.getElementById('time').value;

    const resultBody = document.getElementById('resultBody');
            resultBody.innerHTML = ''; // Clear previous results

            const currentDate = new Date();
            const currentMonth = currentDate.getMonth();
            const currentYear = currentDate.getFullYear();
            const currentDay = currentDate.getDate();
        
            for (let i = 0; i < time; i++) {
                const newDate = new Date(currentYear, currentMonth, currentDay);
                newDate.setMonth(newDate.getMonth() + i);
        
                const formattedDate = newDate.toLocaleDateString('pt-BR');
                
                const total = (value - (value * txAdm) - (value * iof)) * (1 + fee)**(i + 1);
                const row = document.createElement('tr');
                const monthCell = document.createElement('td');
                const valueCell = document.createElement('td');
                const valueZero = document.createElement('td');
                const valueZero2 = document.createElement('td');
        
                monthCell.textContent = formattedDate;
                valueCell.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
                valueZero.textContent = '';
                valueZero2.textContent = '';
        
                row.appendChild(monthCell);
                row.appendChild(valueZero);
                row.appendChild(valueZero2);
                row.appendChild(valueCell);
                resultBody.appendChild(row);
            }

    const total = (value - (value * txAdm) - (value * iof)) * (1 + fee)**time;

    document.getElementById('total').innerHTML = ("R$ " + total.toFixed(2).replace('.', ','));

});

document.getElementById('configPadrao').addEventListener('click', function(){
    document.getElementById('txAdmConfig').value = 1;
    document.getElementById('iofConfig').value = 1.8841;
    document.getElementById('fee').value = 1.8;
});

document.getElementById('clear').addEventListener('click', function(){
    document.getElementById('value').value = '';
    document.getElementById('time').value = '';
    document.getElementById('total').innerHTML = 'R$ 0,00';

    const resultBody = document.getElementById('resultBody');
    resultBody.innerHTML = '';
});

document.getElementById('toggleView').addEventListener('click', function() {
    const calculator = document.getElementById('calculator');
    const configuration = document.getElementById('configuration');
    const toggleButton = document.getElementById('toggleView');
    const configPadrao = document.getElementById('configPadrao');

    if (calculator.style.display !== 'none') {
        calculator.style.display = 'none';
        configuration.style.display = 'block';
        configPadrao.style.display = 'block'
    } else {
        configPadrao.style.display = 'none'
        calculator.style.display = 'block';
        configuration.style.display = 'none';
        toggleButton.textContent = 'Configuração';
    }
});

document.getElementById('toggleView2').addEventListener('click', function() {
    const calculator = document.getElementById('calculator');
    const configuration = document.getElementById('configuration');
    const toggleButton = document.getElementById('toggleView2');
    const configPadrao = document.getElementById('configPadrao');

    if (calculator.style.display !== 'none') {
        calculator.style.display = 'none';
        configuration.style.display = 'block';
        configPadrao.style.display = 'block'
    } else {
        configPadrao.style.display = 'none'
        calculator.style.display = 'block';
        configuration.style.display = 'none';
    }
});