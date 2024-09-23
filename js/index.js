// Donation for card-1
document.getElementById('btn-donation-card-1').addEventListener('click', function () {
    const inputValue = getInputFieldById('input-field-card-1')
    const donationTk = getInputDonationMoney('card-1-donation-money')
    const totalAmount = getInputDonationMoney('total-amount')

    // if (inputValue > totalAmount) {
    //     alert('Invalid Donation Amount')
    //     return
    // }
    const totalDonation = inputValue + donationTk
    document.getElementById('card-1-donation-money').innerText = totalDonation
    const totalAmountIncrease = totalAmount - inputValue
    document.getElementById('total-amount').innerText = totalAmountIncrease

    // history transaction
    const divContainer = document.createElement('div')
    divContainer.innerHTML = `
     <div class="border border-gray-500 shadow-lg w-11/12 m-auto p-8 rounded-md mb-5">
        <h2 class="font-semibold text-xl">${inputValue} Taka is Donated for Flood at Noakhali, Bangladesh</h2>
        <p class="font-light text-xs mt-2">Data: ${new Date()}</p>
    </div>
    `
    document.getElementById('history-container').prepend(divContainer)
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

    // history transaction
    const divContainer = document.createElement('div')
    divContainer.innerHTML = `
     <div class="border border-gray-500 shadow-lg w-11/12 m-auto p-8 rounded-md mb-5">
        <h2 class="font-semibold text-xl">${inputValue} Taka is Donate for Flood Relief in Feni, Bangladesh</h2>
        <p class="font-light text-xs mt-2">Data: ${new Date()}</p>
    </div>
    `
    document.getElementById('history-container').prepend(divContainer)
})

// Donation for card-3
document.getElementById('btn-donation-card-3').addEventListener('click', function () {
    const inputValue = getInputFieldById('input-field-card-3')
    const donationTk = getInputDonationMoney('card-3-donation-money')
    const totalDonation = inputValue + donationTk
    document.getElementById('card-3-donation-money').innerText = totalDonation
    const totalAmount = getInputDonationMoney('total-amount')
    const totalAmountIncrease = totalAmount - inputValue
    document.getElementById('total-amount').innerText = totalAmountIncrease

    // history transaction
    const divContainer = document.createElement('div')
    divContainer.innerHTML = `
     <div class="border border-gray-500 shadow-lg w-11/12 m-auto p-8 rounded-md mb-5">
        <h2 class="font-semibold text-xl">${inputValue} Taka is Aid for Injured in the Quota Movement, Bangladesh</h2>
        <p class="font-light text-xs mt-2">Data: ${new Date()}</p>
    </div>
    `
    document.getElementById('history-container').prepend(divContainer)
})