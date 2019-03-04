<script>
		var trace=console.log.bind(console);
		$(document).ready(function(){
				
				$("#crosswordContainer input").keyup(function(e) {
					var class_name=$(this).attr("class");
					var num=parseInt(class_name.substr(1,class_name.length));
					trace("num: "+num);
    				if ($(this).val().length > 1) {
        				$(this).val($(this).val().substr(0, 1));
    				}
    				

					if (num<62 && e.which!=8) {
						var new_num=num+1;
						var new_inpt="f"+new_num;
						$("."+new_inpt).focus();
					}
				});			

			});
</script>

<section>
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<img class="pull-left" src="src/img/logo.svg" alt="logo-samsung">
				</div>

				<div class="col-md-6">
					<img class="pull-right" src="src/img/galaxya3a5.svg" alt="Galaxy A3 / A5">
				</div>
			</div>

			<div class="row text-center">
				<h1>Vyplňte křížovku</h1>
			</div>

			<div class="row text-center center">
				<div id="crosswordContainer" class="crossword">
					<div class="qContainer1">
						<p class="q1"><strong>1</strong></p>
						<input maxlength="1" type="text" class="f1">
						<input maxlength="1" type="text" class="f2">
						<input maxlength="1" type="text" class="f3">
						<input maxlength="1" type="text" class="f4">
						<input maxlength="1" type="text" class="f5">
						<input maxlength="1" type="text" class="f6">
						<input maxlength="1" type="text" class="f7">
						<input maxlength="1" type="text" class="f8">
					</div>
					 
					<div class="qContainer2">
						<p class="q2"><strong>2</strong></p>
						<input maxlength="1" type="text" class="f9">
						<input maxlength="1" type="text" class="f10">
						<input maxlength="1" type="text" class="f11">
						<input maxlength="1" type="text" class="f12">
						<input maxlength="1" type="text" class="f13">
						<input maxlength="1" type="text" class="f14">
						<input maxlength="1" type="text" class="f15">
						<input maxlength="1" type="text" class="f16">
						<input maxlength="1" type="text" class="f17">
						<input maxlength="1" type="text" class="f18">
					</div>
					
					<div class="qContainer3">
						<p class="q3"><strong>3</strong></p>
						<input maxlength="1" type="text" class="f19">
						<input maxlength="1" type="text" class="f20">
						<input maxlength="1" type="text" class="f21">
						<input maxlength="1" type="text" class="f22">
						<input maxlength="1" type="text" class="f23">
						<input maxlength="1" type="text" class="f24">
						<input maxlength="1" type="text" class="f25">
						<input maxlength="1" type="text" class="f26">
						<input maxlength="1" type="text" class="f27">
						<input maxlength="1" type="text" class="f28">
					</div>
					
					<div class="qContainer4">
						<p class="q4"><strong>4</strong></p>
						<input maxlength="1" type="text" class="f29">
						<input maxlength="1" type="text" class="f30">
						<input maxlength="1" type="text" class="f31">
						<input maxlength="1" type="text" class="f32">
						<input maxlength="1" type="text" class="f33">
						<input maxlength="1" type="text" class="f34">
						<input maxlength="1" type="text" class="f35">
						<input maxlength="1" type="text" class="f36">
						<input maxlength="1" type="text" class="f37">
					</div>

					<div class="qContainer5">
						<p class="q5"><strong>5</strong></p>
						<input maxlength="1" type="text" class="f38">
						<input maxlength="1" type="text" class="f39">
						<input maxlength="1" type="text" class="f40">
						<input maxlength="1" type="text" class="f41">
						<input maxlength="1" type="text" class="f42">
						<input maxlength="1" type="text" class="f43">
					</div>
 				
 					<div class="qContainer6">
						<p class="q6"><strong>6</strong></p>
						<input maxlength="1" type="text" class="f44">
						<input maxlength="1" type="text" class="f45">
						<input maxlength="1" type="text" class="f46">
						<input maxlength="1" type="text" class="f47">
						<input maxlength="1" type="text" class="f48">
						<input maxlength="1" type="text" class="f49">
						<input maxlength="1" type="text" class="f50">
						<input maxlength="1" type="text" class="f51">
						<input maxlength="1" type="text" class="f52">
						<input maxlength="1" type="text" class="f53">
						<input maxlength="1" type="text" class="f54">
					</div>

					<div class="qContainer7">
						<p class="q7"><strong>7</strong></p>
						<input maxlength="1" type="text" class="f55">
						<input maxlength="1" type="text" class="f56">
						<input maxlength="1" type="text" class="f57">
					</div>

					<div class="qContainer8">
						<p class="q8"><strong>8</strong></p>
						<input maxlength="1" type="text" class="f58">
						<input maxlength="1" type="text" class="f59">
						<input maxlength="1" type="text" class="f60">
						<input maxlength="1" type="text" class="f61">
						<input maxlength="1" type="text" class="f62">
					</div>
				</div>
			</div>

			<div class="row text-center b-legend">
					<button id="bt_end_game" ng-click=styling("/konec") class="b-submit b-endGame">KONEC HRY</button>	
			</div>
		</div>
</section>