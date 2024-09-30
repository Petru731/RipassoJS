document.getElementById("personForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const nome = document.getElementById("nome").value;
    const cognome = document.getElementById("cognome").value;
    const email = document.getElementById("email").value;
    const dataNascita = document.getElementById("dataNascita").value;
    const telefono = document.getElementById("telefono").value;
    const paese = document.getElementById("paese").value;
    const provincia = document.getElementById("provincia").value;

    const tbody = document.getElementById("personTable").querySelector("tbody");
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${nome}</td>
        <td>${cognome}</td>
        <td>${email}</td>
        <td>${dataNascita}</td>
        <td>${telefono}</td>
        <td>${paese}</td>
        <td>${provincia}</td>
        <td class="actions">
            <button onclick="removePerson(this)">Rimuovi</button>
        </td>
    `;
    tbody.appendChild(newRow);

    document.getElementById("personForm").reset();
});

function removePerson(button) {
    const row = button.parentElement.parentElement;
    row.parentElement.removeChild(row);
}
