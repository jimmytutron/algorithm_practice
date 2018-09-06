[
    {
        title: 'fruit',
        children: [
            {
                title: 'Apple',
                children: [
                    {
                        title: 'Fuji Apple',
                        children: [],
                    },
                    {
                        title: 'Macintosh',
                        children: [
                            {
                                title: 'Tech company',
                                children: [],
                            },
                            {
                                title: 'The fruit',
                                children: [],
                            }
                        ]
                    }
                ]
            }
        ]
    }
    {
        title: 'Vegetables',
        children: ...
    }
]

function createNestedLists(json) {
    function createList(list, parentList) {
        var ul = document.createElement('ul');
        for (var i = 0; i < list.length; i++) {
            var li = document.createElement('li');
            var subject = list[i].title;
            li.appendChild(subject);
            ul.appendChild(li);
            createList(list[i].children, li);
        }
        parentList.appendChild(ul);
    }

    createList(json, document.body);
}

<ul>
    <li>Fruit</li>
    <li>Vegetables</li>
</ul>



    <ul>
        <li>
            fruit
        <ul>
                <li>
                    Apple
                <ul>
                        <li>Fuji Apple</li>
                        <li>
                            Macintosh
                        <ul>
                                <li>Tech company</li>
                                <li>The fruit</li>
                            </ul>
                        </li>
                    </ul>
                </li>

            </ul>
        </li>




        // CLOSURE
        // the combination of a function and the enviroment in which it was declared in

        var array = ['jimmy', 'sue', 'kim', 'john'];
for (var i = 0; i < array.length; i++) {
            setTimeout((function () {
                var j = i;
                return function () {
                    console.log(array[j]);
                }
            })(), 1000);
        }
        
        
        // undefined
        // undefined
        // undefined
        // undefined
        
        // jimmy
        // sue
        // kim
        // john
        
        //debounce vs throttle
        
        //throttle - only run function every few seconds CALL THIS FUNCTION EVERY 200 MS
        //debounce - limit the number of times a function is called CALL THIS FUNCTION IN 200 MS, IF IT'S CALELD AGAIN WITHIN 200MS, RESET IT
        
        
        
        var functionCallId = 0;
function debounce(functionToCall, timeToWait) {
    return function () {
            functionCallId++;

        setTimeout(function () {
            var idAtTimeOfCall = functionCallId;
            return function () {
                if (functionCallId === idAtTimeOfCall) {
            functionToCall();
        }
    }
}(), timeToWait);
};
}

const debouncedFunc = debounce(func, 200);
debounce();
debounce();

// JQUERY
var div = $('div');
div.attr('class', 'my-class');

function $(tag) {
    const element = document.getElementsByTagName(tag);
    return {
            attr: function(attribute, name) {
            element.setAttribute(attribute, name)
        }
        };
    }
    
    var div = $('div');
    div.div
    div.attr === 'class'; // true
    div.attr('class', 'my-class'); // attr is not a Function
    
    //
    
    // let number = 1;
    
// function createUniqueDiv() {
            //     let newDiv = document.createElement("div");
            //     newDiv.id = `myDiv${number}`;
            //     document.body.append(newDiv);
            //     number++;
            // }

            // createUniqueDiv();
            // createUniqueDiv();
            // createUniqueDiv();
            // createUniqueDiv();

            {/* <body>
    <div id="myDiv1"></div>
    <div id="myDiv2"></div>
    <div id="myDiv3"></div>
    <div id="myDiv4"></div>
</body> */}

// 

const addTen = createMath(10);
        addTen(5); // 15
        addTen(12); // 22
        
function createMath(numberToAdd) {
    return function (number) {
        return numberToAdd + number;
    }
}


function once(functionToCallOnce) {
            let executed = false;
    return function () {
        if (!executed) {
            executed = true;
        functionToCallOnce();
    }
};
}

function alertMe() {
            alert('Me!');
        }
        
        const alertMe3x = times(3, alertMe);
        alertMe3x(); // Me!
        alertMe3x(); // Me!
        alertMe3x(); // Me!
        alertMe3x(); // does nothing
        alertMe3x(); // does nothing
        
function times(numberofTimes, functionToCall) {
            let counter = 0;
    return function () {
        if (counter !== numberOfTimes) {
            functionToCall();
        counter++;
    }
}
}