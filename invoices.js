
function getInvoices() {
    const name = document.getElementById("clientName").value;
    fetch(`https://74.234.81.15/ClientPaymentApi/api/invoices/by-client-name/${name}`)
        .then(res => res.json())
        .then(data => {
            const table = document.getElementById("invoicesTable");
            table.innerHTML = "<tr><th>תאריך</th><th>סכום</th><th>תיאור</th></tr>" +
                data.map(i => `<tr><td>${i.invoiceDate}</td><td>${i.amount}</td><td>${i.description}</td></tr>`).join("");
        });
}
