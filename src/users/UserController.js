'use strict';
/*
 'ngMaterial','ui.bootstrap'
*/
(function(){

  MP=angular
       .module('users',['ngMaterial','ui.bootstrap'])   
        .controller('MiraPlace',main)
        .directive('slideable',f_slideable)
        .directive('slideToggle',f_slideToggle);
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

        $scope.Catalogue={
              hidden:true,
              tags:[],
              categories:[{label:"Clubs",subcategories:["Barcelona","Real Madrid"]},
                          {label:"Seasons",subcategories:["Summer","Spring"]},
                          {label:"Offers",subcategories:["50% OFF"]}
                          ]

        };     
        $scope.Details={ 
              size:{label:"Size",value:["S","M","L","XL"],ind:0}
             ,color:{label:"Color",value:["#6FAE9B","#756FAE","#DBE279"],ind:0}
            };
        
        
              $scope.slides = [
            {name: 'Not my cat.', url: 'https://farm2.staticflickr.com/1318/5114665665_e55b2c2169_n.jpg'},
            {name: 'Again, not my cat.', url: 'https://farm2.staticflickr.com/1079/901626554_8bc51ec160_n.jpg'}];
      
  }     

  /*directivas del slide show*/
  function f_slideable() {
    return {
        restrict:'C',
        compile: function (element, attr) {
            // wrap tag
            var contents = element.html();
            element.html('<div class="slideable_content" style="margin:0 !important; padding:0 !important" >' + contents + '</div>');

            return function postLink(scope, element, attrs) {
                // default properties
                attrs.duration = (!attrs.duration) ? '1s' : attrs.duration;
                attrs.easing = (!attrs.easing) ? 'ease-in-out' : attrs.easing;
                element.css({
                    'overflow': 'hidden',
                    'height': '0px',
                    'transitionProperty': 'height',
                    'transitionDuration': attrs.duration,
                    'transitionTimingFunction': attrs.easing
                });
            };
        }
    };
}


function f_slideToggle() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var target, content;
            
            attrs.expanded = false;
            
            element.bind('click', function() {
                if (!target) target = document.querySelector(attrs.slideToggle);
                if (!content) content = target.querySelector('.slideable_content');
                
                if(!attrs.expanded) {
                    content.style.border = '1px solid rgba(0,0,0,0)';
                    var y = content.clientHeight;
                    content.style.border = 0;
                    target.style.height = y + 'px';
                } else {
                    target.style.height = '0px';
                }
                attrs.expanded = !attrs.expanded;
            });
        }
    }
}





  
})();

