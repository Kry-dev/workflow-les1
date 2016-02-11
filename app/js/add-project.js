var myModule =(function(){
	// инициализация модуля...
	var init = function () {
		_setUpListtners();	
	};
	// прослушка событий...
	var _setUpListtners = function (){
		console.log('отлов событий');
		$("#add-new-work").on('click', _showPopup); // Открыть Popup добавления новго проекта..
		$("#add-new-project") .on('submit', _addNewProject);// Добавление проекта...
	};
	// Функция работает с попап-окном...
	var _showPopup = function (ev){
		console.log('модальное окно открыто');
		ev.preventDefault();  
		var divPopup = $('#popup-new-project'),
		form = divPopup.find('.form');
		divPopup.bPopup({
			speed: 650,
			transition: 'slideDown',
			onClose: function () {
				form.find ('.server-mes').text('').hide()
			}
		});
	};
	// Функция добавляет проект
	var _addNewProject = function (ev) {
		console.log('Добавление проекта...');
		ev.preventDefault();  
			// обьявление переменных
			var form = $(this),
			url = 'add_project.php',
			answerServer = _ajaxForm(form, url);

			if(answerServer){
				//запрос на сервер
				answerServer.done(function(ans) {
					var successBox = form.find('.success-mes'),
						errorBox = form.find('.error-mes');
					if (ans.status === 'OK') {
						errorBox.hide();
						successBox.text(ans.text).show();
					} else {
						successBox.hide();
						errorBox.text(ans.text).show();
					}
				});
			}
		};
	// Функция для работы с сервером.Для ее работы используются:
	//	form - форма;
	// 	url - адрес php файла, к которому мы обращаемся
	//1. собирает данные из формы 
	//2. проверяет форму
	//3. делает запрос на сервер и возвращает ответ с сервера
	var _ajaxForm = function (form , url) {
		 console.log('ajax запрос, но с проверкой')
		 if(!validation.validateForm(form)) return false;
		//если false, то код дальше не произойдет

		data = form.serialize(form, url);

		var result = $.ajax({
			url: url,
			type: 'GET',
			dataType: 'json',
			data: data
		}).fail(function(ans){
			console.log("Проблемы в PHP");
			form.find('.error-mes').text('На сервере произошла ошибка').show();
		});

		return result;


	};
	
	//возвращает обьект
	return {
		init: init
	};

})();

myModule.init();


