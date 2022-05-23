const encrypt = (vNumber, secretKey) => {
  let arrVNumb = vNumber.split('')
  let arrSKey = secretKey.split('')
  let arrEncrypt = []
  arrVNumb.forEach((cc, i) => arrEncrypt.push(vNumber.charCodeAt(i)))
  arrSKey.forEach((cc, i) => {
    if (arrSKey.length > arrVNumb) {
      arrSKey.pop()
    }
    else {
    arrEncrypt[i] += secretKey.charCodeAt(i)
    }
  })
  return arrEncrypt.join('')
}

console.log(encrypt('1HGCM82633A004352', 'trybe'))
// 165186192165178565054515165484852515350
