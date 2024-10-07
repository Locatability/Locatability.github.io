const Features =["Luminance", "D3Color","Hue","Size", "Orientation","Length","Shape"];
const GriddedSetSizeSlope = {
    "Size":0.03304,
    "D3Color":0.04369,
    "Luminance":0.05622,
    "Orientation":0.05328,
    "Hue":0.06462,
    "Length":0.09473,
    "Shape":0.1743,
};

const GriddedSetSizeIntercept = {
    "Size":2.833,
    "D3Color":2.776,
    "Luminance":2.738,
    "Orientation":2.799,
    "Hue":2.748,
    "Length":2.748,
    "Shape":2.781,
};

const NonGriddedSetSizeSlope = {
    "Size":0.05352,
    "D3Color":0.028,
    "Luminance":0.05520,
    "Orientation":0.07953,
    "Hue":0.04964,
    "Length":0.1464,
    "Shape":0.1473,
};

const NonGriddedSetSizeIntercept = {
    "Size":2.792,
    "D3Color":2.788,
    "Luminance":2.790,
    "Orientation":2.745,
    "Hue":2.758,
    "Length":2.690,
    "Shape":2.820,
};

const GriddedTarLocSlope = {
    "Size":0.1144680,
    "D3Color":0.1032850,
    "Luminance":0.0478935,
    "Orientation":0.0478935,
    "Hue":0.1475980,
    "Length":0.1230170,
    "Shape":0.8284310,
};

const GriddedTarLocIntercept = {
    "Size":2.85732,
    "D3Color":2.83214,
    "Luminance":2.83403,
    "Orientation":2.87242,
    "Hue":2.82725,
    "Length":2.88998,
    "Shape":2.82883,
};

const NonGriddedTarLocSlope = {
    "Size":0.1339710,
    "D3Color":0.0948123,
    "Luminance":0.05520,
    "Orientation":0.2411680,
    "Hue":0.1552810,
    "Length":0.4114900,
    "Shape":1.0051200,
};

const NonGriddedTarLocIntercept = {
    "Size":2.80855,
    "D3Color":2.85941,
    "Luminance":2.84695,
    "Orientation":2.83202,
    "Hue":2.84832,
    "Length":2.80283,
    "Shape":2.77721,
};

const WIHTE = "hsl(0, 0%, 100%)";
const BLACK = "hsl(0, 0%, 0%)";
const D3TARGET = "	hsl(210, 90%, 32%)";
const D3DISTRACTOR = "hsl(203, 47%, 82%)";
const HUETARGET = "hsl(3, 73%, 75%)";
const HUEDISTRACTOR = "hsl(214, 64%, 72%)";
const SS_RANGE = [12,768]; // The range of set size
const TL_RANGE = [0,0.8]; // The range of distance between target and the display center.

var SetSizeValue = 12;
var TarLocValue = 0.5;
var IsGridded = false;
var FeatureAvailable = Features;
var IsSSActive = true; // whether set size is the active factor?

function hideAllElements(){
    elements = document.querySelectorAll('.circle');
    elements.forEach(element =>{
        element.remove();
    })
    elements = document.querySelectorAll('.rectangle');
    elements.forEach(element =>{
        element.remove();
    })
    //document.querySelectorAll('.cross').style.display = 'none';
}

function clickSetSize(){
    tarLocDiv = document.getElementById('tarLocation');
    //tarLocBtn = document.getElementById('TarLocBtn');
    tarLocSlider = document.getElementById('TarLocslider');
    tarLocInput = document.getElementById('TarLocNum');
    setSizeDiv = document.getElementById('setsizes');
    setSizeSlider = document.getElementById('SetSizeslider');
    setSizeInput = document.getElementById('SetSizeNum');
    //setSizeBtn = document.getElementById('SetSizeBtn');

    tarLocDiv.style.backgroundColor = '#f0f0f0';
    //tarLocBtn.style.backgroundColor = 'grey';
    tarLocSlider.disabled = true;
    tarLocInput.disabled = true;
    tarLocInput.readOnly = true;
    tarLocInput.value = "";
    setSizeDiv.style.backgroundColor = 'white';
    //setSizeBtn.style.backgroundColor = 'white';
    setSizeSlider.disabled = false;
    setSizeInput.disabled = false;
    setSizeInput.readOnly = false;
    setSizeInput.value = SetSizeValue;
    setSizeSlider.value = TarLocValue;
}

