
const apiUrl = "https://74.234.81.15/ClientPaymentApi/api/clients";

document.getElementById("searchName").addEventListener("input", searchByName);
document.getElementById("searchPhone").addEventListener("input", searchByPhone);

function fetchAllClients() {
    fetch(apiUrl)
        .then(res => res.json())
        .then(showClients);
}

function showClients(clients) {
    const table = document.getElementById("clientsTable");
    table.innerHTML = "<tr><th>מספר לקוח</th><th>שם</th><th>טלפון</th></tr>" +
        clients.map(c => `<tr><td>${c.clientID}</td><td>${c.fullName}</td><td>${c.phoneNumber}</td></tr>`).join("");
}

function searchByName() {
    const val = document.getElementById("searchName").value;
    if (!val) return fetchAllClients();
    fetch(apiUrl + "/by-name/" + val)
        .then(res => res.json())
        .then(showClients);
}

function searchByPhone() {
    const val = document.getElementById("searchPhone").value;
    if (!val) return fetchAllClients();
    fetch(apiUrl + "/by-phone/" + val)
        .then(res => res.json())
        .then(showClients);
}

fetchAllClients();
