
function cal() {
    let currentYear = new Date(); 

    let input = new Date(document.getElementById('date').value);
    let yearOutput = currentYear.getFullYear() - input.getFullYear();
    let monthOutput = currentYear.getMonth() - input.getMonth();


    if (currentYear.getMonth() >= input.getMonth()) {

        document.getElementById('result').innerHTML = `Your age is ${yearOutput} year and ${monthOutput} months old `;

    } else if (currentYear.getMonth() < input.getMonth()) {
        
         yearOutput -=1;
         monthOutput = monthOutput +12;
        document.getElementById('result').innerHTML = `Your age is ${yearOutput} year and ${monthOutput} months old `;

    } else {
        document.getElementById('result').innerHTML = `Please enter your date of birth`;
    } 

    if(currentYear.getMonth() < input.getMonth() && currentYear.getFullYear() <= input.getFullYear()){
        document.getElementById('result').innerHTML = `Please enter correct date of birth`;
    }
    if(currentYear.getMonth() >= input.getMonth() && currentYear.getFullYear() <= input.getFullYear()){
        document.getElementById('result').innerHTML = `Please enter correct date of birth`;
    }

}