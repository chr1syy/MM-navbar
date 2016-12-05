/* Weather-Button */


Module.register("MM-navbar",{

	getScripts: function(){
		return ["modules/MM-navbar/jquery-3.1.1.js"];
	},
	getStyles: function(){
		return ["weather-icons.css", "navbar.css"];
	},
	getDom: function(){

		var wrapper = document.createElement("div");

		var weatherbutton = document.createElement("span");
		var calendarbutton = document.createElement("span");
		var newsbutton = document.createElement("span");

		var weatherhidden = false;
		var calendarhidden = false;
		var newshidden = false;
		
		weatherbutton.className = "wi wi-day-rain-mix navbar";
		calendarbutton.className = "navbar";	
		newsbutton.className = "navbar";		

		calendarbutton.innerHTML = "Kalender";
		newsbutton.innerHTML = "News";
				
		var forecast = MM.getModules().withClass('weatherforecast');
		var weather = MM.getModules().withClass('currentweather');
		var calendar = MM.getModules().withClass('calendar');
		var news = MM.getModules().withClass('newsfeed');
	
		wrapper.appendChild(weatherbutton);		
		wrapper.appendChild(calendarbutton);
		wrapper.appendChild(newsbutton);
	
		$(weatherbutton).on("click", function(){
			if(weatherhidden){
				forecast[0].show();
				weather[0].show();
				weatherhidden = false;
			}else{
				forecast[0].hide();
				weather[0].hide();
				weatherhidden = true;
			}
		});

		$(calendarbutton).on("click", function(){
			if(calendarhidden){
				calendar[0].show();
				calendarhidden = false;
			}else{
				calendar[0].hide();
				calendarhidden = true;
			}
		});

		$(newsbutton).on("click", function(){
			if(newshidden){
				news[0].show();
				newshidden = false;
			}else{
				news[0].hide();
				newshidden = true;
			}
		});

		return wrapper;				



	}


});	


