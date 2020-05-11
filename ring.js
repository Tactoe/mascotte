
function displayBird (bird)
{

  var TAU;
  var animate, beak, comb, combAnchor, eyeLeft, eyeRight, head, illo, iris, isDrag, legLeft, legRight, n, pkm, sclera, shadow, tailAnchor, tailLeft, tailMid, tailRight, wingAnchorLeft, wingAnchorRight, wingFeather, wingGroup, wingLower, wingMid, wingUpper;
  let headColor = "#61BEE0";
  let beakColor = "#FFBB01";

  TAU = Zdog.TAU;

  isDrag = false;

  illo = null;
  illo = new Zdog.Illustration({
    element: "#zdog-canvas",
    dragRotate: true,
    // rotate: {
    //   y: TAU / 16,
    //   x: -TAU / 16 },

    resize: true,
    zoom: 10,
    onDragStart: function () {
      isDrag = true;
    },
    onResize: function () {
      var zoom;
      this.zoom = Math.min(innerWidth, innerHeight) / 150;
      // this.zoom = zoom < 10 && 10 || zoom;
    } });


  pkm = new Zdog.Anchor({
    addTo: illo });


  head = new Zdog.Shape({
    addTo: pkm,
    stroke: 16,
    color: headColor });


  beak = new Zdog.Cone({
    addTo: head,
    diameter: 4,
    length: 4,
    translate: {
      z: 8 },

    color: beakColor });


  eyeLeft = new Zdog.Group({
    addTo: head,
    translate: new Zdog.Vector({
      x: -1,
      y: -2,
      z: 7.5 }).
    rotate({
      y: -TAU / 8 }),

    rotate: {
      y: -TAU / 8 } });


if (bird.mood === 'happy')
{
  iris = new Zdog.Ellipse({
    addTo: eyeLeft,
    diameter: 3,
    quarters: 2,
    rotate: {z: -TAU / 4},
    // stroke: false,
    // fill: true,
    backface: false });
}
else {
  sclera = new Zdog.Ellipse({
  addTo: eyeLeft,
  width: 6,
  height: 3,
  stroke: false,
  fill: true,
  backface: false,
  color: "#fee" });
  iris = new Zdog.Ellipse({
    addTo: sclera,
    diameter: 3,
    stroke: false,
    fill: true,
    backface: false });
}




  eyeRight = eyeLeft.copyGraph({
    rotate: {
      y: TAU / 8 } });



  eyeRight.translate.x = -eyeLeft.translate.x;

  combAnchor = new Zdog.Anchor({
    addTo: head,
    translate: {
      y: -8,
      z: 2 } });



  comb = new Zdog.Shape({
    addTo: combAnchor,
    path: [
    {
      y: 0 },

    {
      x: 1,
      y: -6 },

    {
      arc: [
      {
        y: -12 },

      {
        x: -1,
        y: -6 }] }],




    rotate: {
      x: TAU / 8 },

    fill: true,
    color: "#6F239D" });


  wingAnchorLeft = new Zdog.Anchor({
    addTo: pkm,
    translate: {
      x: 8 } });



  wingGroup = new Zdog.Group({
    addTo: wingAnchorLeft });


  wingLower = new Zdog.Ellipse({
    addTo: wingGroup,
    width: 10,
    height: 8,
    quarters: 2,
    translate: {
      x: 5 },

    rotate: {
      x: TAU / 4,
      z: TAU / 2 },

    fill: true,
    color: "#FFBB01",
    backface: "#6F239D" });


  wingUpper = new Zdog.Ellipse({
    addTo: wingLower,
    width: 10,
    height: 8,
    quarters: 2,
    rotate: {
      z: TAU / 2 },

    fill: true,
    color: "#6F239D" });


  wingMid = new Zdog.Rect({
    addTo: wingLower,
    height: 8,
    backface: "#6F239D" });


  wingFeather = new Zdog.RoundedRect({
    addTo: wingUpper,
    width: 4,
    translate: {
      x: 2.5,
      y: 2 } });



  wingFeather.copy().translate.y = -2;

  wingAnchorRight = wingAnchorLeft.copyGraph({
    translate: {
      x: -8 },

    rotate: {
      x: TAU / 2 } });



  legLeft = new Zdog.Shape({
    addTo: pkm,
    path: [
    {
      y: 0 },

    {
      y: 2 },

    {
      x: -1,
      y: 3,
      z: 3 },

    {
      move: {
        y: 2 } },


    {
      x: 1,
      y: 3,
      z: 3 },

    {
      move: {
        y: 2 } },


    {
      y: 2.5,
      z: -2 }],


    closed: false,
    translate: {
      x: 2.5,
      y: 7.5,
      z: -2 },

    rotate: {
      x: -TAU / 16,
      z: -TAU / 64 },

    color: "#6F239D" });


  legRight = legLeft.copyGraph({
    translate: {
      x: -2.5,
      y: 7.5,
      z: -2 },

    rotate: {
      x: -TAU / 16,
      z: TAU / 64 } });



  tailAnchor = new Zdog.Anchor({
    addTo: head,
    translate: new Zdog.Vector({
      z: -11 }).
    rotate({
      x: TAU / 16 }),

    rotate: {
      x: TAU / 16 } });



  tailMid = new Zdog.RoundedRect({
    addTo: tailAnchor,
    width: 6,
    height: 2,
    translate: {
      y: -.75 },

    rotate: {
      x: -TAU / 4,
      z: TAU / 4 },

    fill: true,
    color: "#6F239D" });


  tailLeft = tailMid.copy({
    translate: {
      x: 2.5,
      z: .1 },

    rotate: {
      x: -TAU / 4,
      y: TAU / 16,
      z: TAU / 5 } });



  tailRight = tailMid.copy({
    translate: {
      x: -2.5,
      z: .1 },

    rotate: {
      x: -TAU / 4,
      y: -TAU / 16,
      z: -TAU / 5 } });



  // shadow = new Zdog.Ellipse({
  //   addTo: illo,
  //   diameter: 16,
  //   translate: {
  //     y: 16 },
  //
  //   rotate: {
  //     x: TAU / 4 },
  //
  //   stroke: false,
  //   fill: true,
  //   backface: false,
  //   color: "#3332" });


  n = 0;
  let currentAnimation = function () {
      wingAnchorRight.translate.z = 4;
      wingAnchorRight.rotate.x = TAU / 4 + TAU / 80 * -Math.sin(n / 12);
      wingAnchorRight.rotate.z = -TAU / 4;
      wingAnchorLeft.translate.z = 4;
      wingAnchorLeft.rotate.y = TAU / 2;
      wingAnchorLeft.rotate.z = -TAU / 4;
      wingAnchorLeft.rotate.x = TAU / 4 + TAU / 80 * -Math.sin(n / 12);
      combAnchor.rotate.x = TAU / 32 * Math.sin(n / 12);
      head.rotate.x = TAU / 80 * -Math.sin(n / 12);
  }

  if (bird.animation == "fly")
  {
    currentAnimation = function () {
      wingAnchorLeft.rotate.z = TAU / 8 * Math.sin(n / 4);
      wingAnchorRight.rotate.z = TAU / 2+ TAU / 8 * Math.sin(n / 4);
      combAnchor.rotate.x = TAU / 32 * Math.sin(n / 12);
      head.rotate.x = TAU / 80 * -Math.sin(n / 12);
      pkm.translate.y = -2 + -2 * Math.sin(n / 12);
    }
  }

  function animate () {
    currentAnimation();
    // if (!isDrag) {
    //   illo.rotate.y += TAU / 1024;
    // }
    illo.updateRenderGraph();
    n++;
    requestAnimationFrame(animate);
  };

  animate();
}

//# sourceURL=coffeescript
