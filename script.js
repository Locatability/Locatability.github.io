
/* ============================================================
   MODELS
   ============================================================ */

const models = {
Center:{
  Luminance: {
    yMin: 0,
    yMax: 0.5,

    P1: { x: 0.016, y: 0.5 },       // (JLT, MLD)
    A1: { x: 0.016, y: 0.478 },     // (JLT, )
    A2: { x: 1.838, y: 0.212 },     // ( , JLD)
    P3: { x: 10, y: 0.212 },        // (MLT, JLD)

    get P2() {
      return {
        x: (this.A1.x + this.A2.x) / 2,
        y: (this.A1.y + this.A2.y) / 2
      };
    }
  },

  "Single-hue": {
    yMin: 0,
    yMax: 0.5,

    P1: { x: 0.022, y: 0.5 },       // (JLT, MLD)
    A1: { x: 0.022, y: 0.232 },     // (JLT, )
    A2: { x: 0.027, y: 0.085 },     // ( , JLD)
    P3: { x: 10, y: 0.085 },        // (MLT, JLD)

    get P2() {
      return {
        x: (this.A1.x + this.A2.x) / 2,
        y: (this.A1.y + this.A2.y) / 2
      };
    }
  },

  Hue: {
    yMin: 0,
    yMax: 0.5,

    P1: { x: 0.016, y: 0.5 },       // (JLT, MLD)
    A1: { x: 0.016, y: 0.356 },     // (JLT, )
    A2: { x: 0.018, y: 0.125 },     // ( , JLD)
    P3: { x: 10, y: 0.125 },        // (MLT, JLD)

    get P2() {
      return {
        x: (this.A1.x + this.A2.x) / 2,
        y: (this.A1.y + this.A2.y) / 2
      };
    }
  },
  Orientation: {
    yMin: 0,
    yMax: 0.5,

    P1: { x: 0.016, y: 0.5 },       // (JLT, MLD)
    A1: { x: 0.016, y: 0.264 },     // (JLT, )
    A2: { x: 0.558, y: 0.078 },     // ( , JLD)
    P3: { x: 10, y: 0.078 },        // (MLT, JLD)

    get P2() {
      return {
        x: (this.A1.x + this.A2.x) / 2,
        y: (this.A1.y + this.A2.y) / 2
      };
    }
  },

  Length: {
    yMin: 1,
    yMax: 2.5,

    P1: { x: 0.016, y: 2.5 },       // (JLT, MLD)
    A1: { x: 0.016, y: 2.087 },     // (JLT, )
    A2: { x: 0.019, y: 1.519 },     // ( , JLD)
    P3: { x: 10, y: 1.519 },        // (MLT, JLD)

    get P2() {
      return {
        x: (this.A1.x + this.A2.x) / 2,
        y: (this.A1.y + this.A2.y) / 2
      };
    }
  },

  Size: {
    yMin: 1,
    yMax: 5,

    P1: { x: 0.016, y: 5 },         // (JLT, MLD)
    A1: { x: 0.016, y: 2.630 },     // (JLT, )
    A2: { x: 0.017, y: 1.646 },     // ( , JLD)
    P3: { x: 10, y: 1.646 },        // (MLT, JLD)

    get P2() {
      return {
        x: (this.A1.x + this.A2.x) / 2,
        y: (this.A1.y + this.A2.y) / 2
      };
    }
  }
},
Periphery:
{
  Luminance: {
    yMin: 0,
    yMax: 0.5,

    P1: { x: 1.212, y: 0.5 },       // (JLT, MLD)
    A1: { x: 1.212, y: 0.368 },     // (JLT, )
    A2: { x: 3.242, y: 0.333 },     // ( , JLD)
    P3: { x: 10, y: 0.333 },        // (MLT, JLD)

    get P2() {
      return {
        x: (this.A1.x + this.A2.x) / 2,
        y: (this.A1.y + this.A2.y) / 2
      };
    }
  },

  "Single-hue": {
    yMin: 0,
    yMax: 0.5,
    P1: { x: 0.521, y: 0.5 },       // (JLT, MLD)
    A1: { x: 0.521, y: 0.196 },     // (JLT, )
    A2: { x: 2.236, y: 0.108 },     // ( , JLD)
    P3: { x: 10, y: 0.108 },        // (MLT, JLD)

    get P2() {
      return {
        x: (this.A1.x + this.A2.x) / 2,
        y: (this.A1.y + this.A2.y) / 2
      };
    }
  },

  Hue: {
    yMin: 0,
    yMax: 0.5,

    P1: { x: 0.19, y: 0.5 },       // (JLT, MLD)
    A1: { x: 0.19, y: 0.359 },     // (JLT, )
    A2: { x: 2.189, y: 0.144 },     // ( , JLD)
    P3: { x: 10, y: 0.144 },        // (MLT, JLD)

    get P2() {
      return {
        x: (this.A1.x + this.A2.x) / 2,
        y: (this.A1.y + this.A2.y) / 2
      };
    }
  },
  Orientation: {
    yMin: 0,
    yMax: 0.5,

    P1: { x: 0.016, y: 0.5 },       // (JLT, MLD)
    A1: { x: 0.016, y: 0.348 },     // (JLT, )
    A2: { x: 2.833, y: 0.079 },     // ( , JLD)
    P3: { x: 10, y: 0.079 },        // (MLT, JLD)

    get P2() {
      return {
        x: (this.A1.x + this.A2.x) / 2,
        y: (this.A1.y + this.A2.y) / 2
      };
    }
  },

  Length: {
    yMin: 1,
    yMax: 2.5,

    P1: { x: 0.017, y: 2.5 },       // (JLT, MLD)
    A1: { x: 0.017, y: 1.69 },     // (JLT, )
    A2: { x: 7.039, y: 1.654 },     // ( , JLD)
    P3: { x: 10, y: 1.654 },        // (MLT, JLD)

    get P2() {
      return {
        x: (this.A1.x + this.A2.x) / 2,
        y: (this.A1.y + this.A2.y) / 2
      };
    }
  },

  Size: {
    yMin: 1,
    yMax: 5,

    P1: { x: 0.016, y: 5 },         // (JLT, MLD)
    A1: { x: 0.016, y: 3.09 },     // (JLT, )
    A2: { x: 0.923, y: 1.794 },     // ( , JLD)
    P3: { x: 10, y: 1.794 },        // (MLT, JLD)

    get P2() {
      return {
        x: (this.A1.x + this.A2.x) / 2,
        y: (this.A1.y + this.A2.y) / 2
      };
    }
  }
}
};


