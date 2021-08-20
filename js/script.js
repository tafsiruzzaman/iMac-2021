function updatePrice(priceId, price) {
    document.getElementById(priceId).innerText = price;
};

function calculate () {
    const bestPrice = parseFloat(document.getElementById('best-price').innerText);
    const extraMemoryCost = parseFloat(document.getElementById('extra-ram-cost').innerText);
    const extraStorageCost = parseFloat(document.getElementById('extra-ssd-cost').innerText);
    const extraDeliveryCost = parseFloat(document.getElementById('extra-delivery-cost').innerText);
    const totalPrice = bestPrice + extraMemoryCost + extraStorageCost + extraDeliveryCost;
    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('total').innerText = totalPrice;
};

document.getElementById('ram-8gb').addEventListener('click', function () {
    updatePrice('extra-ram-cost', 0);
    calculate();
});
document.getElementById('ram-16gb').addEventListener('click', function () {
    updatePrice('extra-ram-cost', 180);
    calculate();
});
document.getElementById('ssd-250gb').addEventListener('click', function () {
    updatePrice('extra-ssd-cost', 0);
    calculate();
});
document.getElementById('ssd-500gb').addEventListener('click', function () {
    updatePrice('extra-ssd-cost', 100);
    calculate();
});
document.getElementById('ssd-1tb').addEventListener('click', function () {
    updatePrice('extra-ssd-cost', 180);
    calculate();
});
document.getElementById('free-delivery').addEventListener('click', function () {
    updatePrice('extra-delivery-cost', 0);
    calculate();
});
document.getElementById('fast-delivery').addEventListener('click', function () {
    updatePrice('extra-delivery-cost', 20);
    calculate();
});

// promo code
document.getElementById('promo-apply-btn').addEventListener('click', function () {
    const total = document.getElementById('total');
    const totalAmount = parseFloat(total.innerText);
    const promoCode = 'stevekaku';
    const usedCode = document.getElementById('promo-input').value;
    if (usedCode == promoCode) {
        const discountPrice = totalAmount - (totalAmount * (20 / 100));
        total.innerText = discountPrice;
        document.getElementById('promo-apply-btn').setAttribute('disabled', true);
        
    }
    document.getElementById('promo-input').value = '';
});