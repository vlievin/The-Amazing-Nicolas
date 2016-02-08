var width = Math.max(960, innerWidth),
    height = Math.max(500, innerHeight);

var i = 0;

console.log("particules script")
LINK = "http://40.media.tumblr.com/867a4fd4c6e1080c9a8524aef396e2fe/tumblr_nn2uxyfz6D1utp969o1_400.png"

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

svg.append("rect")
    .attr("width", width)
    .attr("height", height)
    //.on("mousemove", particle)
    .on("ontouchstart" in document ? "touchmove" : "mousemove", particle);

function particle() {
  var m = d3.mouse(this);

  document.body.style.background = getRandomColor();

  svg.append("image")
     // .attr("xlink:href",  "http://memesvault.com/wp-content/uploads/Funny-Meme-Faces-For-Facebook-1.png" )
      .attr("xlink:href", LINK)
      .attr("x", m[0])
      .attr("y", m[1])
      .attr("width", 15)
      .attr("height", 15)
      // .attr("r", 1e-6)
      // .style("stroke", d3.hsl((i = (i + 1) % 360), 1, .5))
      .style("opacity", 1)
      .on("mouseover", particle )

    .transition()
      .duration(2000)
      .ease(Math.sqrt)
      .attr("width", 450)
      .attr("height", 450)
      // .attr("r", 100)
      .style("opacity", 1e-3)
      .remove();

  d3.event.preventDefault();
}

// $(document).click(function(e) {
//    console.log("clic")
//    svg.selectAll("image")
//    .transition()
//    .duration(3000)
//    .ease(Math.sqrt)
//       .attrTween("transform", tween)
//       .style("opacity", 1e-3)
//       .remove();
// });

// var tween = function (d, i, a) {

//     console.log( this.attr("transform"));
//     return d3.interpolateString("rotate(0, 900, 200)", "rotate(45, 900, 200)");
// }
