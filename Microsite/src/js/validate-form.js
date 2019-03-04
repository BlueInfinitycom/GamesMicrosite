"use strict";
		var trace=console.log.bind(console);

		$(document).ready(function(){		
			var name=$("#txt_name");
			var email=$("#txt_email");
			var tel=$("#txt_tel");
	
			var agreement_info=$("#agreementOfPersonalInfo");
			var agreement_using_info=$("#agreementOfUsingPersonalInfo");
			var bt_send_form=$("#bt_send_form");


			function _checkName(){
				var tmp_obj={};
					tmp_obj.status;
					tmp_obj.val;
					if (name.val()==="") {
						tmp_obj.status=false;
					}else{
						tmp_obj.status=true;
						tmp_obj.val=name.val();
					}					
					return tmp_obj;
			}

			function _checkEmailAddres(){
				var tmp_obj={};
					tmp_obj.status;
					tmp_obj.val;

				var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
					if (email.val() === '' || !re.test(email.val())){
    					tmp_obj.status=false;
					}else{
						tmp_obj.status=true;
						tmp_obj.val=name.val();
					}
					return tmp_obj;
			}

			function _checkTelNum(){
				var tmp_obj={};
					tmp_obj.status;
					tmp_obj.val;
				if(tel.val().length<9){
					tmp_obj.status=false;
				}else{
					tmp_obj.status=true;
					tmp_obj.val=tel.val();
				}
				return tmp_obj;
			}

			function _checkShop() {
				var tmp_obj={};
					tmp_obj.status;
					tmp_obj.val;
				var shop_txt=$("#shop option:selected").text();
				var shop_val=$("#shop option:selected").val();
					if (shop_val==="0") {
						tmp_obj.status=false;						
					}else{
						tmp_obj.status=true;
						tmp_obj.val=shop_txt;
					}
					return tmp_obj;
			}

			function _checkCheckbox(){
				var tmp_obj;

				if (agreement_info.is(":checked") && agreement_using_info.is(":checked")) {
					tmp_obj=true;
				}else{
					tmp_obj=false;
				}
				
				return tmp_obj;
			}

			function _checkForm(e){
				var name_surname;
				var email_addres;
				var telephone;
				var current_shop;
				
				var name_surname_obj = _checkName();
				var email_addres_obj = _checkEmailAddres();
				var telephone_obj = _checkTelNum();
				var current_shop_obj = _checkShop();
				var conditions= _checkCheckbox();				 

				if(name_surname_obj.status){
					name_surname=name_surname_obj.val;
					
					if (email_addres_obj.status) {	
							email_addres=email_addres_obj.val;

						if (telephone_obj.status) {
								telephone=telephone_obj.val;

								if (current_shop_obj.status) {
										current_shop=current_shop_obj.val;

										if (conditions) {
											trace("konec");
										}else{
											alert("Zaškrtněte prosím obě pole pro správnost vyplněných údajů a jejich zpracování");
										}

								}else{
									alert("Vyberte prosím prodejnu ve které se právě nacházíte.");
								}
						}else{
							alert("Vyplňte prosím celé telefonní číslo");
						}
					}else{
						alert("Vyplňte prosím správně emailovou adresu");
					}
				}else{
					alert("Vyplňte prosím Jméno a příjmení");
				}

				e.preventDefault();
			}

			$("form").submit(_checkForm);
		});

