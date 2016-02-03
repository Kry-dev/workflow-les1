$(document).ready(function() {
	
	// Проверка наличия JS, jQuery.
	console.log("js works");
	if($) {
		console.log("jQuery works");
	}
	// Функция открывает/закрывает окно Авторизации.
	var openCloseLoginPopup = function() {
		$(".lock-box").click(function() { // Нажатие на замочек.
			$(this).toggleClass("lock-box-active");
			if ($(".login-popup").hasClass("hide")) {
				$(".login-popup").removeClass("hide");
				$(".login-form").removeClass("hide");
				$(".header").addClass("unvis");
				$(".container").addClass("unvis");
				$(".footer").addClass("unvis");
			} else {
				$(".login-popup").addClass("hide");
				$(".login-form").addClass("hide");
				$(".header").removeClass("unvis");
				$(".container").removeClass("unvis");
				$(".footer").removeClass("unvis");
			}
		});

		$(".lock-text").click(function() { // Нажатие на текст рядом с замочком.
			$(".lock-box").toggleClass("lock-box-active");
			if ($(".login-popup").hasClass("hide")) {
				$(".login-popup").removeClass("hide");
				$(".login-form").removeClass("hide");
				$(".header").addClass("unvis");
				$(".container").addClass("unvis");
				$(".footer").addClass("unvis");
			} else {
				$(".login-popup").addClass("hide");
				$(".login-form").addClass("hide");
				$(".header").removeClass("unvis");
				$(".container").removeClass("unvis");
				$(".footer").removeClass("unvis");
			}
		});

		$(".login-form-window-close-x").click(function() { // Нажатие на крестик, закрывающий окошко.
			$(".lock-box").removeClass("lock-box-active");
			$(".login-popup").addClass("hide");
			$(".login-form").addClass("hide");
			$(".header").removeClass("unvis");
			$(".container").removeClass("unvis");
			$(".footer").removeClass("unvis");
		});
	};
	openCloseLoginPopup();

	// toggle функция открытия/закрытия меню.
	var openCloseMenu = function() {
		$(".mnu-button-wrap").click(function() {
			$(".arrow-up").toggleClass("hide");
			$(".nav-mnu-head").toggleClass("hide");
		});
	};

	openCloseMenu();

	// Функция, показывает окно с сообщением от успешном добавлении проекта после сабмита формы.
	var addProject = function() {
		$(".add-proj-button-input").on("submit", function() {
			$(".project-window").addClass("hide");
			$(".sucsess-window").removeClass("hide");
		});
	};
	addProject();

	// Функция открывает/закрывает окно добавления работы портфолио.
	var addProjectPopup = function() {
		$(".add-project-box").click(function() {
			$(".project-popup").removeClass("hide");
			$(".project-window").removeClass("hide");
		});
		$(".window-close-box").click(function() {
			$(".project-popup").addClass("hide");
			$(".project-window").addClass("hide");
		});
	};


	addProjectPopup();

});	
