async function myAsyncFunction() {
  try {
    const result1 = await asyncFunction1();
    const result2 = await asyncFunction2(result1);
    const result3 = await asyncFunction3(result2);
    // Use result3 here
  } catch (error) {
    // Handle errors
  }
}
