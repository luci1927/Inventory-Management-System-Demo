// app.js

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Hardcoded credentials (replace with server-side authentication later)
    if (username === 'admin' && password === 'password') {
        window.location.href = 'inventory.html';
    } else {
        document.getElementById('error-message').innerText = 'Invalid credentials';
    }
});

let inventory = [];

document.getElementById('inventoryForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const itemName = document.getElementById('itemName').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    
    if (itemName && quantity > 0) {
        // Add item to the inventory array
        inventory.push({ name: itemName, quantity });
        updateInventoryTable();
    }
});

function updateInventoryTable() {
    const tableBody = document.querySelector('#inventoryTable tbody');
    tableBody.innerHTML = '';  // Clear the table
    
    inventory.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td><button onclick="removeItem(${index})">Remove</button></td>
        `;
        tableBody.appendChild(row);
    });
}

function removeItem(index) {
    inventory.splice(index, 1);
    updateInventoryTable();
}

function generateReport() {
    const reportSection = document.getElementById('reportSection');
    reportSection.innerHTML = '';  // Clear old report
    
    inventory.forEach(item => {
        const reportItem = document.createElement('p');
        reportItem.textContent = `Item: ${item.name}, Quantity: ${item.quantity}`;
        reportSection.appendChild(reportItem);
    });
}

// Optionally call this function on `inventory.html` page unload or a button click to generate the report



