function bonAppetit(bill, k, b) {
    bill.splice(k, 1)
    const brianActualBill = bill.reduce((total, curr) => total + curr)/2
    console.log(b - brianActualBill === 0 ? "Bon Appetit" : b - brianActualBill)
}   