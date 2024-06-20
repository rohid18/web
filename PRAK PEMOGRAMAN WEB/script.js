document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("dataForm");
    const resultTable = document.getElementById("resultTable");
    const tableBody = resultTable.querySelector("tbody");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const nim = document.getElementById("nim").value;
        const prodi = document.getElementById("prodi").value;
        const gender = document.querySelector('input[name="gender"]:checked').value;

        const newRow = document.createElement("tr");
        newRow.innerHTML = `<td>${name}</td><td>${nim}</td><td>${prodi}</td><td>${gender}</td>`;
        tableBody.appendChild(newRow);

        resultTable.style.display = "table";
        form.reset();
    });

    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.addEventListener("click", function() {
            section.style.backgroundColor = "#f0f0f0";
        });
    });
});
