const encrypt = [165,186,192,165,178,56,50,54,51,51,65,48,48,52,51,53,50]
const decrypt = (crypt, secretKey) => {
  let arrSKey = []
  let result = []
  let skeyCrypt = secretKey.split('').forEach((cc, i) => arrSKey.push(secretKey.charCodeAt(i)))
  crypt.forEach((cc, i) => {
    if (arrSKey.length < crypt.length) {
      arrSKey.push(0)
    }
    result.push(cc - arrSKey[i])
  })
  let decryptS = []
  result.forEach((cc, i) => decryptS.push(String.fromCharCode(result[i])))
  return decryptS.join('')
}

console.log(decrypt(encrypt, 'trybe'))
// "1HGCM82633A004352"
