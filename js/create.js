function create_tvshow(tvshow_id, html_id) {
    $(document).ready(function () {
        
        var config_data = $.parseJSON($.ajax({            
            "async": false,
            "crossDomain": true,
            dataType: 'json',
            url: "https://api.themoviedb.org/3/configuration?api_key=5baec0646d331ab270b4489371001070",
            "method": "GET",
            "headers": {},
            "data": "{}"
        }).responseText); // This will wait until you get a response from the ajax request.        
        console.log(config_data);
        
        var tv_data = $.parseJSON($.ajax({            
            "async": false,
            "crossDomain": true,
            dataType: 'json',
            url: "https://api.themoviedb.org/3/tv/" + tvshow_id + "?language=en-US&api_key=5baec0646d331ab270b4489371001070",
            "method": "GET",
            "headers": {},
            "data": "{}"
        }).responseText); // This will wait until you get a response from the ajax request.        
        console.log(tv_data);
        
        if (tv_data.seasons[0].name === 'Specials') {
            var t = 0;
        } else {
            var t = 1;
        }
        
        // Now you can use data.posX, data.posY later in your code and it will work.
        var i = 0;
        
        $('#' + html_id).append('<div class="tvshow-header"><h1>' + tv_data.name + '</h1>' + '<p>' + tv_data.first_air_date.substring(0,4) + ' / ' + tv_data.number_of_seasons + ' Seasons' + '</p>' + '</div>' + '<div class="dropdown-menu-container"><div class="season-button">Season</div>' + '<div class="season-dropdown" id="' + html_id + '_season"></div>');
        
        var header = '#' +  html_id + " .tvshow-header";
        var headerImage = config_data.images.secure_base_url + config_data.images.backdrop_sizes[1] + tv_data.backdrop_path;

        $(header).css("background-image", 'url(' + headerImage + ')');

        while (i < tv_data.number_of_seasons + 1) {
            
            $('#' + html_id + '_season').append('<p>' + tv_data.seasons[i].name + '</p>');
            $('#' + html_id).append('<div class="season" id="' + html_id + '_s' + i + '"></div>');
            
            
            var j = 1;
            
            var ep_data = $.parseJSON($.ajax({            
                "async": false,
                "crossDomain": true,
                dataType: 'json',
                url: "https://api.themoviedb.org/3/tv/" + tvshow_id + "/season/" + t + "?api_key=5baec0646d331ab270b4489371001070&language=en-US",
                "method": "GET",
                "headers": {},
                "data": "{}"
            }).responseText); // This will wait until you get a response from the ajax request.
            console.log(ep_data);
            
            
            while (j < tv_data.seasons[i].episode_count + 1) {
                $('#' + html_id + '_s' + i).append('<div id="' + html_id + '_s' + i + '_ep' + j + '" class="episode"><div class="episode-text"><h3>' + ep_data.episodes[j-1].episode_number + ". " + ep_data.episodes[j-1].name + '</h3>' + '<p>' + ep_data.episodes[j-1].overview.substring(0, 100) + ' (...)' + '</p></div>' + '<div class="episode-thumb"><img src="' + (config_data.images.secure_base_url + config_data.images.backdrop_sizes[0] + ep_data.episodes[j-1].still_path) + '"></div></div>');
                j++;
            }
            
            i++;
            t++;
        }
    });
}