$(document).on('ready',function(){

$('.level1 ul, .level2 ul, .level3 ul, .level4 ul').addClass('oculto');




menu = false;
submenu = false;
submenu2 = false;
submenu3 = false;

eventmenu = false;
eventsubmenu = false;
eventsubmenu2 = false;
eventsubmenu3 = false;

	$('.level1').click(function(){
		console.log('Entra Level 1');
		if(eventmenu == false){
		if(menu == false){	
			$('.level1').find('ul').removeClass('open');
		    currentMenu = this;
			$(this).find('ul').addClass('open');
			$('.level2 ul, .level3 ul, .level4 ul').removeClass('open');
			menu = true;
		}else{
		CThis = this;
		console.log(currentMenu+','+CThis);
		    if(currentMenu === CThis ){
			    $('.level1').find('ul').removeClass('open');
			    menu = false;
			    
		    }else{
			    $('.level1').find('ul').removeClass('open');
			    $(this).find('ul').addClass('open');
			    currentMenu = this;
			    $('.level2 ul, .level3 ul, .level4 ul').removeClass('open');
			    menu = true;
		    }
			console.log('menu:' +menu);
			console.log('Submenu:'+ submenu);
			console.log('Submenu2:' +submenu2);
			
			//menu = false;
			//console.log(currentMenu+','+CThis);
		}
		}
		
		eventmenu = false;
	});
	
	
	
	$('.level2').click(function(){
	console.log('Entra Level 2');
	if(eventsubmenu == false){
	console.log(menu);
		if(submenu == false){
		currentSubMenu = this;
			$(this).find('ul').addClass('open');
			console.log(this)
			submenu = true;
			$('.level3 ul, .level4 ul').removeClass('open');
		}else{
		CThis2 = this;
		    if(currentSubMenu === CThis2 ){
			    $('.level2').find('ul').removeClass('open');
			    submenu = false;
			    
		    }else{
			    $('.level2').find('ul').removeClass('open');
			    $(this).find('ul').addClass('open');
			    currentSubMenu = this;
			    $('.level3 ul, .level4 ul').removeClass('open');
			    submenu = true;
		    }
			//$('.level2').find('ul').removeClass('open');
			console.log(this)
			console.log('menu:' +menu);
			console.log('Submenu:'+ submenu);
			console.log('Submenu2:' +submenu2);	
		
			//submenu = false;

		}
		eventmenu = true;
	}
	eventsubmenu = false;
	});
	
	
	$('.level3').click(function(){
	if(eventsubmenu2 == false){
		if(submenu2 == false){
		currentSubMenu2 = this;
			$(this).find('ul').addClass('open');
			submenu2 = true;
			$('.level4 ul').removeClass('open');
						console.log('menu:' +menu);
			console.log('Submenu:'+ submenu);
			console.log('Submenu2:' +submenu2);
		}else{
		CThis3 = this;
		    if(currentSubMenu2 === CThis2 ){
			    $('.level3').find('ul').removeClass('open');
			    submenu2 = false;
			    
		    }else{
			    $('.level3').find('ul').removeClass('open');
			    $(this).find('ul').addClass('open');
			    currentSubMenu2 = this;
			    $('.level4 ul').removeClass('open');
			    submenu2 = true;
		    }
			//$(this).find('ul').removeClass('open');
			console.log('menu:' +menu);
			console.log('Submenu:'+ submenu);
			console.log('Submenu2:' +submenu2);
			
			//submenu2 = false;
		}
		eventsubmenu = true;
		eventmenu = true;
	}
	eventsubmenu2 = false;
	});
	
	
	
	$('.level4').click(function(){
	if(eventsubmenu3 == false){
		if(submenu3 == false){
			$(this).find('ul').addClass('open');
			submenu3 = true;
			console.log('menu:' +menu);
			console.log('Submenu:'+ submenu);
			console.log('Submenu2:' +submenu2);
		}else{
			$(this).find('ul').removeClass('open');
			console.log('menu:' +menu);
			console.log('Submenu:'+ submenu);
			console.log('Submenu2:' +submenu2);
			
			submenu3 = false;
		}
		eventsubmenu2 = true;
		eventsubmenu = true;
		eventmenu = true;
	}
	eventsubmenu3 = false;
	});	
	
	var url1 = '<li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="http://www.ficohsasustentabilidad.org/anexos/">Iniciativas y Compromisos 2013</a></li>';
	var url2 = '<li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="http://www.ficohsasustentabilidad.org/indice-de-contenidos-gri-g3/">Indice de contenidos GRI (G3)</a></li>';
	var url3 = '<li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="http://www.ficohsasustentabilidad.org/verificacion-externa/">Verificaci&oacute;n Externa</a></li>';
	var url4 = '<li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="http://www.ficohsasustentabilidad.org/global-reporting-initiative-2/">Global Reporting Initiative</a></li>';
	var url5 = '<li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="http://www.ficohsasustentabilidad.org/2232-2/">Informaci&oacute;n de contacto</a></li>';

	
	$('.anexos').addClass('menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children');
	$('.anexos').append('<ul class="sub-menu oculto">'+url1+url2+url3+url4+url5+'</ul>');

	console.log(document.URL);
	$( "a" ).each(function() {
	  if(document.URL == $(this).attr('href')){
	  	console.log('Cambio de color');
	  	$(this).css('cssText','color: #F7931D !important;');
	  	//Conose el Nivel
	  	if($(this).parent().parent().parent().attr('class').indexOf('level1') != -1){
	  		//Parent Level 1: a li ul.sub-menu li.level1
	  		$(this).parent().parent().removeClass('oculto');
	  		$(this).parent().parent().addClass('open');
	  	}
	  	else if($(this).parent().parent().parent().attr('class').indexOf('level2') != -1){
	  		//Parent Level 2: a li ul.sub-menu li.level2 ul.sub-menu li.level1
	  		$(this).parent().parent().parent().parent().removeClass('oculto');
	  		$(this).parent().parent().parent().parent().addClass('open');

	  		$(this).parent().parent().removeClass('oculto');
	  		$(this).parent().parent().addClass('open');
	  	}
	  	else if($(this).parent().parent().parent().attr('class').indexOf('level3') != -1){
	  		//Parent Level 2: a li ul.sub-menu li.level3 ul.sub-menu li.level2 ul.sub-menu li.level1
	  		$(this).parent().parent().parent().parent().parent().parent().removeClass('oculto');
	  		$(this).parent().parent().parent().parent().parent().parent().addClass('open');

	  		$(this).parent().parent().parent().parent().removeClass('oculto');
	  		$(this).parent().parent().parent().parent().addClass('open');

	  		$(this).parent().parent().removeClass('oculto');
	  		$(this).parent().parent().addClass('open');
	  	}
	  	else if($(this).parent().parent().parent().attr('class').indexOf('level4') != -1){
	  		//Parent Level 2: a li ul.sub-menu li.level4 ul.sub-menu li.level3 ul.sub-menu li.level2 ul.sub-menu li.level1
	  		$(this).parent().parent().parent().parent().parent().parent().parent().parent().removeClass('oculto');
	  		$(this).parent().parent().parent().parent().parent().parent().parent().parent().addClass('open');

	  		$(this).parent().parent().parent().parent().parent().parent().removeClass('oculto');
	  		$(this).parent().parent().parent().parent().parent().parent().addClass('open');

	  		$(this).parent().parent().parent().parent().removeClass('oculto');
	  		$(this).parent().parent().parent().parent().addClass('open');

	  		$(this).parent().parent().removeClass('oculto');
	  		$(this).parent().parent().addClass('open');
	  	}
	  }
	});

});