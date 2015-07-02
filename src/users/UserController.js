'use strict';
/*
 'ngMaterial','ui.bootstrap'
*/
(function(){

  MP=angular
       .module('users',['ngMaterial','ui.bootstrap'])
        .controller('MiraPlace',main);
  //control 1 (principal)
  function main($scope,$mdSidenav,$mdDialog){
    
      //preloader
        $scope.$watch('$viewContentLoaded', function(){
              
        });
        getAngular($scope);
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
        $scope.chat={
                      messages:"",
                      message:"",
                      send:function(){
                          this.messages+="\n"+this.message;
                          this.message="";
                      }
                    };                        
         $scope.$watch('Catalogue.tags.length', function() {
                if($scope.Catalogue.tags.length==0)
                  $scope.Catalogue.polos=$scope.Polos;

              });
        $scope.Catalogue={
              hidden:true,
              tags:[],
              polos:[],
              addTag:function(tag){
                    var repetida=false;
                    for(var i in this.tags)
                          if(this.tags[i]==tag){
                            repetida=true;
                            break;
                          } 

                    if(!repetida){
                      this.tags.push(tag);
                      this.getPolos();
                    }
                    
                  },
              getPolos:function(){
                   this.polos=[];
                   var polos=$scope.Polos;                   
                   var distinto=false;
                  
                   for(var i=0 in polos)
                     if(polos[i].club==this.tags[0])                          
                          this.polos.push(polos[i]);

                     
                  
              },
              mostrar:function(club){

                if(club=="prueba")
                  this.hidden=true;
                else
                  this.hidden=false;
                

              },
              categories:[{label:"Clubs",subcategories:["Barcelona","Real Madrid"]},
                          {label:"Seasons",subcategories:["Summer","Spring"]},
                          {label:"Offers",subcategories:["50% OFF"]}
                          ]

        };     
        $scope.Details={ 
              size:{label:"Size",value:["S","M","L","XL"],ind:0}
             ,color:{label:"Color",value:["#6FAE9B","#756FAE","#DBE279"],ind:0}
              ,slides:[{image:'./img/polos/img1.jpg'},
                      {image:'./img/polos/img2.jpg'},
                      {image:'./img/polos/img3.jpg'},
                      {image:'./img/polos/img4.jpg'},
                      {image:'./img/polos/img5.jpg'}]

            };
        
      $scope.Home={
              slides:[{image:'./img/img1.svg',text:'Adidas'},
                      {image:'./img/img2.svg',text:'Umbro'}]

      };
  //polos
      $scope.Polos=[
            {image:'./img/polos/img1.jpg',club:"Real Madrid"},
            {image:'./img/polos/img2.jpg',club:"CBF"},
            {image:'./img/polos/img3.jpg',club:"Barcelona"},
            {image:'./img/polos/img4.jpg',club:"ninguno"},
            {image:'./img/polos/img5.jpg',club:"prueba"}
      ];
}  
  
})();

