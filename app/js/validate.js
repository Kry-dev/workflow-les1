var validation =(function(){

	var init = function () {
		_setUpListtners();
	};

	var _setUpListtners = function (){
		// прослушка событий...
		$('form').on('keydown', '.has-error', _removeError);
		$('form').on('reset', _clearForm);
	};
	var _removeError = function () {
		 $(this).removeClass('has-error');  
	};

	var _clearForm = function (form) {
		 var form = $(this);
		 form.find('.input, .textarea').trigger('hideTooltip');
		 form.find('.has-error').removeClass('has-error');
	};
		// _createQtip - создает тултипы в форме 
		var _createQtip = function(element, position){
			//позиция тултипа
			if(position === 'right'){
				position = {
					my: 'left center',
					at: 'right center'}
				}else{
					position = {
						my: 'right center',
						at: 'left center',
						adjust: {
							method: 'shift none'
						}
					}	
				};
			//инициализация тултипа
			element.qtip({
				content:{
					text: function(){
						return $(this).attr('qtip-content');
					}
				},
				show: {
					event: 'show'
				},
				hide: {
					event: 'keydown hideTooltip'
				},
				position: position,
				style: {
					classes: 'qtip-rounded qtip-red',
					tip: {
						height: 13,
						width: 18

					}
				}
			}).trigger('show');
		};

		// Универсальная функция валидации всех форм
		var validateForm = function (form) {

			console.log('Привет! я в модуле валидации, проверяю форму');

			var	elements = form.find(' textarea, input').not('input[type = "file"], input[type = "hidden"]'),
			valid = true;

			$.each(elements, function (index, val){
				var element = $(val),
					val = element.val(),
					pos = element.attr('qtip-position');

				if(val.length === 0){
					element.addClass('has-error');
					_createQtip(element, pos);
					valid = false;
				}				
			}); 	

			return valid;	
		};


		return {
			init: init,
			validateForm: validateForm
		};

	})();

	validation.init();