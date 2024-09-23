function getInputFieldById(id) {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    const inputNumber = parseFloat(inputValue)
    inputField.value=''
    return inputNumber
}

function getInputDonationMoney(id){
    const inputText=document.getElementById(id).innerText
    const inputValue=parseFloat(inputText)
    return inputValue
}