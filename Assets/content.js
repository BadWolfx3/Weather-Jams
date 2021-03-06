// SETTING ICON AND MUSIC BASED ON WEATHER CONDITIONS==========================//////////////////

function setIcon (condition) { 

    if (condition === "Clear") {
    var sun = '<div class="icon sunny">' +
            '<div class="sun">' +
            '<div class="rays"></div>' +
             '</div>' +
             '</div>';
  
    $( "#iconCurrentWeather" ).empty().append(sun);
    $("#moosicPlayer").empty().append('<iframe width="100%" height="300" scrolling="yes" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/485070210&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>');
  
  }
  
    if (condition === "Clouds") {
    var cloudy = '<div id="icon cloudy" class="mt-6">' +
                  '<div class="cloud"></div>'+
                  '<div class="cloud"></div>'+
                  '</div>';
    $("#iconCurrentWeather").empty().append(cloudy);
    $("#moosicPlayer").empty().append('<iframe width="100%" height="300" scrolling="yes" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/30705522&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>');
  }
  
    if (condition === "Snow") { 
    var snow = '<div class="icon flurries">' +
              '<div class="cloud"></div>' +
              '<div class="snow">' +
              '<div class="flake"></div>' +
              '<div class="flake"></div>' +
              '</div>' +
              '</div>';
  
    $( "#iconCurrentWeather" ).empty().append(snow); 
    $("#moosicPlayer").empty().append('<iframe width="100%" height="300" scrolling="yes" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/170096941&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>');
  
  }
    if (condition === "Rain") {
    var rain = '<div class="icon rainy">' +  
              '<div class="cloud"></div>' +  
              '<div class="rain"></div>' +
              '</div>';
  
    $( "#iconCurrentWeather" ).empty().append(rain); 
    $("#moosicPlayer").empty().append('<iframe width="100%" height="300" scrolling="yes" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/415701590&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>');
  }
    if (condition === "Thunderstorm") { 
    var storm = '<div class="icon thunder-storm">' + 
               '<div class="cloud"></div>' +
               '<div class="lightning">' +
                '<div class="bolt"></div>' +
                '<div class="bolt"></div>' +
                '</div>' +
                '</div>';
  
    $( "#iconCurrentWeather" ).empty().append(storm);
    $("#moosicPlayer").empty().append('<iframe width="100%" height="300" scrolling="yes" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/787002831&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>');
  }
  
    if (condition === "Drizzle") {
    var shower = '<div class="icon sun-shower">' +
               '<div class="cloud"></div>' +
                '<div class="sun">' +
                '<div class="rays"></div>' +
                 '</div>' +
                '<div class="rain"></div>' +
                '</div>';
  
    $( "#iconCurrentWeather" ).empty().append(shower) 
    $("#moosicPlayer").empty().append('<iframe width="100%" height="300" scrolling="yes" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1148320699&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>');
  }
    if (condition === "Mist") {
    var fog = '<div class="icon foggy">' +
             '<div class="cloud"></div>' +
             '<div class="fog"></div>' +
             '</div>';
  
    $( "#iconCurrentWeather" ).empty().append(fog);
    $("#moosicPlayer").empty().append('<iframe width="100%" height="300" scrolling="yes" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/373457591&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>');
  }
    
  };