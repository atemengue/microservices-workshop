const fs = require('fs');
const path = require('path');

function OrderManagementLog() {
    return {
        timestamp: new Date().toISOString(),
        level: "info",
        service: "order-management",
        orderId: `ORD${Math.floor(Math.random() * 1000000)}`,
        userId: `USER${Math.floor(Math.random() * 10000)}`,
        action: "create-order",
        status: "success",
        items: [
            { productId: "PROD001", quantity: 2, price: 29.99 },
            { productId: "PROD002", quantity: 1, price: 99.99 }
        ],
        totalAmount: 159.97,
        paymentMethod: "credit-card",
        shippingAddress: "123 Main St, Anytown, USA"
    };
}

function saveLogsToFile(logs, fileName) {
    fs.writeFileSync(fileName, JSON.stringify(logs, null, 2), 'utf8');
}

function generateAndSaveLogs() {
    const logs = [];
    for (let i = 0; i < 1000; i++) {
        logs.push(OrderManagementLog());
    }
    const logsDir = path.join(__dirname, 'logs');
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
    }
    const filePath = path.join(logsDir, 'order-management-logs.json');
    saveLogsToFile(logs, filePath);
    console.log(`Generated and saved 100 logs for order-management to ${filePath}`);
}

generateAndSaveLogs();
