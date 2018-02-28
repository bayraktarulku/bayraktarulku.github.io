 /*************************************************************************
 *
 * @author
 *
 *************************************************************************/

$(document).ready(function() {

	$("html, body").on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
       $("html, body").stop();
	});

});

 /************************
 * Start Misc
 ************************/
/*
 $( document ).ready(function() {
    var heights = $(".welll").map(function() {
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);
    $(".welll").height(maxHeight);
});*/

function scroll(target)
{
	$("html, body").animate({ scrollTop: jQuery(target).offset().top - 20 }, '1000', function(){
	   $("html, body").off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
	});
}

 /************************
 * End Misc
 ************************/

 /************************
 * Start Landing
 ************************/

$(document).ready(function() {

 	//$("#map").hide();
	$(".aboutme-location-link").hover(function() {

		$("#map-container").removeClass('animated fadeOut');
		$("#map").show();
		init();
		$("#map-container").addClass('animated fadeIn');

		$('#profile-card').addClass('aboutme-info-container-profile');
		}, function() {

		$("#map-container").removeClass('animated fadeIn');
		$("#map-container").addClass('animated fadeOut');
		$("#map").hide();
		$('#profile-card').removeClass('aboutme-info-container-profile');
		}
	);


	/*$("#map").hide();
	$(".aboutme-location-link").hover(function() {
		$("#map").show();
		$('#profile-card').addClass('aboutme-info-container-profile');
		init();
		}, function() {
		$('#profile-card').removeClass('aboutme-info-container-profile');
		$("#map").hide();
		}
	);*/

});

google.maps.event.addDomListener(window, 'load', init);
var map;

