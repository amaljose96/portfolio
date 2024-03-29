const fs = require('fs');
const path = require('path');
const {execSync} = require('child_process');

const execSyncWrapper = (command) => {
  let stdout = null;
  try {
    stdout = execSync(command).toString().trim();
  } catch (error) {
    console.error(error);
  }
  return stdout;
};

const main = () => {
  let branch = execSyncWrapper('git rev-parse --abbrev-ref HEAD');
  let time = new Date().toString().split(' ').slice(1,5).join(' '); 
  let commit = execSyncWrapper('git rev-parse --short=7 HEAD');
  let message = execSyncWrapper('git log --format=%B -n 1 $(git log -1 --pretty=format:"%h")')

  const obj = {
    branch,
    time,
    commit,
    message
  };

  const filePath = path.resolve('src/Portfolio/components/Footer', 'gitinfo.json');
  const fileContents = JSON.stringify(obj, null, 2);

  fs.writeFileSync(filePath, fileContents);
  console.log(`Wrote the following contents to ${filePath}\n${fileContents}`);
};

main();