const fs = require('fs');
const path = require('path');

function InventoryManagementLog() {
    return {
        timestamp: new Date().toISOString(),
        level: "error",
        service: "inventory-management",
        productId: `PROD${Math.floor(Math.random() * 1000)}`,
        action: "reduce-stock",
        status: Math.random() > 0.5 ? "success" : "failed",
        error: Math.random() > 0.5 ? { code: "INSUFFICIENT_STOCK", message: "Not enough stock available to fulfill the order" } : undefined,
        requestedQuantity: 50,
        availableQuantity: 30
    };
}

function saveLogsToFile(logs, fileName) {
    fs.writeFileSync(fileName, JSON.stringify(logs, null, 2), 'utf8');
}

function generateAndSaveLogs() {
    const logs = [];
    for (let i = 0; i < 1000; i++) {
        logs.push(InventoryManagementLog());
    }
    const logsDir = path.join(__dirname, 'logs');
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
    }
    const filePath = path.join(logsDir, 'inventory-management-logs.json');
    saveLogsToFile(logs, filePath);
    console.log(`Generated and saved 100 logs for inventory-management to ${filePath}`);
}

generateAndSaveLogs();
