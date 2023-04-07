// Array.filter() sample

const testArray = ["aaaa", "bbbb", "cccc", "dddd", "eeee"]

testArray.filter(
    (currentValue) => { return currentValue === "cccc" }
    )

// STEP-1
// currentValue = "aaaa"
// currentValue === "cccc" = false
// return false (do not include "aaaa" in the result array)

// STEP-2
// currentValue = "bbbb"
// currentValue === "cccc" = false
// return false (do not include "bbbb" in the result array)

// STEP-3
// currentValue = "cccc"
// currentValue === "cccc" = true
// return true (include "cccc" in the result array)

// LAST STEP
// return ["cccc"]