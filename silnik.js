$(document).ready(function(){
	$('.category').click(function(){
		var category=$(this).attr('id');
		if(category=='all'){
			$('.o').addClass('hide');
			setTimeout(function(){
				$('.o').removeClass('hide');
			},300);
		}else{
			$('.o').addClass('hide');
			setTimeout(function(){
				$('.'+category).removeClass('hide');
			},300);
		}
	});
});