function init() {
	var mapOptions = {
		center: new google.maps.LatLng(51.498736, -0.069128),
		zoom: 12,
		zoomControl: false,
		disableDoubleClickZoom: true,
		mapTypeControl: true,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
		},
		scaleControl: false,
		scrollwheel: true,
		panControl: true,
		streetViewControl: false,
		draggable : true,
		overviewMapControl: true,
		overviewMapControlOptions: {
			opened: true,
		},
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles: [
			{
				"featureType": "water",
				"stylers": [
					{
						"visibility": "on"
					},
					{
						"color": "#b5cbe4"
					}
				]
			},
			{
				"featureType": "landscape",
				"stylers": [
					{
						"color": "#efefef"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#83a5b0"
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#bdcdd3"
					}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#ffffff"
					}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#e3eed3"
					}
				]
			},
			{
				"featureType": "administrative",
				"stylers": [
					{
						"visibility": "on"
					},
					{
						"lightness": 33
					}
				]
			},
			{
				"featureType": "road"
			},
			{
				"featureType": "poi.park",
				"elementType": "labels",
				"stylers": [
					{
						"visibility": "on"
					},
					{
						"lightness": 20
					}
				]
			},
			{},
			{
				"featureType": "road",
				"stylers": [
					{
						"lightness": 20
					}
				]
			}
		],
	}
	var mapElement = document.getElementById('map');
	var map = new google.maps.Map(mapElement, mapOptions);
	var locations = [['Bermondsey, London', 'undefined', '', '', 'undefined', 51.498736, -0.069128, 'https://mapbuildr.com/assets/img/markers/solid-pin-blue.png']];
	for (i = 0; i < locations.length; i++)
	{
		if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
		if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
		if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
		if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
		if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}

		marker = new google.maps.Marker({
			icon: markericon,
			position: new google.maps.LatLng(locations[i][5], locations[i][6]),
			map: map,
			title: locations[i][0],
			desc: description,
			tel: telephone,
			email: email,
			web: web
		});

		link = '';
		bindInfoWindow(marker, map, locations[i][0], description, telephone, email, web, link);
	}

	function bindInfoWindow(marker, map, title, desc, telephone, email, web, link) {
		var infoWindowVisible = (function () {
			var currentlyVisible = false;
			return function (visible) {
				if (visible !== undefined) {
					currentlyVisible = visible;
				}
					return currentlyVisible;
			};
		}());

		iw = new google.maps.InfoWindow();
		/*google.maps.event.addListener(marker, 'click', function() {
			if (infoWindowVisible()) {
				iw.close();
				infoWindowVisible(false);
			} else {
				var html= "<div style='color:#000;background-color:#fff;padding:5px;width:150px;'><h4>"+title+"</h4></div>";
				iw = new google.maps.InfoWindow({content:html});
				iw.open(map,marker);
				infoWindowVisible(true);
			}
		});*/

		var html= "<div style='color:#000;background-color:#fff;padding:5px;width:200px;'><h4>"+title+"</h4></div>";
		iw = new google.maps.InfoWindow({content:html});
		iw.open(map,marker);
		infoWindowVisible(true);

		google.maps.event.addListener(iw, 'closeclick', function () {
			infoWindowVisible(false);
		});
	}
}

 /************************
 * End Landing
 ************************/


 /************************
 * Start About me
 ************************/


 $( document ).ready(function() {
    var heights = $(".skills-section .aboutme-info-container").map(function() {
        return $(this).height();
    }).get(),

    maxHeight = Math.max.apply(null, heights);

    $(".skills-section .aboutme-info-container").height(maxHeight);
});

 $(document).ready(function() {

    var html = '';
	var musicFound = false;

	//Get top artists from lastfm account
	$.getJSON("http://ws.audioscrobbler.com/2.0/?method=user.getTopArtists&user=smitteyyyy&period=1month&api_key=9ddaab7dc99dbcfb3f2ed8204ef965ce&limit=5&format=json&callback=?", function(json) {
        $.each(json.topartists.artist, function(i, item) {

			musicFound = true;

			var n = item.url.lastIndexOf('/');
 			var result = item.url.substring(n + 1);
 			var songName = item.name;
 			var url = item.url;

 			html += "<a href='http://www.last.fm/user/Smitteyyyy/library/music/" + result + "?date_preset=LAST_30_DAYS' target='_blank'>" + item.name + "</a>, ";
        });

		//Strip out the final comma
		html = html.substring(0, html.length - 2) + '.';

		//Add result to page
		if(html.indexOf(",") > -1)
		{
			$('#topArtists').append(html);
		}

		if(!musicFound)
		{
			$.getJSON("http://ws.audioscrobbler.com/2.0/?method=user.getTopArtists&user=smitteyyyy&period=3month&api_key=9ddaab7dc99dbcfb3f2ed8204ef965ce&limit=5&format=json&callback=?", function(json) {
				html = '';

				$.each(json.topartists.artist, function(i, item) {

					musicFound = true;

					var n = item.url.lastIndexOf('/');
					var result = item.url.substring(n + 1);
					var songName = item.name;
					var url = item.url;

					html += "<a href='http://www.last.fm/user/Smitteyyyy/library/music/" + result + "?date_preset=LAST_90_DAYS' target='_blank'>" + item.name + "</a>, ";
				});

				//Strip out the final comma
				html = html.substring(0, html.length - 2) + '.';

				//Add result to page
				$('#topArtists').append(html);

			});
		}
    });





	//If applicable, get the track that I'm currently listening to.
	//Start by returning the last track that I listened to
	getNowPlaying();
	setInterval(getNowPlaying, 10*1000);


	$('.glyph-icon-large').hover(function() {
		$(this).siblings('.timer').fadeTo(500, 1);
		}, function() {
		$(this).siblings('.timer').fadeTo(500, 0.4);}
	);


	/*$("#interests-block .glyph").hover(function() {
			$('#aboutme-picture').show();


			$('#aboutme-text-content .aboutme-info-container').removeClass('animated fadeIn');
			$('#aboutme-text-content .aboutme-info-container').addClass('animated fadeOut');

			$('#aboutme-picture').html('<img class="imgRoundedSquare" src="img/' + $(this).attr('id') + '.jpg">');

			$('#aboutme-picture').removeClass('animated fadeOut');
			$('#aboutme-picture').addClass('animated fadeIn');

			$('#aboutme-picture').on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
				function(e){
					$('#aboutme-picture').show();
					$(this).off(e);
			});

		}, function() {
			$('#aboutme-text-content .aboutme-info-container').removeClass('animated fadeOut');
			$('#aboutme-text-content .aboutme-info-container').addClass('animated fadeIn');

			$('#aboutme-picture').removeClass('animated fadeIn');
			$('#aboutme-picture').addClass('animated fadeOut');

			$('#aboutme-picture').bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
				function(e){
					$('#aboutme-picture').hide();
					$(this).off(e);
			});

		}
	);*/



	var statsHasBeenSeen = false;
	var progressBarsHasBeenSeen = false;

	$(window).scroll(function() {

		if(progressBarsHasBeenSeen == false)
		{
			if($(".progress").isOnScreen())
			{
				progressBarsHasBeenSeen = true;

				$('.progress-bar').each(function(){

					var percentage = $(this).attr('data-percent');
					var description = $(this).attr('description');

					$(this).html(percentage + ' - ' + description);

					$(this).animate({
						width: percentage
					}, 2500);
				});
			}
		}

		if(statsHasBeenSeen == false)
		{
			if($(".timers").isOnScreen())
			{
				statsHasBeenSeen = true;

				$('.timer').each(function(){

					var max = $(this).attr('data-value');
					var unit = $(this).attr('data-unit');

					$(this).countTo({
						from: 0,
						to: max,
						speed: 4000,
						unit: unit,
						refreshInterval: 50,
					});
				});
			}
		}


	});

});


