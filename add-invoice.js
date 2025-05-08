
function addInvoice() {
    const invoice = {
        clientID: parseInt(document.getElementById("clientId").value),
        invoiceDate: document.getElementById("date").value,
        amount: parseFloat(document.getElementById("amount").value),
        description: document.getElementById("description").value
    };

    fetch("https://74.234.81.15/ClientPaymentApi/api/invoices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(invoice)
    })
    .then(res => res.ok ? alert("נוסף בהצלחה") : alert("שגיאה"))
}
