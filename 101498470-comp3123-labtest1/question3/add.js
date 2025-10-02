const fs = require('fs');
const path = require('path');

// Define Logs directory path
const logsDir = path.join(__dirname, 'Logs');

// Create Logs directory if it doesn't exist
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
  console.log('Logs directory created.');
}

// Change current working directory to Logs
process.chdir(logsDir);

// Create 10 log files and write sample text
for (let i = 0; i < 10; i++) {
  const filename = `log${i}.txt`;
  fs.writeFileSync(filename, `This is log file number ${i}`);
  console.log(`Created file: ${filename}`);
}