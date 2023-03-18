// complete the given function

function palindrome(str){
// str = str.split(" ","");
	str=str.toLowerCase();
	let n = str.length();
	for(let i=0;i<n/2;i++){
		if(str.charAt(i)!=str.charAt(n-1-i))
			return false;
	}
	return true;
}
module.exports = palindrome
//  const string = str.toLowerCase();
//  const len = str.length;

//     // loop through half of the string
//     for (let i = 0; i < len / 2; i++) {

//         // check if first and last string are same
//         if (string[i] !== string[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }
// module.exports = palindrome
