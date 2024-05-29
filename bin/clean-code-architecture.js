#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const readline = require('readline');

function copyFolderSync(source, target) {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target);
  }
  const files = fs.readdirSync(source);
  files.forEach(file => {
    const sourcePath = path.join(source, file);
    const targetPath = path.join(target, file);
    if (fs.statSync(sourcePath).isDirectory()) {
      copyFolderSync(sourcePath, targetPath);
    } else {
      fs.copyFileSync(sourcePath, targetPath);
    }
  });
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const templatesDir = path.resolve(__dirname, '../templates');

rl.question('Enter the project name: ', (projectName) => {
  rl.close();
  console.log(`${projectName} created`);
  const targetDir = projectName || 'defualtProject';
  const sourceDir = templatesDir;
  copyFolderSync(sourceDir, targetDir);
});
