<!-- <script src="src/js/validate-form.js"></script> -->

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
				<h1>Vyplňte, prosím, uvedený formulár</h1>
			</div>

			<form>
				<div class="row text-center center">
					<div class="form-group">
    						<label class="lb_inpt" for="name">Meno a priezvisko:</label>
    						<input type="text" class="form-control" id="txt_name" placeholder="">
  					</div>
				</div>

				<div class="row text-center center">
					<div class="form-group">
    					<label class="lb_inpt" for="email">Email:</label>
    					<input type="email" class="form-control" id="txt_email" placeholder="">
  					</div>
				</div>

				<div class="row text-center center">
					<div class="form-group">
    					<label class="lb_inpt" for="tel">Telefón:</label>
    					<input type="tel" class="form-control" id="txt_tel" placeholder="">
  					</div>
				</div>

				<div class="row text-center">
					<h3>Výber predajne</h3>
				</div>

				<div class="row text-center">
					<select name="" id="shop">
						<option value="0">-- Vyberte predajňu, v ktorej sa nachádzate --</option>
						<option value="4">Samsung Brand Store Bratislava Central</option>
					</select>
				</div>
				
				<div class="row agreement">
					<div class="col-xs-1 col-xs-push-1">
						<input id="agreementOfPersonalInfo" value="" type="checkbox">
					</div>
					<div class="col-xs-9 col-xs-push-1">
						Súhlasím s pravidlami súťaže a potvrdzujem, že uvedené údaje sú správne a pravdivé.
					</div>
				</div>
				
				<div class="row agreement">
					<div class="col-xs-1 col-xs-push-1">
						<input id="agreementOfUsingPersonalInfo" value="" type="checkbox">
					</div>
					<div class="col-xs-9 col-xs-push-1">
						Súťažiaci súhlasí s prípadným využitím jeho osobných údajov v rámci marketingovej komunikácie vyhlasovateľa.
					</div>
				</div>
				
				<div class="row text-center">
					<input ng-click=styling("/krizovka")  type="submit" id="bt_send_form" value="ODOSLAŤ" class="b-submit b-send">
				</div>
			</form>
		</div>
</section>