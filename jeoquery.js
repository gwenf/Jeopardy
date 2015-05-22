//jQuery "main"
$(document).ready(function(){
	$("td").click(function(){
		DisableQuestion(this);
	});
});

/* function to disable the selected Jeopardy question
 * @param quest contains the clicked element.
*/
function DisableQuestion(quest){
//	$already = $("td").filter(".asked.just");
	
	//Completely hides already asked questions
/*	$already.each(function(){
		$(this).removeClass("just");
	});
*/	
	//Fades out most recent question, and disables click event.
	$(quest).addClass("just").removeProp("onclick");
	
}

function NewQuestion(row, col){
	
}