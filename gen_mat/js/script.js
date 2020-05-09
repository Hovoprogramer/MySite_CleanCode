$(document).ready(function (){
	$("nav").removeClass("default");

	$(window).scroll(function (){
		if($(this).scrollTop() > 0){
			$("nav").addClass("default")/*.fadeIn('fast')*/;
		} else {
			$("nav").removeClass("default")/*.fadeIn('fast')*/;
		};
	});

	$(".mymail").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	
});