/* ============================================================
   CANVAS / UI ELEMENTS
   ============================================================ */

const canvas = document.getElementById("chart");
const ctx = canvas.getContext("2d");

const variableButtons =
  document.getElementById("variableButtons");

const targetLocationButtons =
  document.getElementById("targetLocationButtons");

const variableName =
  document.getElementById("variableName");

const selectedTime =
  document.getElementById("selectedTime");

const selectedTDD =
  document.getElementById("selectedTDD");

const jldElement =
  document.getElementById("jld");

const jltElement =
  document.getElementById("jlt");

const aboveJld =
  document.getElementById("aboveJld");

const pld10Element =
  document.getElementById("pld10");

const plt10Element =
  document.getElementById("plt10");

// const tValue =
//   document.getElementById("tValue");

const interpretation =
  document.getElementById("interpretation");


let currentModels = "Center"
let currentModel = "Hue";
let selectedT = 0.5;
let dragging = false;


/* ============================================================
   BEZIER
   ============================================================ */

function quadraticBezier(t, P0, A, P2) {

  const u = 1 - t;

  return {
    x:
      u * u * P0.x +
      2 * u * t * A.x +
      t * t * P2.x,

    y:
      u * u * P0.y +
      2 * u * t * A.y +
      t * t * P2.y
  };
}


/*
   Two connected quadratic Bézier curves:

   P1 ---- A1 ---- P2 ---- A2 ---- P3

   Global t:

   0                 0.5                 1
   |------------------|------------------|
   P1                 P2                 P3
*/

function bezier(t, model) {

  t = Math.max(0, Math.min(1, t));

  if (t <= 0.5) {

    const localT = t * 2;

    return quadraticBezier(
      localT,
      model.P1,
      model.A1,
      model.P2
    );

  } else {

    const localT = (t - 0.5) * 2;

    return quadraticBezier(
      localT,
      model.P2,
      model.A2,
      model.P3
    );
  }
}


/* ============================================================
   JLD / JLT
   ============================================================ */

function getJLD(model) {
  return model.P3.y;
}

function getJLT(model) {
  return model.P1.x;
}

function getMLT(model) {
  return model.P3.x;
}


/* ============================================================
   POINT AT Y
   ============================================================ */

