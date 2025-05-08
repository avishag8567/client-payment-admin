
fetch("https://localhost:5001/api/clients/summary")
    .then(res => res.json())
    .then(data => {
        const table = document.getElementById("summaryTable");
        table.innerHTML = "<tr><th>מספר לקוח</th><th>שם</th><th>טלפון</th><th>סך חוב</th></tr>" +
            data.map(c => `<tr><td>${c.clientID}</td><td>${c.fullName}</td><td>${c.phoneNumber}</td><td>${c.totalDue}</td></tr>`).join("");
    });
