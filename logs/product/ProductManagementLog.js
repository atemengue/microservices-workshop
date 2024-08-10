const fs = require('fs');
const path = require('path');

function ProductManagementLog() {
    return {
        timestamp: new Date().toISOString(),
        level: "info",
        service: "product-management",
        productId: `PROD${Math.floor(Math.random() * 1000)}`,
        action: "update-product",
        changes: {
            price: { old: 49.99, new: 44.99 },
            stock: { old: 120, new: 100 }
        },
        status: "success",
        updatedBy: `ADMIN_USER${Math.floor(Math.random() * 10)}`
    };
}

function saveLogsToFile(logs, fileName) {
    fs.writeFileSync(fileName, JSON.stringify(logs, null, 2), 'utf8');
}

function generateAndSaveLogs() {
    const logs = [];
    for (let i = 0; i < 1000; i++) {
        logs.push(ProductManagementLog());
    }
    const logsDir = path.join(__dirname, 'logs');
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
    }
    const filePath = path.join(logsDir, 'product-management-logs.json');
    saveLogsToFile(logs, filePath);
    console.log(`Generated and saved 100 logs for product-management to ${filePath}`);
}

generateAndSaveLogs();
