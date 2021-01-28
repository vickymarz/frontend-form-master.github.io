const validate = event => {
	var firstInput = document.getElementById('first-name');
	var firstName = document.getElementById('first');
	var iconOne = document.getElementById('iconOne');

	var secondInput = document.getElementById('last-name');
	var lastName = document.getElementById('lastName');
	var iconTwo = document.getElementById('iconTwo');

	var thirdInput = document.getElementById('email');
	var email = document.getElementById('mail');
	var regx = /^([a-z 0-9 \. -]+)@([a-z 0-9 -]+)\.([a-z 0-9 \. -]{2,5}).([a-z 0-9]{2,8})?$/;
	var iconThree = document.getElementById('iconThree');

	var fourthInput = document.getElementById('password');
	var passWord = document.getElementById('pass-word');
	var iconFour = document.getElementById('iconFour');

	if (firstInput.value.trim() == '' || null) {
		firstName.style.display = 'block';
		iconOne.style.display = 'block';
		firstInput.style.border = 'solid 2px hsl(0, 100%, 74%)';
		return false;
	} else if (secondInput.value.trim() == '' || null) {
		lastName.style.display = 'block';
		iconTwo.style.display = 'block';
		secondInput.style.border = 'solid 2px hsl(0, 100%, 74%)';
		return false;
	} else if (regx.test(thirdInput.value) == false) {
		email.style.display = 'block';
		iconThree.style.display = 'block';
		thirdInput.style.border = 'solid 2px hsl(0, 100%, 74%)';
                thirdInput.placeholder = 'email@example/com';
                thirdInput.classList.add('place-holder');
		return false;
	} else if (fourthInput.value.trim() == '' || null) {
		passWord.style.display = 'block';
		iconFour.style.display = 'block';
		fourthInput.style.border = 'solid 2px hsl(0, 100%, 74%)';
		return false;
	} else {
		alert('Your Form has been successfully submitted')
		return true;
	}
};
