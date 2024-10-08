// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Inventory Form Submission
    const inventoryForm = document.getElementById('inventoryForm');
    const inventoryTableBody = document.querySelector('#inventoryTable tbody');

    inventoryForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const itemName = document.getElementById('itemName').value;
        const quantity = document.getElementById('quantity').value;

        if (itemName && quantity) {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${itemName}</td>
                <td>${quantity}</td>
                <td><button class="btn btn-danger btn-sm delete-btn">Delete</button></td>
            `;
            inventoryTableBody.appendChild(newRow);
            inventoryForm.reset();

            // Delete Button
            newRow.querySelector('.delete-btn').addEventListener('click', function () {
                newRow.remove();
            });
        }
    });
});
