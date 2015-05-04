//toggle
$(document).ready(function  () {
	$("#menu").click(function () {
		$("#aside").toggle("swing");
	});
});
//toggle chat
$(document).ready(function  () {
	$("#chats").click(function () {
		$("#chat").toggle("swing");
	});
});

//scrooll
$(document).ready(function  () {
	$(window).scroll(function  () {
		$("#aside").hide("swing");
	});
});

$(document).ready(function  () {
	$(window).scroll(function  () {
		$("#chat").hide("swing");
	});
});

