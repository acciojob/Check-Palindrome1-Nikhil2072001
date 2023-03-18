// complete the given function

function palindrome(str){
str = str.split(" ","");
	let n = str.length();
	for(let i=0;i<n;i++){
		if(str.charAt(i)!=str.charAt(n-1-i))
			return false;
	}
	return true;
}
module.exports = palindrome