function clickTarLoc(){
    tarLocDiv = document.getElementById('tarLocation');
    //tarLocBtn = document.getElementById('TarLocBtn');
    tarLocSlider = document.getElementById('TarLocslider');
    tarLocInput = document.getElementById('TarLocNum');
    setSizeDiv = document.getElementById('setsizes');
    setSizeSlider = document.getElementById('SetSizeslider');
    setSizeInput = document.getElementById('SetSizeNum');
    //setSizeBtn = document.getElementById('SetSizeBtn');

    tarLocDiv.style.backgroundColor = 'white';
    //tarLocBtn.style.backgroundColor = 'white';
    tarLocSlider.disabled = false;
    tarLocInput.disabled = false;
    tarLocInput.value = TarLocValue;
    tarLocSlider.value = TarLocValue;
    setSizeDiv.style.backgroundColor = '#f0f0f0';
    //setSizeBtn.style.backgroundColor = 'grey';
    setSizeSlider.disabled = true;
    setSizeInput.disabled = true;
    setSizeInput.value = ""
    setSizeInput.readOnly = true;
}

function updateSetSize(value){
    SetSizeValue = value;
    IsSSActive = true;
    calcuLocatability();
}

function updateTarLoc(value){
    TarLocValue = value;
    IsSSActive = false;
    calcuLocatability();
}

function toggleFeatures(checkboxButton){
    if((checkboxButton.checked) && (!FeatureAvailable.includes(checkboxButton.id)))
    {
        FeatureAvailable.push(checkboxButton.id);
    }
    if(!checkboxButton.checked)
    {
        unCheckedFeature = checkboxButton.id;
        FeatureAvailable = FeatureAvailable.filter(item => item !== unCheckedFeature);
    }
    calcuLocatability();
}

function toggleLayouts(radioButton)
{
    if(radioButton.id === "gridded" && IsGridded) return;
    if(radioButton.id === "nongridded" && !IsGridded) return;
    if (radioButton.id === "gridded") {
        //if (radioButton.getAttribute("data-clicked") == "true") {
            radioButton.checked = radioButton.checked;
            IsGridded = radioButton.checked;
            //radioButton.setAttribute("data-clicked", "false");
            document.getElementById('nongridded').checked = !radioButton.checked;
            //document.getElementById('nongridded').setAttribute("data-clicked", "true");
        }
        else {
            radioButton.checked = radioButton.checked;
            IsGridded = !radioButton.checked;
            //radioButton.setAttribute("data-clicked", "false");
            document.getElementById('gridded').checked = !radioButton.checked;
        }
    calcuLocatability();
}

function toggleSetSize(){
    document.getElementById('tarLocation').checked = false;
    const Slider = document.getElementById('theSlider');
    const thNum = document.getElementById('theNum');
    //reset the min, max and step
    Slider.min = 12;
    Slider.value = 12;
    Slider.max = 768;
    Slider.step = 1;
    thNum.value = 12;
    thNum.max = 12;
    thNum.min = 768;
    thNum.step = 1;
    updateSetSize(12);
}

function toggleTarLocation(){
    document.getElementById('setSize').checked = false;
    const Slider = document.getElementById('theSlider');
    const thNum = document.getElementById('theNum');
    //reset the min, max and step
    Slider.min = 0;
    Slider.value = 0;
    Slider.max = 0.8;
    Slider.step = 0.01;
    thNum.max = 0;
    thNum.value = 0;
    thNum.min = 0.8;
    thNum.step = 0.01;
    updateTarLoc(0);
}


