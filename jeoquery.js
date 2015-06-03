function CustomAlert() {
    this.render = function(dialog){
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH+"px";
        dialogbox.style.left = (winW/2) - (550 * .5)+"px";
        dialogbox.style.top = "100px";
        dialogbox.style.display = "block";
        document.getElementById('dialogboxhead').innerHTML = "Question";
        document.getElementById('dialogboxbody').innerHTML = dialog;
        document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()">OK</button>';
    }
	this.ok = function(){
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
	}
}
var Alert = new CustomAlert();


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

//function multiFunction(){
//	Alert.render('Choose number of teams:');
////	function(){
////   window.location.href='jeopardyBoard.html';
////})
//}


var FormStuff = {
  
  init: function() {
    this.applyConditionalRequired();
    this.bindUIActions();
  },
  
  bindUIActions: function() {
    $("input[type='radio'], input[type='checkbox']").on("change", this.applyConditionalRequired);
  },
  
  applyConditionalRequired: function() {
    
    $(".require-if-active").each(function() {
      var el = $(this);
      if ($(el.data("require-pair")).is(":checked")) {
        el.prop("required", true);
      } else {
        el.prop("required", false);
      }
    });
    
  }
  
};

FormStuff.init();


function changeTeam1Name (){
	var teamName = prompt("Team Name:");
	document.getElementById('teamName1').innerHTML = teamName;
}

function changeTeam2Name (){
	var teamName = prompt("Team Name:");
	document.getElementById('teamName2').innerHTML = teamName;
}

function changeTeam3Name (){
	var teamName = prompt("Team Name:");
	document.getElementById('teamName3').innerHTML = teamName;
}
