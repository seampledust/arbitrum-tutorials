const config = require('./hardhat.config.js')

const wait = (ms = 0) => {
  return new Promise(res => setTimeout(res, ms || 0))
}

const arbLog = async text => {
  let str = '🔵'
  for (let i = 0; i < 25; i++) {
    await wait(40)
    if (i == 12) {
      str = `🔵${'🔵'.repeat(i)}🔵`
    } else {
      str = `🔵${' '.repeat(i * 2)}🔵`
    }
    while (str.length < 60) {
      str = ` ${str} `
    }
    str = str

    console.log(str)
  }

  console.log('Arbitrum Demo:', text)
  await wait(2000)

  console.log('Lets')
  await wait(1000)

  console.log('Go ➡️')
  await wait(1000)
  console.log('...🚀')
  await wait(1000)
  console.log('')
}

module.exports = {
  arbLog,
  hardhatConfig: config,
}
