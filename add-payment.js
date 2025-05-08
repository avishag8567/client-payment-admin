
function addPayment() {
    const payment = {
        clientID: parseInt(document.getElementById("clientId").value),
        paymentDate: document.getElementById("date").value,
        amount: parseFloat(document.getElementById("amount").value),
        description: document.getElementById("description").value
    };

    fetch("https://localhost:5001/api/payments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payment)
    })
    .then(res => res.ok ? alert("נוסף בהצלחה") : alert("שגיאה"))
}
