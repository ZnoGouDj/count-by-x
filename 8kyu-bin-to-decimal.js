/*
Complete the function which converts a binary number (given as a string) to a decimal number.

Test.describe("Example Tests", _ => {
  [ ["1",1], ["0",0], ["1001001", 73] ].forEach( ([inp, exp]) => Test.assertEquals( binToDec(inp), exp ) )
});
*/

function binToDec(bin){
    return parseInt(bin, 2);
}
//another mine
const binToDec = (bin) => parseInt(bin, 2);

