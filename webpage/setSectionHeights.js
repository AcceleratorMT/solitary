var enterPx = 50,
		durationPx = 400,
		exitPx = 25;

var data = [
	{sound: 'audio/1.ogg', duration: 400, onView: function(){}},
	{sound: 'audio/2.ogg', duration: 400, onView: function(){}},
	{sound: 'audio/3.ogg', duration: 400, onView: function(){}},
	{sound: 'audio/4.ogg', duration: 400, onView: function(){}},
	{sound: 'audio/5.ogg', duration: 400, onView: function(){}},
	{sound: 'audio/6.ogg', duration: 400, onView: function(){}}
]

d3.selectAll('.sectionDiv')
		.data(data)
		.each(function(d, i){
			var offset = (enterPx + durationPx + exitPx)*i;

			d3.select(this)
					.attr(str(offset), "top:100%;color:rgb(0, 0, 1)")
					.attr(str(offset += enterPx), "top:0%;color:rgb(0, 0, 0)")
					.attr(str(offset += durationPx), "top:0%;display:block;color:rgb(0, 0, 0)")
					.attr(str(offset += exitPx), "top:-100%;display:none;;color:rgb(0, 0, 1)")
				.append('audio')
					.attr('src', function(d, i){ return d.sound; })
		});

function str(d){ return 'data-' + d; }


skrollr.init();

d3.select('#playButton').on('click', function(){
	$('body,html').animate({scrollTop: document.height}, 60000); 
});


// d3.selectAll('.sectionDiv').each(function(){
// 	$(this).bind('inview', function (event, visible) {
// 	  if (visible == true) {
// 	    // element is now visible in the viewport
// 	  	console.log(d3.select(this).text());
// 	  } else {
// 	    // element has gone out of viewport
// 	    console.log('out');
// 	  }
// 	});
// });

$(window).scroll(function (){
	d3.selectAll('.sectionDiv').each(function(d, i){ 
		if (d3.select(this).style('color') == "rgb(0, 0, 0)"){
			console.log(i);
			d3.select(this).select('audio').node().play();
		}
		else{
			d3.select(this).select('audio').node().pause();			
		}
	});
});