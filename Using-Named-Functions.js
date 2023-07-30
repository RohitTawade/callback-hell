function onResult1(result1) {
  asyncFunction2(result1, onResult2);
}

function onResult2(result2) {
  asyncFunction3(result2, onResult3);
}

function onResult3(result3) {
  // Use result3 here
}

asyncFunction1(onResult1);
