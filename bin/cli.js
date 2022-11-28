#!/usr/bin/env node

const { execSync } = require('child_process')

const runCommand = command => {
  try {
    execSync(`${command}`, { stdio: 'inherit' })
  } catch (error) {
    console.error(`Falha na execução ${command}`, error)
    return false
  }
  return true
}

const repoName = process.argv[2]
const gitCheckoutCommand = `git clone --deph 1 https://github.com/alexmadeira/reactSetup-typescript ${repoName}`
const installDespCommand = `cd ${repoName} && npm install`

console.log(`clonando repositório para ${repoName}`)
const checkout = runCommand(gitCheckoutCommand)
if (!checkout) process.exit()

console.log(`instalando dependência de ${repoName}`)
const installedDeps = runCommand(installDespCommand)
if (!installedDeps) process.exit()

console.log(`Parabéns! Instalação concluída ${repoName}`)
console.log(`cd ${repoName}`)
console.log('npm start ou npm dev')
