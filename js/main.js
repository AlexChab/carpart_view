$(document).ready(function(){
	$('#collapseOne').on('hidden.bs.collapse', function () {
		$("#my-garage").removeClass("fa-chevron-up");
	  $("#my-garage").addClass("fa-chevron-down");
	});
	$('#collapseOne').on('shown.bs.collapse', function () {
		$("#my-garage").removeClass("fa-chevron-down");
	  $("#my-garage").addClass("fa-chevron-up");
	})

});