(function($) {
    $.fn.countTo = function(options)
	{
        //How many times to update the value
        var loops = Math.ceil(options.speed / options.refreshInterval);
        //How much to increment the value on each update
		var increment = (options.to - options.from) / loops;

        return $(this).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer()
            {
                value += increment;
                loopCount++;

				//Change the html on the page to the current value of the timeer increment
                $(_this).html(value.toFixed(options.decimals).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " " + options.unit);

                if (loopCount >= loops)
                {
					//Once the number has been reached clear the interval and set the final value to it's desired count
                    clearInterval(interval);
                    value = options.to;

					$(_this).fadeTo(1000, 0.4);

                }
            }
        });
    };

	$.fn.progress = function(options)
	{
        return $(this).each(function() {

			$(this).animate({
				width: options.percentage
			}, 2500, function() {
				//$(this).next().addClass('skill-label');
			});

        });
    };

	$.fn.isOnScreen = function()
	{
		var win =   $(window);
		var viewport    =   {
			top  : win.scrollTop(),
			left : win.scrollLeft()
		};

		viewport.right  =   viewport.left   +   win.width();
		viewport.bottom =   viewport.top    +   win.height();

		var bounds      =   this.offset();

		bounds.right    =   bounds.left + this.outerWidth();
		bounds.bottom   =   bounds.top + this.outerHeight();

		return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
	};

})(jQuery);

var currentSongName;
function getNowPlaying()
{
	$.getJSON("http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=smitteyyyy&api_key=9ddaab7dc99dbcfb3f2ed8204ef965ce&limit=1&format=json&callback=?", function(json) {
        $.each(json.recenttracks.track, function(i, item) {

			//Limit to the first iteration. Lastfm seems to want to return at least 2
			if(i == 0)
			{
				//Does the result have the attribute containing the 'nowplaying' attribute?
				if($(this).attr('@attr') != undefined)
				{
					var songName = item.name;

					//Does the return result match the same name as the previously changed song name? If not, we want to change the html to reflect the new song
					if(songName != currentSongName)
					{
						var html = 'Listening to right now: <img src="img/sound-balance.gif"> ';

						var artist = item.artist['#text'];
						var url = item.url;

						currentSongName = songName;

						html += "<a href='" + url + "' target='_blank'>" + artist + " - " + songName + "</a>.";

						//Add result to page
						$('#currentlyListeningTo').html(html);
					}
				}
				else
				{
					$('#currentlyListeningTo').empty();
				}
			}
        });
    });
}

 /************************
 * End About me
 ************************/


 /************************
 * Start Timeline
 ************************/

