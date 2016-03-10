$(document).ready(function() {
	
	var openCloseMenu = function() {  // toggle функция открытия/закрытия меню для адаптивной версии.
			$(".mnu-button-wrap").click(function() {
				$(".arrow-up").toggleClass("hide");
				$(".nav-mnu-head").toggleClass("hide");
			});
	};
	openCloseMenu();
/*
 * * * УПРАВЛЕНИЕ ФОРМАМИ 
 */
	(function() {

		var listFiles = [];
			publicMethod();
			init();
			attachEvents();
		
		function init() {
			listFiles = _initFileUpload();
		};
		
		function attachEvents(){
			// Loads input[file] text to fake field 
			$('#project-file').change( _loadText );
			// Inits form processing on submit
			$('form').on('submit', function (e) {
				e.preventDefault();
				_processForm(this);
				});
		};

		// Hides success and error messages
		$('.server-message').on('click', function () {
				$(this).fadeOut(100);
		});

		function $showTooltip (object, content, atPos) {
			var myPos = 'right';
			if (atPos == 'right') {
				myPos = 'left';
				}
			object.qtip ({
						content: content,
						position: {
							my: myPos +' center',	// my position...
							at: atPos +' center' // at the ...
							
						},
						style: {
							classes: 'qtip-red qtip-shadow qtip-rounded qtip-mine',
							tip: {
								height: 13,
								width: 18
							}
						},
						show: {
                       		ready: true,
                       		event: false
                   		},
						hide: {
							distance: 30, // Hide it after we move 15 pixels away from the origin
							delay: 100,
							event: 'focus keydown click mouseenter'
						}
					})
		};

		function _initFileUpload () {
			$('#project-file').fileupload({
				url: 'UploadHandler.php',
				dataType: 'json',
				replaceFileInput: false,
				maxNumberOfFiles: 1,
				add: function(e, data) {
					if (!~data.files[0].type.indexOf('image')) {
						$showTooltip($(this), 'только картинка', 'left');
					} else 
					if (data.files[0].size > 5000000) {
						$showTooltip($(this), 'Файл слишком большой', 'left');
					} else {
						data.submit();
					}
				},
				done: function (e, data) {
						var fileName = data.files[0].name;
							$('#project-file-name').val(fileName);
						}
			})	
		};

		function _loadText () {		 
			var fileName = $(this).val(),
				namePos,
				fileNameCut;

			if (fileName.lastIndexOf('\\')) {
				namePos = fileName.lastIndexOf('\\')+1;
			} else {
				namePos = fileName.lastIndexOf('/')+1;
			}	

			fileNameCut = fileName.slice(namePos);

			$(this).siblings('.project-upload-field').html(fileNameCut);
		};
	 
		function _processForm (form) {			
			var inputsGroup = $(form).find('.required');
			inputsGroup.each(function() {
				if ( $(this).val() === '' ) {
					var 
						thisElem = $(this),
						atPos = $(this).attr('data-position'),
						myPos = 'right';

					if (atPos == 'right') {
						myPos = 'left';
					}
					thisElem.addClass('field-error');
					thisElem.parent('.project-upload-input').addClass('field-error');

					// Calling qTip2 
					thisElem.qtip({ 
						content: {
							attr: 'data-tooltip' 
						},
						style: {
							classes: 'qtip-red qtip-shadow qtip-rounded'
						},
						position: {
							my: myPos +' left center',	// Position my...
							at: atPos +' center',	// at the ...
							
						},
						show: {
							ready: true,
							event: false
						},
						hide: {
							delay: 100,
							event: 'focus keydown click'
						},
						events: {
	                        hide: (function() {
	                        	thisElem.removeClass('field-error');
	                        	thisElem.parent('.project-upload-input').removeClass('field-error');
	                            thisElem.parent('.project-file').removeClass('field-error');
	                        })
                    	}
					})
				} 
			});
			if (!inputsGroup.hasClass('field-error')){
				console.log('Форма прошла валидацию');
				_ajaxForm(form);
			}
		};			

		function _ajaxForm (form) {
			var data = $(form).serializeArray();
		
			$.ajax({
				 url: 'controlForm.php', // куда идет запрос
				 type: 'post', // тип запроса
				 dataType: 'json',
				 data: data	 
			})
				.fail(function(ans) {
					$('.error-message').text('ошибка На сервере').show();
					$('.error-message').fadeIn(350);
					console.log(ans.object);
				})
				.success(function(ans) {
					$('.success-message').text('Успешно!!');
					$('.success-message').fadeIn(350);
					console.log(ans.object);

					$(form).find('input, textarea').on('focus', function () {
						$(form).find('.server-message').fadeOut(350);
					});

					_clearForm(form);
				});
		};
		function _clearForm(form, span) {
			$(form).find('input, textarea').val('');
        	$(form).find('.project-upload-field').text('Загрузите изображение');

			if ($(form).find('.capcha').length) {
				capcha.reset();
				form.trigger('reset');
				$('.input').removeClass('field-error').trigger('reset');
			}
		};
		function publicMethod() {};
	})();

/*
 * * * POPUP УПРАВЛЕНИЕ
 */
(function() {
	var popup;

		publicMethod();
		init();
		attachEvents();
	
	function init() {};
	
	function attachEvents() {
		$("[data-popup-open]").on('click', showPopup);
		 $('.popup').on('mouseup', closePopup);
	};
	function showPopup  (ev){
		ev.preventDefault();  
		var targeted_popup_class = $(this).attr('data-popup-open');
	    $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

	    if (showPopup) {
	    	$('.popup-wrapper').addClass('body-shadow');
	    	}
	    };

	function closePopup (ev) {
		ev.preventDefault();
		var $target = $(ev.target);
		if ($target.attr('class')=='popup' || $target.attr('class')=='b-close') {
			$('.popup').fadeOut(350);
			$('.qtip').hide();
			$('.input').removeClass('field-error');
			$('.error-message').text('');
			$('.server-message').hide();
			}
	};
	
	function publicMethod() {};
})();

});