function pointAtY(targetY, model) {

  let bestT = 0;
  let bestDiff = Infinity;

  const steps = 2000;

  for (let i = 0; i <= steps; i++) {

    const t = i / steps;
    const p = bezier(t, model);

    const diff = Math.abs(p.y - targetY);

    if (diff < bestDiff) {
      bestDiff = diff;
      bestT = t;
    }
  }

  return {
    t: bestT,
    point: bezier(bestT, model)
  };
}


/* ============================================================
   CANVAS RESIZE
   ============================================================ */

function resizeCanvas() {

  const rect =
    canvas.getBoundingClientRect();

  const dpr =
    window.devicePixelRatio || 1;

  canvas.width =
    rect.width * dpr;

  canvas.height =
    rect.height * dpr;

  ctx.setTransform(
    dpr,
    0,
    0,
    dpr,
    0,
    0
  );

  draw();
}


/* ============================================================
   DRAW
   ============================================================ */

function draw() {

  const model =
    models[currentModels][currentModel];

  const rect =
    canvas.getBoundingClientRect();

  const width =
    rect.width;

  const height =
    rect.height;

  ctx.clearRect(
    0,
    0,
    width,
    height
  );


  /* ----------------------------------------------------------
     PLOT RANGE
     ---------------------------------------------------------- */
  const pad = { left: 68, right: 30, top: 28, bottom: 58 };
  const xMin = 0;
  const xMax = model.P3.x;

  const yMin = model.yMin;
  const yMax = model.yMax;


  /* ----------------------------------------------------------
     MARGINS
     ---------------------------------------------------------- */

  const marginLeft = 65;
  const marginRight = 30;
  const marginTop = 30;
  const marginBottom = 55;

  const plotLeft = marginLeft;
  const plotRight = width - marginRight;
  const plotTop = marginTop;
  const plotBottom = height - marginBottom;

  const plotWidth =
    plotRight - plotLeft;

  const plotHeight =
    plotBottom - plotTop;


  /* ----------------------------------------------------------
     SCALE
     ---------------------------------------------------------- */

  function sx(x) {

    return plotLeft +
      (x - xMin) /
      (xMax - xMin) *
      plotWidth;
  }

  function sy(y) {

    return plotBottom -
      (y - yMin) /
      (yMax - yMin) *
      plotHeight;
  }


  /* ----------------------------------------------------------
     GRID
     ---------------------------------------------------------- */

  ctx.save();

  ctx.strokeStyle = "#e5e7eb";
  ctx.lineWidth = 1;

  const xSteps = 5;
  const ySteps = 5;

  for (let i = 0; i <= xSteps; i++) {

    const x =
      xMin +
      (xMax - xMin) * i / xSteps;

    const px = sx(x);

    ctx.beginPath();
    ctx.moveTo(px, plotTop);
    ctx.lineTo(px, plotBottom);
    ctx.stroke();
  }

  for (let i = 0; i <= ySteps; i++) {

    const y =
      yMin +
      (yMax - yMin) * i / ySteps;

    const py = sy(y);

    ctx.beginPath();
    ctx.moveTo(plotLeft, py);
    ctx.lineTo(plotRight, py);
    ctx.stroke();
  }

  ctx.restore();


  /* ----------------------------------------------------------
     AXES
     ---------------------------------------------------------- */

  ctx.save();

  ctx.strokeStyle = "#374151";
  ctx.lineWidth = 1.2;

  ctx.beginPath();
  ctx.moveTo(plotLeft, plotBottom);
  ctx.lineTo(plotRight, plotBottom);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(plotLeft, plotTop);
  ctx.lineTo(plotLeft, plotBottom);
  ctx.stroke();

  ctx.restore();


  /* ----------------------------------------------------------
     AXIS TICK LABELS
     ---------------------------------------------------------- */

  ctx.save();

  ctx.fillStyle = "#6b7280";
  ctx.font = "11px Arial";

  ctx.textAlign = "center";
  ctx.textBaseline = "top";

  for (let i = 0; i <= xSteps; i++) {

    const x =
      xMin +
      (xMax - xMin) * i / xSteps;

    ctx.fillText(
      x.toFixed(1),
      sx(x),
      plotBottom + 8
    );
  }

  ctx.textAlign = "right";
  ctx.textBaseline = "middle";

  for (let i = 0; i <= ySteps; i++) {

    const y =
      yMin +
      (yMax - yMin) * i / ySteps;

    ctx.fillText(
      y.toFixed(1),
      plotLeft - 8,
      sy(y)
    );
  }

   // Axis labels
  ctx.fillStyle = "#4f5b66";
  ctx.font = "12px Inter, system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("Localization time (s)", (pad.left + width - pad.right) / 2, height - 13);

  ctx.save();
  ctx.translate(17, (pad.top + height - pad.bottom) / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText("Target–distractor difference (TDD)", 0, 0);
  ctx.restore();

  ctx.restore();


  /* ----------------------------------------------------------
     JLD LINE
     ---------------------------------------------------------- */

  const jld =
    getJLD(model);

  if (
    jld >= yMin &&
    jld <= yMax
  ) {

    const py =
      sy(jld);

    ctx.save();

    ctx.strokeStyle = "#d94c4c";
    ctx.lineWidth = 1;
    ctx.setLineDash([6, 5]);

    ctx.beginPath();
    ctx.moveTo(plotLeft, py);
    ctx.lineTo(plotRight, py);
    ctx.stroke();

    ctx.setLineDash([]);

    ctx.fillStyle = "#d94c4c";
    ctx.font = "11px Arial";
    ctx.textAlign = "left";
    ctx.textBaseline = "bottom";

    ctx.fillText(
      `JLD = ${jld.toFixed(3)}`,
      plotLeft + 6,
      py - 5
    );

    ctx.restore();
  }

  /* ----------------------------------------------------------
     JLT LINE
     ---------------------------------------------------------- */

  const jlt =
    getJLT(model);

  

    const px =
      sx(jlt);

    ctx.save();

    ctx.strokeStyle = "#d94c4c";
    ctx.lineWidth = 1;
    ctx.setLineDash([6, 5]);

    ctx.beginPath();
    ctx.moveTo(px, plotTop);
    ctx.lineTo(px, plotBottom);
    ctx.stroke();

    ctx.setLineDash([]);

    ctx.fillStyle = "#d94c4c";
    ctx.font = "11px Arial";
    ctx.textAlign = "left";
    ctx.textBaseline = "bottom";

    ctx.fillText(
      `JLT = ${jlt.toFixed(3)} s`,
      px+6,
      plotBottom - 5 
    );

    ctx.restore();


  /* ----------------------------------------------------------
     PLD10 / PLT10
     ---------------------------------------------------------- */

  /*
     PLD10 = 10% above JLD.
  */

  // const pld10 =
  //   jld * 1.10;

  // if (
  //   pld10 >= yMin &&
  //   pld10 <= yMax
  // ) {

  //   const result =
  //     pointAtY(
  //       pld10,
  //       model
  //     );

  //   const p =
  //     result.point;

  //   const px =
  //     sx(p.x);

  //   const py =
  //     sy(p.y);

  //   ctx.save();

  //   ctx.strokeStyle = "#b0b5bd";
  //   ctx.lineWidth = 1;
  //   ctx.setLineDash([4, 4]);

  //   /*
  //      Horizontal PLD10 line
  //   */

  //   ctx.beginPath();
  //   ctx.moveTo(plotLeft, py);
  //   ctx.lineTo(px, py);
  //   ctx.stroke();

  //   /*
  //      Vertical PLT10 line
  //   */

  //   ctx.beginPath();
  //   ctx.moveTo(px, py);
  //   ctx.lineTo(px, plotBottom);
  //   ctx.stroke();

  //   ctx.setLineDash([]);

  //   /*
  //      PLD10 point
  //   */

  //   ctx.beginPath();

  //   ctx.arc(
  //     px,
  //     py,
  //     5,
  //     0,
  //     Math.PI * 2
  //   );

  //   ctx.fillStyle = "#9ca3af";
  //   ctx.fill();

  //   ctx.restore();
  // }


  /* ----------------------------------------------------------
     CONTROL LINES
     ---------------------------------------------------------- */

  // ctx.save();

  // ctx.strokeStyle = "#c4c7cc";
  // ctx.lineWidth = 1;
  // ctx.setLineDash([4, 4]);

  // ctx.beginPath();

  // ctx.moveTo(
  //   sx(model.P1.x),
  //   sy(model.P1.y)
  // );

  // ctx.lineTo(
  //   sx(model.A1.x),
  //   sy(model.A1.y)
  // );

  // ctx.lineTo(
  //   sx(model.P2.x),
  //   sy(model.P2.y)
  // );

  // ctx.moveTo(
  //   sx(model.P2.x),
  //   sy(model.P2.y)
  // );

  // ctx.lineTo(
  //   sx(model.A2.x),
  //   sy(model.A2.y)
  // );

  // ctx.lineTo(
  //   sx(model.P3.x),
  //   sy(model.P3.y)
  // );

  // ctx.stroke();

  // ctx.setLineDash([]);

  // ctx.restore();


  /* ----------------------------------------------------------
     MAIN BEZIER CURVE
     ---------------------------------------------------------- */

  ctx.save();

  ctx.strokeStyle = "#315efb";
  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  ctx.beginPath();

  const curveSteps = 500;

  for (
    let i = 0;
    i <= curveSteps;
    i++
  ) {

    const t =
      i / curveSteps;

    const p =
      bezier(t, model);

    const px =
      sx(p.x);

    const py =
      sy(p.y);

    if (i === 0) {
      ctx.moveTo(px, py);
    } else {
      ctx.lineTo(px, py);
    }
  }

  ctx.stroke();

  ctx.restore();


  /* ----------------------------------------------------------
     CONTROL POINTS
     ---------------------------------------------------------- */

  // function drawControlPoint(point, radius) {

  //   ctx.beginPath();

  //   ctx.arc(
  //     sx(point.x),
  //     sy(point.y),
  //     radius,
  //     0,
  //     Math.PI * 2
  //   );

  //   ctx.fillStyle = "#9ca3af";
  //   ctx.fill();
  // }

  // drawControlPoint(model.P1, 3);
  // drawControlPoint(model.A1, 4);
  // drawControlPoint(model.P2, 5);
  // drawControlPoint(model.A2, 4);
  // drawControlPoint(model.P3, 3);


  /* ----------------------------------------------------------
     SELECTED POINT
     ---------------------------------------------------------- */

  const selected =
    bezier(
      selectedT,
      model
    );

  const selectedX =
    sx(selected.x);

  const selectedY =
    sy(selected.y);


  /*
     Horizontal selected-point guide
  */

  ctx.save();

  ctx.strokeStyle = "#17202a";
  ctx.lineWidth = 1;
  ctx.setLineDash([5, 5]);

  ctx.beginPath();
  ctx.moveTo(
    plotLeft,
    selectedY
  );

  ctx.lineTo(
    selectedX,
    selectedY
  );

  ctx.stroke();


  /*
     Vertical selected-point guide
  */

  ctx.beginPath();

  ctx.moveTo(
    selectedX,
    selectedY
  );

  ctx.lineTo(
    selectedX,
    plotBottom
  );

  ctx.stroke();

  ctx.setLineDash([]);

  ctx.restore();


  /*
     Selected point
  */

  ctx.save();

  
  ctx.strokeStyle = "#17202a";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(
    selectedX,
    selectedY,
    8,
    0,
    Math.PI * 2
  );
  ctx.stroke();

  ctx.beginPath();

  ctx.arc(
    selectedX,
    selectedY,
    5,
    0,
    Math.PI * 2
  );

  ctx.fillStyle = "#315efb";
  ctx.fill();

  ctx.restore();


  /* ----------------------------------------------------------
     UPDATE UI
     ---------------------------------------------------------- */

  updateInfo();
}


/* ============================================================
   NEAREST T FROM POINTER
   ============================================================ */

function nearestTFromPointer(event) {

  const rect =
    canvas.getBoundingClientRect();

  const mouseX =
    event.clientX - rect.left;

  const mouseY =
    event.clientY - rect.top;

  const model =
    models[currentModels][currentModel];


  const xMin = 0;
  const xMax = model.P3.x;

  const yMin = model.yMin;
  const yMax = model.yMax;


  const marginLeft = 65;
  const marginRight = 30;
  const marginTop = 30;
  const marginBottom = 55;

  const plotLeft = marginLeft;
  const plotRight =
    rect.width - marginRight;

  const plotTop = marginTop;
  const plotBottom =
    rect.height - marginBottom;

  const plotWidth =
    plotRight - plotLeft;

  const plotHeight =
    plotBottom - plotTop;


  function sx(x) {

    return plotLeft +
      (x - xMin) /
      (xMax - xMin) *
      plotWidth;
  }

  function sy(y) {

    return plotBottom -
      (y - yMin) /
      (yMax - yMin) *
      plotHeight;
  }


  let bestT = 0;
  let bestDistance = Infinity;

  const steps = 2000;

  for (let i = 0; i <= steps; i++) {

    const t =
      i / steps;

    const p =
      bezier(t, model);

    const px =
      sx(p.x);

    const py =
      sy(p.y);

    const dx =
      px - mouseX;

    const dy =
      py - mouseY;

    const distance =
      dx * dx + dy * dy;

    if (distance < bestDistance) {

      bestDistance = distance;
      bestT = t;
    }
  }

  return bestT;
}


/* ============================================================
   BUTTONS
   ============================================================ */

function buildButtons() {
  targetLocationButtons.innerHTML = "";

  Object.keys(models).forEach(name => {

    const button =
      document.createElement("button");

    button.textContent =
      name;

    button.addEventListener(
      "click",
      () => {
        currentModels = name;
        /*
           Start at the midpoint of the
           complete two-segment curve.
        */

        selectedT = 0.5;
        buildButtons();
        draw();
      }
    );

    if (name === currentModels) {
      button.classList.add("active");
    }

    targetLocationButtons.appendChild(
      button
    );
  });

  variableButtons.innerHTML = "";

  Object.keys(models["Center"]).forEach(name => {

    const button =
      document.createElement("button");

    button.textContent =
      name;

    button.addEventListener(
      "click",
      () => {
        currentModel = name;
        /*
           Start at the midpoint of the
           complete two-segment curve.
        */

        selectedT = 0.5;
        buildButtons();
        draw();
      }
    );

    if (name === currentModel) {
      button.classList.add("active");
    }

    variableButtons.appendChild(
      button
    );
  });

  
}


/* ============================================================
   UPDATE INFORMATION
   ============================================================ */

function updateInfo() {

  const model =
    models[currentModels][currentModel];

  const point =
    bezier(
      selectedT,
      model
    );


  const jld =
    getJLD(model);

  const jlt =
    getJLT(model);

  const tdd =
    point.y;


  /*
     Difference above JLD.

     For y values below JLD this becomes
     negative.
  */

  const difference =
    point.y - jld;


  /*
     PLD10
  */

  const targetPLD10 =
    jld * 1.10;

  let pld10Text = "—";
  let plt10Text = "—";


  if (
    targetPLD10 >= model.yMin &&
    targetPLD10 <= model.yMax
  ) {

    const result =
      pointAtY(
        targetPLD10,
        model
      );

    pld10Text =
      targetPLD10.toFixed(3);

    plt10Text =
      `${result.point.x.toFixed(3)} s`;
  }


  /*
     UI
  */

  variableName.textContent =
    currentModel;

  selectedTime.textContent =
    `${point.x.toFixed(2)} s`;
  selectedTDD.textContent =
    `${point.y.toFixed(2)}`;

  jldElement.textContent =
    jld.toFixed(3);

  jltElement.textContent =
    `${jlt.toFixed(3)} s`;

  aboveJld.textContent =
    difference >= 0
      ? `+${difference.toFixed(3)}`
      : difference.toFixed(3);

  pld10Element.textContent =
    pld10Text;

  plt10Element.textContent =
    plt10Text;

  // tValue.textContent =
  //   selectedT.toFixed(3);


  /*
     Interpretation text
  */

  // if (Math.abs(selectedT - 0.5) < 0.005) {

  //   interpretation.textContent =
  //     "The selected point is at P2, where the two connected Bézier segments meet.";

  // } else if (point.y > jld) {

  //   interpretation.textContent =
  //     "The selected point is above JLD, representing a target–distractor difference greater than the just-locatable difference.";

  // } else {

  //   interpretation.textContent =
  //     "The selected point is below JLD, representing a target–distractor difference smaller than the just-locatable difference.";
  // }
}


/* ============================================================
   POINTER / DRAGGING
   ============================================================ */

canvas.addEventListener(
  "pointerdown",
  event => {

    dragging = true;

    canvas.setPointerCapture(
      event.pointerId
    );

    selectedT =
      nearestTFromPointer(event)

    draw();
  }
);


canvas.addEventListener(
  "pointermove",
  event => {

    if (!dragging) {
      return;
    }

    selectedT =
      nearestTFromPointer(event);
    draw();
  }
);


canvas.addEventListener(
  "pointerup",
  event => {

    dragging = false;

    if (
      canvas.hasPointerCapture(
        event.pointerId
      )
    ) {

      canvas.releasePointerCapture(
        event.pointerId
      );
    }
  }
);


canvas.addEventListener(
  "pointercancel",
  () => {

    dragging = false;
  }
);


/* ============================================================
   INITIALIZATION
   ============================================================ */

buildButtons();

resizeCanvas();

window.addEventListener(
  "resize",
  resizeCanvas
);
