// RESOLUCION 1
function findFirstRepeated1(gifts) {
  // Code here
  const recurrent = {}
  let minValue = 100000000
  let minKey = 0
  for (let i = 0; i < gifts.length; i++) {
    for (let j = i + 1; j < gifts.length; j++) {
      if (gifts[i] === gifts[j]) {
        recurrent[gifts[i]] = j
      }
    }
  }

  if (Object.keys(recurrent).length > 0) {
    for (let key in recurrent) {
      if (recurrent[key] < minValue) {
        minValue = recurrent[key];
        minKey = key;
      }
    }
    return minKey
  }
  return -1
}

// RESOLUCION 2
function findFirstRepeated(gifts) {
  const anteriores = {}
  for (let i = 0; i < gifts.length; i++) {
    if (anteriores[i]) {
      return gifts[i];
    }

    anteriores[gifts[i]] = true
  }
  return -1
}


const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez

// const giftIds2 = [1, 2, 3, 4]
// const firstRepeatedId2 = findFirstRepeated(giftIds2)
// console.log(firstRepeatedId2) // -1
// // Es -1 ya que no se repite ningún número

// const giftIds3 = [5, 1, 5, 1]
// const firstRepeatedId3 = findFirstRepeated(giftIds3)
// console.log(firstRepeatedId3) // 5