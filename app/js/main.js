

















































// $(document).ready(function() {
	
// 	// Проверка наличия JS, jQuery.
// 	console.log("js works");
// 	if($) {
// 		console.log("jQuery works");
// 	}
// 	// Функция открывает/закрывает окно Авторизации.
// 	var openCloseLoginPopup = function() {
// 		$(".lock-box").click(function() { // Нажатие на замочек.
// 			$(this).toggleClass("lock-box-active");
// 			if ($(".login-popup").hasClass("hide")) {
// 				$(".login-popup").removeClass("hide");
// 				$(".login-form").removeClass("hide");
// 				$(".header").addClass("unvis");
// 				$(".container").addClass("unvis");
// 				$(".footer").addClass("unvis");
// 			} else {
// 				$(".login-popup").addClass("hide");
// 				$(".login-form").addClass("hide");
// 				$(".header").removeClass("unvis");
// 				$(".container").removeClass("unvis");
// 				$(".footer").removeClass("unvis");
// 			}
// 		});

// 		$(".lock-text").click(function() { // Нажатие на текст рядом с замочком.
// 			$(".lock-box").toggleClass("lock-box-active");
// 			if ($(".login-popup").hasClass("hide")) {
// 				$(".login-popup").removeClass("hide");
// 				$(".login-form").removeClass("hide");
// 				$(".header").addClass("unvis");
// 				$(".container").addClass("unvis");
// 				$(".footer").addClass("unvis");
// 			} else {
// 				$(".login-popup").addClass("hide");
// 				$(".login-form").addClass("hide");
// 				$(".header").removeClass("unvis");
// 				$(".container").removeClass("unvis");
// 				$(".footer").removeClass("unvis");
// 			}
// 		});

// 		$(".login-form-window-close-x").click(function() { // Нажатие на крестик, закрывающий окошко.
// 			$(".lock-box").removeClass("lock-box-active");
// 			$(".login-popup").addClass("hide");
// 			$(".login-form").addClass("hide");
// 			$(".header").removeClass("unvis");
// 			$(".container").removeClass("unvis");
// 			$(".footer").removeClass("unvis");
// 		});
// 	};
// 	// Функция открывает/закрывает окошко добавления работы портфолио.
// 	var addProjectPopup = function() {
// 		$(".add-project-box").click(function() {
// 			$(".project_popup").removeClass("hide");
// 			$(".project_window").removeClass("hide");
// 		});
// 		$(".project_window_close_x").click(function() {
// 			$(".project_popup").addClass("hide");
// 			$(".project_window").addClass("hide");
// 		});
// 	};
// 	// Функция, показывает окно с сообщением от успешном добавлении проекта после сабмита формы.
// 	var addProject = function() {
// 		$(".add_proj_button_input").on("submit", function() {
// 			$(".project_popup").addClass("hide");
// 			$(".sucsess_window").removeClass("hide");
// 		});
// 	};
// // Функция закрытия окна с sucsess-сообщением при нажатии на X. 
// 	var closeSucsessWindow = function() {
// 		$(".sucsess-window-close-x").click(function() {
// 			$(".project-popup").addClass("hide");
// 			$(".project-window").addClass("hide");
// 			$(".sucsess-window").addClass("hide");
// 		});
// 	};
// 	// toggle функция открытия/закрытия меню.
// 	var openCloseMenu = function() {
// 		$(".mnu-button-wrap").click(function() {
// 			$(".arrow-up").toggleClass("hide");
// 			$(".nav-mnu-head").toggleClass("hide");
// 		});
// 	};
// // Иниализация функций.
// 	openCloseMenu();

// 	closeSucsessWindow();

// 	addProject();

// 	addProjectPopup();

// 	openCloseLoginPopup();

// 	// Валидация формы обратной связи, плагин http://jqueryvalidation.org/.
// 	$("#contacts_form").validate({
// 		messages: {
// 			cont_form_name: "Введите имя",
// 			cont_form_email: {
// 				required: "Введите e-mail",
// 				email: "Не верный e-mail"
// 			},
// 			cont_form_message: "Введите сообщение",
// 			cont_form_capcha: "Введите код"
// 		}
// 	});
// 	// Функция убирает тултипы с сообщениями об ошибках и стили инпутов в статусе "ошибка", "ОК", при нажатии на кнопку "Очистить".
// 	var clearForm = function() {
// 		$(".clear_button").on("click", function() {
// 			$("#contacts_form_name").removeClass("error");
// 			$("#contacts_form_name").removeClass("valid");
// 			$("#contacts_form_name-error").remove();
// 			$("#contacts_form_email").removeClass("error");
// 			$("#contacts_form_email").removeClass("valid");
// 			$("#contacts_form_email-error").remove();
// 			$("#contacts_form_message").removeClass("error");
// 			$("#contacts_form_message").removeClass("valid");
// 			$("#contacts_form_message-error").remove();
// 			$("#contacts_form_capcha").removeClass("error");
// 			$("#contacts_form_capcha").removeClass("valid");
// 			$("#contacts_form_capcha-error").remove();
// 		});
// 	};
	
// 	// Иниализация функции.
// 	clearForm();

// 	// Валидация формы добавления работы в портфолио, плагин http://jqueryvalidation.org/.
// 	$("#portfolio_form").validate({
// 		messages: {
// 			portfolio_form_name: "Введите название",
// 			portfolio_form_url: "Введите ссылку",
// 			portfolio_form_descr: "Введите описание",
			
// 		},
// 		invalidHandler: function(event, validator) { // Сообщение об ошибке в верхней части формы при наличии ошибок ввода формы.
// 			var errors = validator.numberOfInvalids();
// 			if (errors) {
// 				$(".add_proj_error").show();
// 			} else {
// 				$(".add_proj_error").hide();
// 			}
// 		}
// 	});

// 	// Функция очистки формы добавления работы в портфолио при закрытии формы.
// 	var clearPortfolioForm = function() {
// 		$(".project_window_close_x").on("click", function() {
// 			$("#portfolio_form_name").removeClass("error");
// 			$("#portfolio_form_name").removeClass("valid");
// 			$("#portfolio_form_name-error").remove();
// 			$("#portfolio_form_url").removeClass("error");
// 			$("#portfolio_form_url").removeClass("valid");
// 			$("#portfolio_form_url-error").remove();
// 			$("#portfolio_form_descr").removeClass("error");
// 			$("#portfolio_form_descr").removeClass("valid");
// 			$("#portfolio_form_descr-error").remove();
// 			$(".add_proj_error").attr('style', '');
// 		});
// 	};

// 	clearPortfolioForm();

// 	// Прослушка события: изменение инпута загрузки файла.
// 	var setUpListnerFileupload = function (){
// 		$('#fileupload').on('change', changefileUpload);
// 	};

// 	// Функция добавления имени файла в инпут "filename".
// 	var changefileUpload = function (){
// 		var 
// 			input = $(this), // Инпут type="file"
// 			name = input[0].files[0].name; // Имя загруженного файла
// 		$('#filename').val(name) // Добавление имени в инпут "filename".
// 	};

// 	setUpListnerFileupload();

// 	changefileUpload();

// });	
