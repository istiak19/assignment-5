// Donation for card-1
document.getElementById('btn-donation-card-1').addEventListener('click', function () {
    const inputValue = getInputFieldById('input-field-card-1')
    const donationTk = getInputDonationMoney('card-1-donation-money')
    const totalDonation = inputValue + donationTk
    document.getElementById('card-1-donation-money').innerText = totalDonation
    const totalAmount = getInputDonationMoney('total-amount')
    const totalAmountIncrease = totalAmount - inputValue
    document.getElementById('total-amount').innerText = totalAmountIncrease
})

// Donation for card-2
document.getElementById('btn-donation-card-2').addEventListener('click', function () {
    const inputValue = getInputFieldById('input-field-card-2')
    const donationTk = getInputDonationMoney('card-2-donation-money')
    const totalDonation = inputValue + donationTk
    document.getElementById('card-2-donation-money').innerText = totalDonation
    const totalAmount = getInputDonationMoney('total-amount')
    const totalAmountIncrease = totalAmount - inputValue
    document.getElementById('total-amount').innerText = totalAmountIncrease
})

// Donation for card-3
document.getElementById('btn-donation-card-3').addEventListener('click',function(){
    const inputValue = getInputFieldById('input-field-card-3')
    const donationTk = getInputDonationMoney('card-3-donation-money')
    const totalDonation = inputValue + donationTk
    document.getElementById('card-3-donation-money').innerText = totalDonation
    const totalAmount = getInputDonationMoney('total-amount')
    const totalAmountIncrease = totalAmount - inputValue
    document.getElementById('total-amount').innerText = totalAmountIncrease
})