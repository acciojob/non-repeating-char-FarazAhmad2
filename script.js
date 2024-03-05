function firstNonRepeatedChar(str) {
 // Write your code here

	if(str.length==1) {
		return str;
	}
	
	let obj = {};

  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = (obj[str[i]] || 0) + 1;
  }
  let minvalue = 1
  for (let i in obj) {
    if (obj[i] == minvalue) {
      minvalue = obj[i];
      return i;
    }
  }
  return null;
	
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
