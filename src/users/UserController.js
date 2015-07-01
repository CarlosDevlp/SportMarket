'use strict';
/*
 
*/
(function(){

  MP=angular
       .module('users',['ngMaterial'])   
        .controller('MiraPlace',main);
  //control 1 (principal)
  function main($scope,$mdSidenav,$mdDialog){
    
      //preloader
        $scope.$watch('$viewContentLoaded', function(){    
        });

        $scope.title="Sport Market";

        $scope.menu=[{label:"Home",link:"pages/Home.tmpl.html"},
                     {label:"Catalogue",link:"pages/Catalogue.tmpl.html"},
                     {label:"About Us",link:"pages/AboutUs.tmpl.html"},
                     {label:"Contact Us",link:"pages/ContactUs.tmpl.html"}];

        $scope.contactUs={                        
                          message:{
                                  title:"how can we help you?",
                                  txtBox:["Name","Order Number","Email"],
                                  cmbBox:["costumer service","a","b","c"],
                                  txtArea:"Message",
                                  btn:"Send"},
                           references:{
                                  title:"References:",
                                  text:["Address","Telephone","Email"]
                           }
                        };

                $scope.Catalogue={
                      tags:[]
                };     

        $scope.chat={
                      messages:"",
                      message:"",
                      send:function(){
                          this.messages+="\n"+this.message;

                      }
                    };

      
  }     


  
})();
  