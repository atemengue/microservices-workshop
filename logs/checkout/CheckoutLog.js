const fs = require('fs');
const path = require('path');

function CheckoutLog() {
    return {
        timestamp: new Date().toISOString(),
        level: "warn",
        service: "checkout",
        orderId: `ORD${Math.floor(Math.random() * 1000000)}`,
        userId: `USER${Math.floor(Math.random() * 10000)}`,
        action: "process-payment",
        status: Math.random() > 0.5 ? "success" : "failed",
        error: Math.random() > 0.5 ? { code: "PAYMENT_DECLINED", message: "Insufficient funds" } : undefined,
        paymentAttempt: { method: "debit-card", cardLastFourDigits: "6789" },
        cartTotal: 59.99,
        currency: "USD"
    };
}

function saveLogsToFile(logs, fileName) {
    fs.writeFileSync(fileName, JSON.stringify(logs, null, 2), 'utf8');
}

function generateAndSaveLogs() {
    const logs = [];
    for (let i = 0; i < 1000; i++) {
        logs.push(CheckoutLog());
    }
    const logsDir = path.join(__dirname, 'logs');
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
    }
    const filePath = path.join(logsDir, 'checkout-logs.json');
    saveLogsToFile(logs, filePath);
    console.log(`Generated and saved 100 logs for checkout to ${filePath}`);
}

generateAndSaveLogs();
