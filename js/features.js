// History Button Click

document.getElementById('btn-history').addEventListener('click', function () {
    // History Button
    const historyButton = document.getElementById('btn-history')
    historyButton.classList.remove('text-gray-500', 'border', 'border-gray-400')
    historyButton.classList.add('bg-[#B4F461]', 'text-black');
    document.getElementById('donation-container').classList.add('hidden')
    document.getElementById('history-container').classList.remove('hidden')

    // Donation Button
    const donationButton = document.getElementById('btn-donation');
    donationButton.classList.remove('bg-[#B4F461]', 'text-black');
    donationButton.classList.add('text-gray-500', 'border', 'border-gray-400')
})

// Donation Button Click

document.getElementById('btn-donation').addEventListener('click', function () {
    // Donation Button
    const donationButton = document.getElementById('btn-donation');
    donationButton.classList.add('bg-[#B4F461]', 'text-black')
    donationButton.classList.remove('text-gray-500', 'border', 'border-gray-400')
    document.getElementById('donation-container').classList.remove('hidden')
    document.getElementById('history-container').classList.add('hidden')

    // History Button
    const historyButton = document.getElementById('btn-history');
    historyButton.classList.remove('bg-[#B4F461]', 'text-black');
    historyButton.classList.add('text-gray-500', 'border', 'border-gray-400')
})