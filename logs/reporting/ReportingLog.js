const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

function ReportingLog() {
    return {
        timestamp: new Date().toISOString(),
        service: "reporting",
        reportId: `REP${uuidv4()}`,
        reportType: "sales-summary",
        period: { start: "2024-07-01", end: "2024-09-30" },
        generatedBy: "SYSTEM_ecommerce_workshop",
        status: "completed",
        salesTotal: `${Math.floor(Math.random() * 100000)}fcfa`,        currency: "USD",
        generatedAt: new Date().toISOString()
    };
}

function saveLogsToFile(logs, fileName) {
    fs.writeFileSync(fileName, JSON.stringify(logs, null, 2), 'utf8');
}

function generateAndSaveLogs() {
    const logs = [];
    for (let i = 0; i < 1000; i++) {
        logs.push(ReportingLog());
    }
    const logsDir = path.join(__dirname, 'logs');
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
    }
    const filePath = path.join(logsDir, 'reporting-logs.json');
    saveLogsToFile(logs, filePath);
    console.log(`ici je genere plus de 100 logs sur les reporting `);
}

generateAndSaveLogs();
