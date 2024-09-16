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

const WIHTE = "hsl(0, 0%, 100%)";
const BLACK = "hsl(0, 0%, 0%)";
const D3TARGET = "	hsl(210, 90%, 32%)";
const D3DISTRACTOR = "hsl(203, 47%, 82%)";
const HUETARGET = "hsl(3, 73%, 75%)";
const HUEDISTRACTOR = "hsl(214, 64%, 72%)";

var SetSize = 12;
var IsGridded = true;
var FeatureAvailable = Features;


function updateSetSize(value){
    SetSize = value;
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


function calcuLocatability(){
    
    locatabilities = {};
    if (IsGridded){
        theSlopes = GriddedSetSizeSlope;
        theIntercepts = GriddedSetSizeIntercept;
    }
    else{
        theSlopes = NonGriddedSetSizeSlope;
        theIntercepts = NonGriddedSetSizeIntercept;
    }
    Features.forEach(element => {
        logSS = Math.log(SetSize) / Math.LN10;
        locatabilities[element] =(10**(logSS * theSlopes[element] + theIntercepts[element]));
    });
    const objLocat = Object.entries(locatabilities);
    
    // Step 2: Sort the array by value
    objLocat.sort((a, b) => a[1] - b[1]); // Ascending order
    var theFea = "Luminance"
    for(loc of objLocat){
        theFea = loc[0];
        if (FeatureAvailable.includes(theFea))
        {
            const VisualVariable = document.getElementById('visualVariable');
            VisualVariable.innerText = loc[0];
            const Time = document.getElementById('taskTime');
            Time.innerText = Math.floor(loc[1]) + " milliseconds";
            break;
        }
    }
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
    if(theFea === Features[0]){
        Feature.targetColor = WIHTE;
        Feature.distractorColor = BLACK;
    }
    if(theFea === Features[1]){
        Feature.targetColor = D3TARGET;
        Feature.distractorColor = D3DISTRACTOR;
    }
    if(theFea === Features[2]){
        Feature.targetColor = HUETARGET;
        Feature.distractorColor = HUEDISTRACTOR;
    }  
    if(theFea === Features[3]){
        Feature.tdLengthRatio = 0.4;
    } 
    if(theFea === Features[4]){
        Feature.targetAngle = 45;
    }
    Factor.elementNumber = SetSize;
    generateStimulus(Feature,Factor); 
}