function calcuLocatability(){
    
    var locatabilities = {};
    var theSlopes;
    var theIntercepts;
    if(IsSSActive){
        if (IsGridded){
            theSlopes = GriddedSetSizeSlope;
            theIntercepts = GriddedSetSizeIntercept;
        }
        else{
            theSlopes = NonGriddedSetSizeSlope;
            theIntercepts = NonGriddedSetSizeIntercept;
        }
    }
    else{
        if (IsGridded){
            theSlopes = GriddedTarLocSlope;;
            theIntercepts = GriddedTarLocIntercept;
        }
        else{
            theSlopes = NonGriddedTarLocSlope;
            theIntercepts = NonGriddedTarLocIntercept;
        }
    }

    Features.forEach(element => {
        var xValue;
        if(IsSSActive)
            xValue = Math.log(SetSizeValue) / Math.LN10;
        else
            xValue = TarLocValue;
        locatabilities[element] =(10**(xValue * theSlopes[element] + theIntercepts[element]));
    });
    const objLocat = Object.entries(locatabilities);
    
    // Step 2: Sort the array by value
    objLocat.sort((a, b) => a[1] - b[1]); // Ascending order
    var theFea = "Luminance";
    var orderOfVariables = [];
    var timeOfVariables = [];
    for(loc of objLocat){
        if (FeatureAvailable.includes(loc[0]))
        {
            orderOfVariables.push(loc[0]);
            timeOfVariables.push(Math.floor(loc[1]));
        }
    }
    if(orderOfVariables.length >0)
    {
        const VisualVariable = document.getElementById('visualVariable');
        VisualVariable.innerText = orderOfVariables[0];
        const Time = document.getElementById('taskTime');
        Time.innerText = timeOfVariables[0];
        const txt1 = document.getElementById('outtxt1');
        const txt2 = document.getElementById('outtxt2');
        const txt3 = document.getElementById('outtxt3');
        txt1.innerText = "Based on your settings, we suggest utilizing";
        txt2.innerText = "which will take approximately";
        txt3.innerText = " milliseconds to find the target.  ";
    }
    else{
        const VisualVariable = document.getElementById('visualVariable');
        const txt1 = document.getElementById('outtxt1');
        const txt2 = document.getElementById('outtxt2');
        const txt3 = document.getElementById('outtxt3');
        const Time = document.getElementById('taskTime');
        VisualVariable.innerText = "";
        Time.innerText = "";
        txt1.innerText = "No visual variables are available. Please enable at least one visual variable.";
        txt2.innerText = "";
        txt3.innerText = "";
    }

    //const OrderInfo = document.getElementById('orderInfo');
    // var inforToshow = "";
    // for (let i = 1; i < orderOfVariables.length; i++) {
    //     inforToshow  = inforToshow + orderOfVariables[i] + "    " + timeOfVariables[i] + " milliseconds\n";
    // }
    if (orderOfVariables.length < 1){
        hideAllElements();
    }
    else{
        //document.getElementById('stimulus-container').style.display = 'block'
        theFea = orderOfVariables[0];
        //OrderInfo.innerText = inforToshow;


        // Step 3: Update the example stimulus
        var Feature ={
            targetShape: "rectangle",
            distractorShape: "rectangle",
            targetColor: HUEDISTRACTOR,
            distractorColor: HUEDISTRACTOR,
            tdSizeRatio: 1,//the ratio between target size and distractor size
            tdLengthRatio: 1, //the ratio between target length and distractor length
            targetAngle: 0,
            distractorAngle: 0,
            curvature: null,
            closure: null,
            intersection: null,
            terminator: null,
            activeFeature: "Hue"
        }
      
      // The data structure that store all necessary factor info for an experiment
        var Factor ={
            targetNumber: 1,
            elementNumber: 12,
            targetLocation: {}, //Has 4 variables - left, right, top, middle 
            orientation: 0,
            spatialPattern: null, //string: "Gridded", "Randomized"
            proximity : null,  // type: float
            activeFactor: "None",
            row: 0,
            col: 0
        }
        if(theFea === Features[0]){ // luminance
            Feature.targetColor = WIHTE;
            Feature.distractorColor = BLACK;
        }
        if(theFea === Features[1]){ // D3Color
            Feature.targetColor = D3TARGET;
            Feature.distractorColor = D3DISTRACTOR;
        }
        if(theFea === Features[2]){ // hue
            Feature.targetColor = HUETARGET;
            Feature.distractorColor = HUEDISTRACTOR;
        }  
        if(theFea === Features[3]){ // size
            Feature.targetShape = "circle";
            Feature.distractorShape = "circle";
        } 
        if(theFea === Features[4]){ // orientation
            Feature.targetAngle = 45;
        }
        if(theFea === Features[5]){ // length
            Feature.tdLengthRatio = 0.4;
        } 
        if(theFea === Features[6]){ // shape
            Feature.targetShape = "cross";
            Feature.distractorShape = "circle";
        }
        Feature.activeFeature = theFea;
        if(IsSSActive){
            Factor.elementNumber = SetSizeValue;
            TarLocValue = Math.random() * (TL_RANGE[1] - TL_RANGE[0] );
            Factor.targetLocation = tarLoc2Coor(TarLocValue);
        }
        else{
            
            Factor.targetLocation = tarLoc2Coor(TarLocValue);
            SetSizeValue = Math.floor(Math.random() * (SS_RANGE[1] - SS_RANGE[0] + 1)) + SS_RANGE[0];
            Factor.elementNumber = SetSizeValue;
        }
            
        Factor.spatialPattern = IsGridded?"Gridded":"Randomized";
        generateStimulus(Feature,Factor); 
    }
    createTable(orderOfVariables,timeOfVariables);
}

