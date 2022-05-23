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
  return arrEncrypt
}

console.log(encrypt('1HGCM82633A004352', 'trybe'))
[165,186,192,165,178,56,50,54,51,51,65,48,48,52,51,53,50]
