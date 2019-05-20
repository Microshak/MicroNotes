var w = 500;
var h = 500;
var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .append("g")
            .attr("transform", "translate(" + 0 + "," + 0 + ")")
            .attr("stroke","black")
            .attr("stroke-width",0);

// box around edge of svg
axes = svg.append("rect")
        .attr("x",0)
        .attr("y",0)
        .attr("width",w)
        .attr("height",h)
        .attr("stroke","black")
        .attr("stroke-width",2)
        .attr("fill","none");

var sigma = 4;
var mu = 0;
var N = 10;
var step = 0.1;

var dataset = [];
var x;
var C = 1/(sigma*Math.sqrt(2*Math.PI));
for (x=-N; x < N; x += step) {
    var E = (x-mu)/sigma;
    E = -(E*E)/2;
    var d = C*Math.exp(E);
    dataset.push(d);
}

var overlap = w*0.1;
var xscale1 = d3.scale.linear().range([0, w/2+overlap]).domain([0, dataset.length-1]).clamp(true);
var xscale2 = d3.scale.linear().range([w/2-overlap, w]).domain([0, dataset.length-1]).clamp(true);

var yscale = d3.scale.linear().domain([0, d3.max(dataset)]).range([h,h/2]);
var area1 = d3.svg.area()
    .x(function(d,i) { return xscale1(i); })
    .y0(h)
    .y1(function(d,i) { return yscale(d); });
g1 = svg.append("path")
      .datum(dataset)
      .attr("class", "area1")
      .attr("d", area1)
      .attr("opacity",0.75);
var area1XLocation = (w/2+overlap)/2;
var area1Offset = 0;

var area2 = d3.svg.area()
    .x(function(d,i) { return xscale2(i); })
    .y0(h)
    .y1(function(d,i) { return yscale(d); });
g2 = svg.append("path")
      .datum(dataset)
      .attr("class", "area2")
      .attr("d", area2)
      .attr("opacity",0.75);
var area2XLocation = (w-(w/2-overlap))/2;

//slider event
var area1Offset = 0;
d3.select("input[type=range]").on("change", function() {
    area1Offset = this.value;
    g1.attr("transform", "translate("+area1Offset+",0)");
    calcRocCurve(area1Offset);
    svg_roccurve.datum(roccurve).attr("class","line").attr("d", roc);
    setRocCircleLocation();
});

// roc
bw = dataset.length;
bh = bw;
axes = svg.append("rect")
        .attr("x",0)
        .attr("y",0)
        .attr("width",bw)
        .attr("height",bh)
        .attr("stroke","black")
        .attr("stroke-width",2)
        .attr("fill","none");
// diagonal
svg.append("line")
           .attr("x1",0)
           .attr("y1",bh)
           .attr("x2",bw)
           .attr("y2",0)
           .attr("stroke-width",1);

// threshold line
var drag = d3.behavior.drag()
.origin(function(d) { return d; })
    .on("drag", dragmove);

var linewidth = 8;
var thresholdLine = svg.append("line")
                .attr("x1",w/2)
                .attr("y1",h)
                .attr("x2",w/2)
                .attr("y2",h/2)
                .attr("stroke-width",linewidth)
                .datum({x:w/2,y:w/2})
                .call(drag);
var thresholdLoc = w/2;
var thresholdText = svg.append("text")
    .attr("transform","rotate(-90)")
    .attr("y", thresholdLoc-10)
    .attr("x", -400)
    .text("Threshold (drag left or right)");

function dragmove(d) {
  thresholdLoc = Math.min(w-linewidth/2,Math.max(linewidth/2,d3.event.x));
  d3.select(this)
      .attr("x1", d.x = thresholdLoc)
      .attr("x2", d.y = thresholdLoc);
  setRocCircleLocation();
  thresholdText.attr("y",thresholdLoc-10);
}

// calculate roc curve
var cumulativearea = [];
var cumsum = 0;

var offset = Math.floor(dataset.length/2);
for (var ii = 0; ii < dataset.length/2; ii++) {
    cumsum += dataset[ii];
    cumulativearea.push(cumsum);
}

var findRate = function(idx) {
    var rate = 0;
    if (idx < cumulativearea.length) {
        rate = cumsum*2 - cumulativearea[idx];
    } else {
        rate = cumulativearea[dataset.length-idx];
    }
    return rate;
};

//calculate roc curve values from cumsum values
var roccurve = [];
var calcRocCurve = function(area1Offset) {
    roccurve = [];
    for (var ii=0; ii < w; ii++) {
        var idx = Math.round(xscale2.invert(ii));
        var tpr = findRate(idx); // true positive rate
       
        idx = Math.round(xscale1.invert(ii-area1Offset));
        var fpr = findRate(idx); // false positive rate

        roccurve.push([fpr, tpr]);
    }
};
calcRocCurve(area1Offset);

var rocScale = d3.scale.linear().range([0, bw]).domain([0, cumsum*2]);
var roc = d3.svg.line()
    .x(function(d) { return rocScale(d[0]); })
    .y(function(d) { return bh-rocScale(d[1]); });

var svg_roccurve = svg.append("path").datum(roccurve).attr("class","line").attr("d", roc);
var rocCircle = svg.append("circle")
                    .attr("r",5)
                    .attr("cx",0)
                    .attr("cy",0)
                    .attr("fill","red")
                    .attr("stroke-width",1);

var setRocCircleLocation = function() {
    var idx_x = Math.round(xscale2.invert(thresholdLoc));
    var idx_y = Math.round(xscale1.invert(thresholdLoc-area1Offset));
    var tpr = findRate(idx_x); // true positive rate
    var fpr = findRate(idx_y); // false positive rate
    var x = rocScale(fpr);
    var y = bh-rocScale(tpr);
    rocCircle.attr("cx",x).attr("cy",y);
};

setRocCircleLocation();

// Texts and titles
svg.append("text")
    .attr("y", bh-50)
    .attr("x", bw-100)
    .attr("font-size", 20)
    .text("ROC Curve");

svg.append("text")
    .attr("y", bh+35)
    .attr("x", 50)
    .text("Negatives");

svg.append("text")
    .attr("y", bh+35)
    .attr("x", w-100)
    .text("Positives");

svg.append("text")
    .attr("y", bh+15)
    .attr("x", 160)
    .text("FPR");

svg.append("text")
    .attr("transform","rotate(-90)")
    .attr("y", bw+15)
    .attr("x", -bh+10)
    .text("TPR");
