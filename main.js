// Initialize Firebase
var config = {
	apiKey: "AIzaSyDdggbXb7UPyVtcA--4B-XqsYczUHsHd3g",
	authDomain: "contact-form-9f4d2.firebaseapp.com",
	databaseURL: "https://contact-form-9f4d2.firebaseio.com",
	projectId: "contact-form-9f4d2",
	storageBucket: "contact-form-9f4d2.appspot.com",
	messagingSenderId: "26508854927"
};
firebase.initializeApp(config);

// 创建一个collection
var messageRef = firebase.database().ref('message');

//添加submit事件
document.getElementById('contactForm').addEventListener("submit",submitForm);

function submitForm(e){
	e.preventDefault();
	
	var name = getInputValue('name');
	var company = getInputValue('company');
	var email = getInputValue('email');
	var phone = getInputValue('phone');
	var message = getInputValue('message');

	// console.log(name);
	// 存储数据
	saveMessage(name,company,email,phone,message);

	// 展示alert
	document.querySelector(".alert").style.display = "block";

	//三秒后消失alert 
	setTimeout(function(){
		document.querySelector(".alert").style.display = "none";
	},3000);

	//清除表单
	document.getElementById('contactForm').reset();
}

function getInputValue(id){
	return document.getElementById(id).value;
}

function saveMessage(name,company,email,phone,message){
	messageRef.push({
		name:name,
		company:company,
		email:email,
		phone:phone,
		message:message
	});
}