const tg = window.Telegram.webApp

document.getElementById('p').innerText = `${tg.initDataUnsafe.user.first_name}`

console.log('initData', tg.initData)
console.log('initDataUnsafe', tg.initDataUnsafe)