function tarLoc2Coor(dis){ // convert distance between target to center to a coordinate (x,y) 
    dis = Number(dis);
    //randomly get a x
    let theY = -1;
    let xMin = dis < 2/3 ? 2/3 - dis:0; // the display is normalized by y. I.e. y =1, x =4/3
    let xMax = dis < 2/3 ? 2/3 + dis:4/3;
    let theX;
    let randomFlag;
    while(theY<0.01 || theY > 0.99)
    {
        theX = Math.random()* (xMax - xMin ) + xMin;
        randomFlag = Math.random() > 0.5 ? true:false;
        theY = Math.sqrt(dis*dis - (theX - 2/3)*(theX - 2/3));
        theY = randomFlag ? 1/2 + theY : 1/2 -theY;
    }

    // the stimulus.js is set in 8*6 coordinate
    theX*=6;
    theY*=6;
    dis*=6;
    return {x:theX, y:theY, dis:dis};
}

// Function to create the table
function createTable(variables, times) {

    const tableContainer = document.getElementById('output-container');
    // Clear previous table
    while (tableContainer.firstChild) {
        tableContainer.removeChild(tableContainer.firstChild); // Remove each child
    }
    // Create a table element
    const table = document.createElement('table');
    
    // Create table header
    const headerRow = document.createElement('tr');
    const indexHeader = document.createElement('th');
    indexHeader.textContent = 'Variable';
    const valueHeader = document.createElement('th');
    valueHeader.textContent = 'Estimated Time';
    
    headerRow.appendChild(indexHeader);
    headerRow.appendChild(valueHeader);
    table.appendChild(headerRow);
    
    // Populate the table with data
    variables.forEach((value, index) => {
        const row = document.createElement('tr');
        
        const indexCell = document.createElement('td');
        indexCell.textContent = value;
        const valueCell = document.createElement('td');
        valueCell.textContent = times[index] + " ms";
        
        row.appendChild(indexCell);
        row.appendChild(valueCell);
        table.appendChild(row);
    });
    
    // Append the table to the container
    tableContainer.appendChild(table);
}

