$('#giftButton').click(function(){
	$("#giftPage").fadeOut(1500);
	$('#wishH1').addClass('animation-start');
	var song = document.getElementById('audio');
	song.currentTime = 0;
	song.play();
	setTimeout(function() {
      $("#giftPage").fadeIn(1500);
	  setTimeout(function() {
		$('#wishH1').removeClass('animation-start');
	  },1000);
	  
	  //$("i1").hide();
	},30000);
	
	$("#i2").hide();
	$("#i3").hide();
	$("#i1").show();
	
	setTimeout(function(){
		
		$("#i2").fadeIn(1000);
		$("#i1").fadeOut(3000);
		
	},12000);
	setTimeout(function(){
		
		$("#i3").fadeIn(1000);
		$("#i2").fadeOut(3000);
		
	},20000);
	  /*var count=0;
	  var first=true;
	  setInterval(()=>{
		  if(count==0){
			  $("#i3").fadeToggle(3000);
			  $("#i1").fadeToggle(3000);
			  count=1;
		  }
		  else if(count==1){
			  $("#i1").fadeToggle(3000);
			  $("#i2").fadeToggle(3000);
			  count=2;
		  }
		  else{
			  $("#i2").fadeToggle(3000);
			  $("#i3").fadeToggle(3000);
			  count=0;
		  } 
	  },10000);*/
});