const fs = require('fs');
const path = require('path');

// Define Logs directory path
const logsDir = path.join(__dirname, 'Logs');

// Check if Logs directory exists
if (fs.existsSync(logsDir)) {
  // Read all files in Logs directory
  const files = fs.readdirSync(logsDir);

  // Delete each file and log its name
  files.forEach(file => {
    const filePath = path.join(logsDir, file);
    fs.unlinkSync(filePath);
    console.log(`delete files ... ${file}`);
  });

  // Remove Logs directory
  fs.rmdirSync(logsDir);
  console.log('Logs directory removed.');
} else {
  console.log('Logs directory does not exist.');
}