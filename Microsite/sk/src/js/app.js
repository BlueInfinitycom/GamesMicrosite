            var trace=console.log.bind(console);
            var count=0;
            var interval;
            var correct=0;
            var wrong=0;


            var data_obj={};
            data_obj.jmeno="";
            data_obj.email="";
            data_obj.telefon=0;
            data_obj.prodejna="";
            data_obj.cas=0;
            data_obj.answers=[];
            data_obj.odpoved_1="";
            data_obj.odpoved_2="";
            data_obj.odpoved_3="";
            data_obj.odpoved_4="";
            data_obj.odpoved_5="";
            data_obj.odpoved_6="";
            data_obj.odpoved_7="";
            data_obj.odpoved_8="";

            var q1=[1,2,3,4,5,6,7,8];
            var q2=[9,3,10,11,12,13,14,15,16,17,18];
            var q3=[6,19,20,21,22,23,24,25,26,27,28];
            var q4=[23,29,30,31,32,33,34,35,36,37];
            var q5=[30,38,39,40,41,42,43];
            var q6=[44,45,46,47,48,49,50,33,51,52,53,54];
            var q7=[55,56,57,48];
            var q8=[58,59,35,60,61,62];
            var ans1=[];
            var ans2=[];
            var ans3=[];
            var ans4=[];
            var ans5=[];
            var ans6=[];
            var ans7=[];
            var ans8=[];
            var incr=1;
            var answ_arr=[];
            var answ_correct=["BLACKSKY","MARSHMALLOW","SMARTSWITCH","SVETELNOST","EVOPLUS","VODEODOLNOST","NANO","AMOLED"];

            function _getScore(){
              var arr;  
              switch(incr){
                case 0: arr=q1;break;
                case 1: arr=q1;break;
                case 2: arr=q2;break;
                case 3: arr=q3;break;
                case 4: arr=q4;break;
                case 5: arr=q5;break;
                case 6: arr=q6;break;
                case 7: arr=q7;break;
                case 8: arr=q8;break;
              }

              var answ_container=[];
                // trace("delka: "+arr.length,arr,incr);
                for(var i=0;i<arr.length;i++){
                  var res=$("#crosswordContainer .f"+arr[i]).val().toUpperCase();                                    
                  answ_container.push(res);
                }
                answ_arr.push(answ_container.join(""));                              
                
                if (incr<8) {
                  incr++;
                  _getScore();  
                }else{
                  data_obj.answers=answ_arr;

                  data_obj.odpoved_1=answ_arr[0].length===0 ? "X" : answ_arr[0];
                  data_obj.odpoved_2=answ_arr[1].length===0 ? "X" : answ_arr[1];
                  data_obj.odpoved_3=answ_arr[2].length===0 ? "X" : answ_arr[2];
                  data_obj.odpoved_4=answ_arr[3].length===0 ? "X" : answ_arr[3];
                  data_obj.odpoved_5=answ_arr[4].length===0 ? "X" : answ_arr[4];
                  data_obj.odpoved_6=answ_arr[5].length===0 ? "X" : answ_arr[5];
                  data_obj.odpoved_7=answ_arr[6].length===0 ? "X" : answ_arr[6];
                  data_obj.odpoved_8=answ_arr[7].length===0 ? "X" : answ_arr[7];

                  _getAnswheres();
                }
              }


              function _getAnswheres(){

                for(var i=0;i<8;i++){
                  // trace(answ_arr[i]===answ_correct[i]," : "+answ_arr[i]+": "+answ_correct[i]);
                  if (answ_arr[i]===answ_correct[i]) {
                    correct++;
                  }else{
                    wrong++;
                  }
                }
                // trace("correct: "+correct,"wrong: "+wrong);
              }

              function _saveFormData(jmeno,email,telefon,prodejna) {
                data_obj.jmeno=jmeno;
                data_obj.email=email;
                data_obj.telefon=telefon;
                data_obj.prodejna=prodejna;
              }

              function _eraseFormData(){
                data_obj.jmeno;
                data_obj.email;
                data_obj.telefon;
                data_obj.prodejna;
              }

              function _sendData(){     

                // trace("jmeno:"+ typeof(data_obj.jmeno),
                  "email:"+typeof(data_obj.email),
                  "telefon:"+typeof(data_obj.telefon),
                  "prodejna:"+typeof(data_obj.prodejna),
                  "cas:"+ typeof(data_obj.cas),
                  "odpoved_1:"+typeof(data_obj.odpoved_1), 
                  "odpoved_2:"+typeof(data_obj.odpoved_2), 
                  "odpoved_3:"+ typeof(data_obj.odpoved_3), 
                  "odpoved_4:"+ typeof(data_obj.odpoved_4), 
                  "odpoved_5:"+ typeof(data_obj.odpoved_5),
                  "odpoved_6:"+typeof(data_obj.odpoved_6), 
                  "odpoved_7:"+typeof(data_obj.odpoved_7),
                  "odpoved_8:"+ typeof(data_obj.odpoved_8);

                $.post("data.php",
                {
                  jmeno:data_obj.jmeno,
                  email:data_obj.email,
                  telefon:data_obj.telefon,
                  prodejna:data_obj.prodejna,
                  cas:data_obj.cas,
                  odpoved_1:data_obj.odpoved_1, 
                  odpoved_2:data_obj.odpoved_2, 
                  odpoved_3:data_obj.odpoved_3, 
                  odpoved_4:data_obj.odpoved_4, 
                  odpoved_5:data_obj.odpoved_5,
                  odpoved_6:data_obj.odpoved_6, 
                  odpoved_7:data_obj.odpoved_7,
                  odpoved_8:data_obj.odpoved_8
                },
                function(data, status){
                  trace("data: "+data, "status: "+status, "correct: "+correct, "wrong: "+wrong);
                    var tmp_int = setInterval(function(){
                       $(".b-c-ans span").text(correct);
                       $(".b-w-ans span").text(wrong);
                       clearInterval(tmp_int);
                    },2000);
                 


                });
              }

              function _startInterval(){
                interval=setInterval(_int,1000);
              }

              function _clearInterval(){
                clearInterval(interval);
                count=0;
                trace("clearinterval");
              }

              function _int(){
                count++;
                trace(count);
              }

              function _resetApp(){
                  clearInterval(interval);
                count=0;
                interval;
                correct=0;
                wrong=0;
                data_obj.jmeno="";
                data_obj.email="";
                data_obj.telefon="";
                data_obj.prodejna="";
                data_obj.cas=0;
                data_obj.answers=[];
                data_obj.odpoved_1="";
                data_obj.odpoved_2="";
                data_obj.odpoved_3="";
                data_obj.odpoved_4="";
                data_obj.odpoved_5="";
                data_obj.odpoved_6="";
                data_obj.odpoved_7="";
                data_obj.odpoved_8="";

                ans1=[];
                ans2=[];
                ans3=[];
                ans4=[];
                ans5=[];
                ans6=[];
                ans7=[];
                ans8=[];
                incr=1;
                answ_arr=[];
              }
            
              angular.module("app",["ngRoute"])
              .config(function($routeProvider){
                $routeProvider
                .when("/krizovka", {templateUrl : "crossword.php",controller:"styleRouter"})
                .when("/formular", {templateUrl : "form.php",controller:"styleRouter"})
                .when("/konec", {templateUrl : "endgame.php",controller:"styleRouter"})
                .when("/home", {templateUrl : "homepage.php",controller:"styleRouter"})
                .otherwise({redirectTo: "/home",controller:"styleRouter"})
              })

              .controller("styleRouter",["$scope","$location","$anchorScroll",function($scope,$location,$anchorScroll){}])     
              .controller("styleGenerator",["$scope","$location",function($scope,$location){

                $scope.styling=function(section){
              // trace("sekce: "+section);

                  if (section==="/krizovka") {            
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
                          tmp_obj.val=email.val();
                        }
                        return tmp_obj;
                      }

                      function _checkTelNum(){
                        var tmp_obj={};
                        tmp_obj.status;
                        tmp_obj.val;
                        if(tel.val().length<9 || tel.val().length >9){
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

                      function _checkForm(){
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
                              String(name_surname=name_surname_obj.val);

                              if (email_addres_obj.status) {  
                                  String(email_addres=email_addres_obj.val);

                                if (telephone_obj.status) {
                                   parseInt(telephone=telephone_obj.val);

                                  if (current_shop_obj.status) {
                                      String(current_shop=current_shop_obj.val);

                                    if (conditions) {
                                      // trace(name_surname,email_addres,telephone,current_shop,typeof(name_surname),typeof(email_addres),typeof(telephone),typeof(current_shop));
                                        _saveFormData(name_surname,email_addres,telephone,current_shop);
                                        _startInterval();
                                       $location.path(section,false);
                         }else{
                          alert("Zaškrtnite, prosím, obidve polia pre správnosť vyplnených údajov a ich spracovanie");
                        }

                                }else{
                                  alert("Vyberte predajňu, v ktorej sa nachádzate.");
                                  }
                                    }else{
                                      alert("Vyplňte, prosím, celé telefónne číslo");
                                    }
                                      }else{
                                        alert("Vložte, prosím, platnú emailovú adresu");
                                    }
                                      }else{
                                        alert("Vyplňte, prosím, meno a priezvisko");
                                    }
                                }
                        _checkForm();
              }else{
              if (section==="/konec") {

                  var container='<div class="b-w-alert-bg"><p class="b-prompt-msg">Chcete naozaj ukončiť hru?</p><button class="b-submit b-prompt-bt-left">Áno</button><button class="b-submit b-prompt-bt-right">Nie</button></div>';
                    $(document.body).append(container);   
                    $(".b-prompt-bt-left").click(function(){
                      $(".b-w-alert-bg").remove();
                        data_obj.cas=count;
                        _clearInterval();
                        _getScore();                
                        _sendData();

                      $scope.$apply(function(){
                      $location.path('/konec');
                    });
                        // $location.path(section,false);
                        trace("konec hry angular", "sekce: "+section);
                    });            

                    $(".b-prompt-bt-right").click(function(){
                        $(".b-w-alert-bg").remove();
                    });  

              }else{

                if (section==="/home") {
                  _resetApp();
                  trace("data: "+data_obj);
                }
                $location.path(section,false);                  
              }            
              }
            }
        }])