$(document).ready(function() {

 	/*$(".timeline-panel").hover(function() {
		$(this).parent().closest('.experienceBlockHead').find('.timeline-image').css({'border': '5px solid #BF3B3B'});
	}, function() {
		$(this).parent().closest('.experienceBlockHead').find('.timeline-image').css({'border': ''})}
	);*/

	//If the users window is smaller than 600 pixels, give the timeline sticker an overflow property so that the tags will wrap/all be seen at once
	/*if($(window).height() <  500)
	{
		$('#sticker').addClass('div-overflow');
	}*/

	//Filter by tags
	$("#sideBar").on('click', '.skillTag', function() {
		filterTags(this);
		scroll('#experience');
	});

	//sidebar scroll boundaries
	var sticker = $("#sticker");
	var topOfSidebar = $('#sticker').offset().top - 100;


	$(window).on('resize', function(){
		sticker = $("#sticker");
		topOfSidebar = $('#sticker').offset().top - 100;
	});

	$(window).scroll(function() {

		var topOfTimeline = $('#experienceTimeline').offset().top;


		var currentPos = $(window).scrollTop();

		var bottomOfTimeline = $('#experienceTimeline').offset().top + $('#experienceTimeline').height();
		var currentTopOfSidebar = $('#sticker').offset().top;
		var heightOfSidebar = $('#sticker').height();
		var bottomOfSidebar = currentPos + $('#sticker').height() + 100;
		var scrollBottom = $(window).scrollTop() + $(window).height();

		//$('#debug').html("Current position: " + currentPos + "<br/>Bottom of window: " + scrollBottom + "<br/>Bottom of Timeline: " + bottomOfTimeline + "<br/>Bottom of Sidebar: " + bottomOfSidebar);
		//console.log("Current position: " + currentPos + "\nBottom of window: " + scrollBottom + "\nBottom of Timeline: " + bottomOfTimeline + "\nBottom of Sidebar: " + bottomOfSidebar);

		if((currentPos >= topOfSidebar) && (bottomOfSidebar <= bottomOfTimeline))	//Within the boundaries
		{
			sticker.removeClass("stick-end");
			sticker.addClass("stick");
		}
		else if(bottomOfSidebar >= bottomOfTimeline)								//Below the timeline
		{
			sticker.removeClass("stick");
			sticker.addClass("stick-end");
		}
		else																		//Above the timeline
		{
			sticker.removeClass("stick-end");
			sticker.removeClass("stick");
		}


		//Controls for fading in the experience elements when the window is scrolling by them
		//Check the location of each desired element
		$('.timeline li').each( function(i){

			var bottom_of_object = $(this).offset().top + ($(this).outerHeight() / 2);
			var bottom_of_window = $(window).scrollTop() + $(window).height();

			/* If the object is completely visible in the window, fade it it */
			if( bottom_of_window > bottom_of_object )
			{
				//Seeing as it can be scrolled by multiple times, check to see if it is already shown (depicted by the class .visible).
				//If it doesn't have this class, it isn't shown. Fade it in and move over the tags from the experience block over to the filter menu.
				if(!$(this).hasClass("visible"))
				{
					//Fade in the experience block
					$(this).animate({'opacity':'1'},500);

					//Move tags over to filter menu
					move($(this));
				}

				//Give the experience block the visible class so that it will be ignored the next time the user scrolls by it
				$(this).addClass("visible");
			}

		});
	});

	//Controls for the 'more...' sections of the timeline experience blocks
	$(".timeline-more").click(function(){
		$(this).prev().slideToggle('slow', function() {
			if ($(this).is(":visible")) {
				 $(this).next().text('Less...');
			} else {
				 $(this).next().text('More...');
			}
		});
    });
});


function move(elem)
{
	//For every tag found in the experience block that has just appeared/faded in
	$(elem).find('.timeline-panel .timeline-body span.skillTag').each(function(index){

		//Get the skill tag to move over to the menu
		var skillTag = $(this);

		//Move/fade skill into the menu. thread timeout needed to nicely update the UI. Moved the fading action into a separate method for easier viewing
		setTimeout(function () {
			fade(skillTag);
		}, index*400);

	});
}

function fade(elem)
{
	//Get the tag name from the element
	var tagName = $(elem).attr('class').split(' ')[0];

	//Does the sidebar already contain the element? If not, add it. If it is already there, briefly highlight it
	if($("#sideBar ." + tagName).length == 0)
	{
		var clone = $(elem).clone();

		if($(window).height() - 100 < $('#sticker').height())
		{
			clone.addClass('span-tag-Inline');

            $('#sideBar .skillTag').addClass('span-tag-Inline');
            $('#sticker').addClass('div-overflow');

		}

		//Make a duplicate of the element as we don't want the element to actually move, but replicated. Make it into a link so that the filter can be selected
		clone.appendTo("#sideBar #sticker").wrap("<h5><a href='#/'></a></h5>").hide().fadeIn(1000);
	}
	else
	{
		//Briefly highlight the element
		$("#sideBar ." + tagName).effect( "highlight", 1000);
	}
}

