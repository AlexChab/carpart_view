$(document).ready(function(){
	$('#collapseOne').on('hidden.bs.collapse', function () {
		$("#my-garage").removeClass("fa-chevron-up");
	  $("#my-garage").addClass("fa-chevron-down");
	});
	$('#collapseOne').on('shown.bs.collapse', function () {
		$("#my-garage").removeClass("fa-chevron-down");
	  $("#my-garage").addClass("fa-chevron-up");
	})

	// delete my-car garage
	$('.del-my-car').on('click',function(){
		var header = '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><div>Предупреждение</div>';
		var footer = '<button type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Отмена</button><button type="button" class="btn btn-danger btn-sm">Удалить</button>';
		$('#smallModal .modal-header').empty();
		$('#smallModal .modal-header').append(header);
		$('#smallModal .modal-body').empty();
		$('#smallModal .modal-body').append('Удалить элемент '+$('#'+this.id).attr('data-car-info') + ' ?' );
		$('#smallModal .modal-footer').empty();
		$('#smallModal .modal-footer').append(footer);
		$('#smallModal').modal('toggle');
		
		$('#form-'+this.id).remove();
	})
	// call back phone
	$('#call-back').on('click',function(){
		var header = ' <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><div>Обратный вызов</div>';
		var content = '<div class="form-group"><label for="cbInputName">Ваше имя</label><input type="email" class="form-control" id="cbInputName" placeholder="Ваше имя"></div><div class="form-group"><label for="cbInputPhone">Ваш телефон</label><input type="password" class="form-control" id="cbInputPhone" placeholder="Телефон"></div>';
		var footer = ' <button type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Отмена</button><button type="button" class="btn btn-success btn-sm">Вызов</button>';
		$('#smallModal .modal-header').empty();
		$('#smallModal .modal-header').append(header);
		$('#smallModal .modal-body').empty();
		$('#smallModal .modal-body').append(content);
		$('#smallModal .modal-footer').empty();
		$('#smallModal .modal-footer').append(footer);
		$('#smallModal').modal('toggle');
	})

	// -- Hover на изменение вида 
	$('.category').hover(
		function(){
		console.log('On hover');
		},
		function(){
		console.log('On by');
		}
	)
});
$(window).load(function(){
	console.log('onload');

});