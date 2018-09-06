// * {
//     margin: 0;
//     padding: 0;
//     border: 0;
//    }
   
   // <div id="test" class="test" data-attriibute="2">
   
   // document.getElementsByTagName('*'); // every single element on the page
   // a.forEach, a.map, a[0], a[1], a[2];
   document;
   Document; Element;
   
   Element.prototype.getElementsByClassName = function(className) {
     var allElements = document.getElementsByTagName('*'); 
     var allElementsWithTheClassName = [];
     for (var i = 0; i < allElements.length; i++) {
       // .getAttribute, .classList,
       const anElement = allElements[i];
       const anElementsClassAttribute = anElement.getAttribute('class');
       if (anElementsClassAttribute.split(' ').includes(className)){
         allElementsWithTheClassName.push(anElement)
       }
     }
     
     return allElementsWithTheClassName;
   }
   
   // "jimmy kim sue".includes("jim"); // true
   // "reddiv bluediv".includes("div"); // true
   // "reddiv bluediv" -> ["reddiv", "bluediv"]
   // "reddiv bluediv".split(' ') -> ["reddiv", "bluediv"] has "div"? ["reddiv", "bluediv"].includes("div");