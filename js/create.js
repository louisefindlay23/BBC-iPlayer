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
        }).responseText);       
        console.log(config_data);
        
        var tv_data = $.parseJSON($.ajax({            
            "async": false,
            "crossDomain": true,
            dataType: 'json',
            url: "https://api.themoviedb.org/3/tv/" + tvshow_id + "?language=en-US&api_key=5baec0646d331ab270b4489371001070",
            "method": "GET",
            "headers": {},
            "data": "{}"
        }).responseText);        
        console.log(tv_data);
        
        if (tv_data.seasons[0].season_number === 0) {
            var i = 1;
            var z = 1;
        } else {
            var i = 0;
            var z = 1;
        }
        
        $('#' + html_id).append('<div class="tvshow-header"><h1>' + tv_data.name + '</h1>' + '<p>' + tv_data.first_air_date.substring(0,4) + ' / ' + tv_data.number_of_seasons + ' Seasons' + ' / ' + tv_data.episode_run_time[0] + ' mins' + '</p>' + '</div>' + '<div class="dropdown-menu-container"><div class="season-button"><p>Season <i class="fas fa-caret-down"></i></p></div>' + '<div class="' + html_id + '-dropdown season-dropdown" id="' + html_id + '_season"><ul></ul></div>');
        $('#' + html_id).append('<div id="' + html_id + '_season_container" class="season_container"></div>');
        
        var headerImage = config_data.images.secure_base_url + config_data.images.backdrop_sizes[1] + tv_data.backdrop_path;
        
        $('#' +  html_id + ' .tvshow-header').css("background-image", 'linear-gradient(to bottom, rgba(0, 0, 0, 0.0) 0%, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 1) 100%), url(' + headerImage + ')');
        
        $('.season-button').click(function () {
			$('.' + html_id + '-dropdown').slideToggle(150);
        });
        
        while (i < tv_data.number_of_seasons + 1) {
            if (tv_data.seasons[i].air_date == null){
            }
            else {
                $('#' + html_id + '_season ul').append('<li><a class="season-click" rel="' + html_id + 'ssn' + z +'">' + tv_data.seasons[i].name + '</a></li>');
                $('#' + html_id + '_season_container').append('<div class="season ' + html_id + 'ssn' + z + '" id="' + html_id + '_s' + z + '"></div>');
            }
            
            if (tv_data.seasons[i].season_number == 1){
            }
            else {
                $('#' + html_id + '_s' + z ).css('display', 'none');
            }
            
            $('.season-click').on('click', function(){
                var target = $(this).attr('rel');
                $("."+target).show().siblings('div').hide();
                $('.' + html_id + '-dropdown').slideUp(150);
            });
            
            var j = 1;
            
            var ep_data = $.parseJSON($.ajax({            
                "async": false,
                "crossDomain": true,
                dataType: 'json',
                url: "https://api.themoviedb.org/3/tv/" + tvshow_id + "/season/" + z + "?api_key=5baec0646d331ab270b4489371001070&language=en-US",
                "method": "GET",
                "headers": {},
                "data": "{}"
            }).responseText);
            console.log(ep_data);
            
            
            while (j < tv_data.seasons[i].episode_count + 1) {
                $('#' + html_id + '_s' + z).append('<div id="' + html_id + '_s' + z + '_ep' + j + '" class="episode"><div class="episode-text"><h3>' + ep_data.episodes[j-1].episode_number + ". " + ep_data.episodes[j-1].name + '</h3>' + '<p>' + ep_data.episodes[j-1].overview.substring(0, 100) + ' (...)' + '</p></div>' + '<div class="episode-thumb"><img src="' + (config_data.images.secure_base_url + config_data.images.backdrop_sizes[0] + ep_data.episodes[j-1].still_path) + '"></div></div>');
                
                if (ep_data.episodes[j-1].still_path == null){
                    $('#' + html_id + '_s' + z + '_ep' + j).css('display', 'none');
                }
                j++;
            }
            z++;
            i++;
        }
    });
}

var elementsToHide = "#faq, #search, #categories, #settings, #profile, #home";	

function initTVShow(quotetvShowToInit, tvShowToInit, tvShow_id) {
    $('.' + quotetvShowToInit).one("click", function () {
        var tv_id = tvShowToInit + '_id';
        var tvshow_hid = tvShowToInit + '_hid';
        var tv_id = tvShow_id;
        var tvshow_hid = quotetvShowToInit;
        create_tvshow(tv_id, tvshow_hid);
        $(elementsToHide + ', .tvshow').hide();
        $("#" + quotetvShowToInit + ", #tvshow").show();
        $("#navcategory, #navsearch, #navprofile, #settings-icon, #navhome").removeClass("element-active");
    });
}

function clickTVShow(tvShowToClick) {
    $('.' + tvShowToClick).click(function () {
        $(elementsToHide + ", .tvshow").hide();
        $('#' + tvShowToClick + ', #tvshow').show();
        $("#navcategory, #navsearch, #navprofile, #settings-icon, #navhome").removeClass("element-active");
    });
}