function filterTags(elem)
{
	if($(elem).hasClass("experienceItemSelected"))
	{
		$(elem).removeClass("experienceItemSelected");
	}
	else
	{
		$(elem).addClass("experienceItemSelected");
	}

	//Return the tags currently selected
	var filteredTags = $('#sideBar #sticker .experienceItemSelected').map(function(){ return "." + $(this).attr('class').split(' ')[0]; }).get().join();

	//If no tags are selected, un-grey all of the menu tags by giving them the correct label class based on the name
	if(filteredTags == "")
	{
		$('#sticker .skillTag').addClass (function (){
			return 'label-' + $(this).attr('class').split(' ')[0].substr(0, $(this).attr('class').split(' ')[0].indexOf('Tag'));
		});
	}
	else
	{
		//Remove the colours from all tags at first
		$('#sticker .skillTag').removeClass (function (index, css) {
		   return (css.match (/(^|\s)label-\S+/g) || []).join(' ');
		});

		//Give all tags the grey colour
		$('#sticker .skillTag').addClass('label-grey');

		//Give the selected tag(s) colour
		$('#sticker .experienceItemSelected').addClass (function (){
		   return 'label-' + $(this).attr('class').split(' ')[0].substr(0, $(this).attr('class').split(' ')[0].indexOf('Tag'));
		});
	}

	//Start the actual filtering by selecting all experience blocks
	var experienceBlocks =  $('.timeline li .timeline-panel').parent();

	if(filteredTags)
	{
		//Based on the experience blocks that have been selected, select their main parent
		experienceBlocks = experienceBlocks.find('.timeline-body').find(filteredTags).parent().parent().parent();
	}

	//Hide all experience panels/rows
	$('.timeline li .timeline-panel').parent().hide();


	$('#experience5').parent().prevAll(".experienceCategory:first");

	//Show the experience items depicted by the filters
	experienceBlocks.show();

	var hasWork = false;
	var hasEducation= false;

	//Look at all visible experience
	$('.timeline-panel:visible').each(function() {

		//What categories do the shown experience belong to?
		if($(this).parent().prevAll(".experienceCategory:first").attr('id') == 'educationCategory')
		{
			//Education experience is shown
			hasEducation = true;
		}
		else
		{
			//Work experience is shown
			hasWork = true;
		}
	});

	if(hasWork == false)
	{
		$('#workCategory').hide();
	}
	else
	{
		$('#workCategory').show();
	}

	if(hasEducation == false)
	{
		$('#educationCategory').hide();
	}
	else
	{
		$('#educationCategory').show();
	}
}

function clearFilters()
{
	$("#sideBar #sticker .experienceItemSelected").each(function(){
		filterTags(this);
		$(this).removeClass('experienceItemSelected');
	});

	scroll('#experience');
}

 /************************
 * End Timeline
 ************************/

 /************************
 * Start projects
 ************************/

$(document).ready(function() {

	//Filter by tags
	$("#projects-tags-bar").on('click', '.projectTag', function() {
		filterProject(this);
	});


});


function filterProject(elem)
{
	if($(elem).hasClass("experienceItemSelected"))
	{
		$(elem).removeClass("experienceItemSelected");
	}
	else
	{
		$(elem).addClass("experienceItemSelected");
	}

	//Return the tags currently selected
	var filteredTags = $('#projects-tags-bar .experienceItemSelected').map(function(){ return "." + $(this).attr('class').split(' ')[0]; }).get().join();

	var filteredTagNames = $('#projects-tags-bar .experienceItemSelected').parent().parent().map(function(){ return $(this).attr("data-filter")}).get().join();

	//If no tags are selected, un-grey all of the project tags by giving them the correct label class based on the name
	if(filteredTags == "")
	{
		$('#projects-tags-bar .projectTag').addClass (function (){
			return 'label-' + $(this).attr('class').split(' ')[0].substr(0, $(this).attr('class').split(' ')[0].indexOf('Tag'));
		});

		$('#Container').mixItUp('filter','.apps,.web,.music')
	}
	else
	{
		//Remove the colours from all tags at first
		$('#projects-tags-bar .projectTag').removeClass (function (index, css) {
		   return (css.match (/(^|\s)label-\S+/g) || []).join(' ');
		});

		//Give all tags the grey colour
		$('#projects-tags-bar .projectTag').addClass('label-grey');

		//Give the selected tag(s) colour
		$('#projects-tags-bar .experienceItemSelected').addClass (function (){
		   return 'label-' + $(this).attr('class').split(' ')[0].substr(0, $(this).attr('class').split(' ')[0].indexOf('Tag'));
		});
	}

	//Filter and move the tags based on the selection
	$('#Container').mixItUp('filter', filteredTagNames)

}


$(function(){
	$('#Container').mixItUp({
		load:
		{
			filter: '.web, .apps, .music'
		},
		controls:
		{
			toggleFilterButtons: true,
			toggleLogic: 'or'
		},
		callbacks:
		{
			onMixEnd: function(state)
			{
				//console.log(state.activeFilter)
			}
		}
	});

	//Initialise again to stop double-mixing
	$('#Container').mixItUp('filter','.apps,.web,.music')

});



 /************************
 * End Projects
 ************************/

 /************************
 * Start Contact
 ************************/

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

 /************************
 * End Contact
 ************************/