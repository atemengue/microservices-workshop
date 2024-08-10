const fs = require('fs');
const path = require('path');

function SubscriptionNotificationLog() {
    return {
        timestamp: new Date().toISOString(),
        level: "info",
        service: "subscription-notification",
        userId: `USER${Math.floor(Math.random() * 
            10000)}, subscriptionId: SUBS${Math.floor(Math.random() * 100000)}`,
            action:   "renewal ok ",
            status:  "success" ,
            notificationType: "email",
            sentAt: new Date().toISOString(),
            email: "user@example.com"
            };
            }
            
            function saveLogsToFile(logs, fileName) {
            fs.writeFileSync(fileName, JSON.stringify(logs, null, 2), 'utf8');
            }
            
            function generateAndSaveLogs() {
            const logs = [];
            for (let i = 0; i < 1000; i++) {
            logs.push(SubscriptionNotificationLog());
            }
            const logsDir = path.join(__dirname, 'logs');
            if (!fs.existsSync(logsDir)) {
            fs.mkdirSync(logsDir);
            }
            const filePath = path.join(logsDir, 'subscription-notification-logs.json');
            saveLogsToFile(logs, filePath);
            console.log('ici je genere plus de 30 logs sur la subcription ');
            }
            
            generateAndSaveLogs();