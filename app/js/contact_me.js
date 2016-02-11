var contactMe =(function(){

	var init = function () {
		_setUpListtners();
	};

	var _setUpListtners = function (){
		// прослушка событий...
		$('#contacts_form').on("submit", _submitForm);
		};

	var _submitForm = function(ev){
		console.log('Отправка формы')
		ev.preventDefault();

		var form = $(this),
				url = "contactme.php",
				defObj = _ajaxForm(form, url);
				// что-то будем делать с ответом с сервера defObj
	};

	var _ajaxForm = function (form , url) {
		console.log('ajax запрос, но с проверкой')
		if(!validation.validateForm(form)) return false;
		//если false, то код дальше не произойдет
	};

	return {
		init: init
	};

})();

contactMe.init();