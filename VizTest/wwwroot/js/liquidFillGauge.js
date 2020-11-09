/* CIRCLE GRAPH START */

/* SOCIAL: */
(function () { /* use these  closures when dealing with multiple graphs so code doesnt interfere with each other */
    var width2 = 200,  /* SVG width */
        height2 = 200, /* SVG height */
        twoPi = 2 * Math.PI, /* 3.1415962... x2 */
        progress = 0,
        allocated = 40, /*(Percentage data (%))*/
        total = 100, /* Total number that will be divided by 'allocated' value */
        formatPercent = d3.format(".0%");

    var arc = d3.svg.arc() /* this section represents the actual circle sizing */
        .startAngle(0)     /* Starting point of the circle */
        .innerRadius(58)   /* inner radius of circle */
        .outerRadius(66);  /* outer radius of circle */

    var svg = d3.select("#docsChart").append("svg")
        .attr("width", width2) /* width of svg is width2 = 200 */
        .attr("height", height2) /* height of svg is height2 = 200 */
        .append("g")
        .attr("transform", "translate(" + width2 / 2 + "," + height2 / 2 + ")");

    var meter = svg.append("g")
        .attr("class", "funds-allocated-meter"); /* css reference */

    meter.append("path")
        .attr("class", "background")
        .attr("d", arc.endAngle(twoPi));

    var foreground = meter.append("path")
        .attr("class", "foreground");

    var percentComplete = meter.append("text")
        .attr("text-anchor", "middle")
        .attr("class", "percent-complete")
        .attr("dy", "0em");

    var description = meter.append("text")
        .attr("text-anchor", "middle")
        .attr("class", "description")
        .attr("dy", "2.3em")
        .text("Social");


    var e = document.getElementById('docsChart');
    e.onmouseover = function () {
        document.getElementById('popup').style.display = 'block';
    }
    e.onmouseout = function () {
        document.getElementById('popup').style.display = 'none';
    }



    var transition = d3.transition('arc');

    var i = d3.interpolate(progress, allocated / total);

    transition.duration(1000).tween("progress", function () {  /*tween is the transition animation...and the duration is the rate of tween (higher value = slower tween)*/
        return function (t) {
            progress = i(t);
            foreground.attr("d", arc.endAngle(twoPi * progress));
            percentComplete.text(formatPercent(progress));
        };
    });

    //End of Social

    /* ECONOMICAL: */

    var progress = 0,
        allocated2 = 20,
        total = 100,
        formatPercent2 = d3.format(".0%");

    var arc2 = d3.svg.arc()
        .startAngle(0)
        .innerRadius(58)
        .outerRadius(66);

    var svg = d3.select("#docsChart").append("svg")
        .attr("width", width2)
        .attr("height", height2)
        .append("g")
        .attr("transform", "translate(" + width2 / 2 + "," + height2 / 2 + ")");

    var meter = svg.append("g")
        .attr("class", "funds-allocated2-meter");

    meter.append("path")
        .attr("class", "background")
        .attr("d", arc2.endAngle(twoPi));

    var foreground2 = meter.append("path")
        .attr("class", "foreground");

    var percentComplete2 = meter.append("text")
        .attr("text-anchor", "middle")
        .attr("class", "percent-complete")
        .attr("dy", "0em");

    var description = meter.append("text")
        .attr("text-anchor", "middle")
        .attr("class", "description")
        .attr("dy", "2.3em")
        .text("Economical");

    var transition2 = d3.transition('arc2');

    var i2 = d3.interpolate(progress, allocated2 / total);

    transition2.duration(1000).tween("progress", function () {
        return function (t) {
            progress = i2(t);
            foreground2.attr("d", arc2.endAngle(twoPi * progress));
            percentComplete2.text(formatPercent2(progress));
        };
    });

    //End of Economical

    /* ENVIRONMENTAL */

    var progress = 0,
        allocated3 = 23,
        total = 100,
        formatPercent3 = d3.format(".0%");

    var arc3 = d3.svg.arc()
        .startAngle(0)
        .innerRadius(58)
        .outerRadius(66);

    var svg = d3.select("#docsChart").append("svg")
        .attr("width", width2)
        .attr("height", height2)
        .append("g")
        .attr("transform", "translate(" + width2 / 2 + "," + height2 / 2 + ")");

    var meter = svg.append("g")
        .attr("class", "funds-allocated3-meter");

    meter.append("path")
        .attr("class", "background")
        .attr("d", arc3.endAngle(twoPi));

    var foreground3 = meter.append("path")
        .attr("class", "foreground");

    var percentComplete3 = meter.append("text")
        .attr("text-anchor", "middle")
        .attr("class", "percent-complete")
        .attr("dy", "0em");

    var description = meter.append("text")
        .attr("text-anchor", "middle")
        .attr("class", "description")
        .attr("dy", "2.3em")
        .text("Environmental");

    var transition3 = d3.transition('arc3');

    var i3 = d3.interpolate(progress, allocated3 / total);

    transition3.duration(1000).tween("progress", function () {
        return function (t) {
            progress = i3(t);
            foreground3.attr("d", arc3.endAngle(twoPi * progress));
            percentComplete3.text(formatPercent3(progress));
        };
    });
    /* End of Environmental */

    /* CULTURAL */

    var progress = 0,
        allocated4 = 12,
        total = 100,
        formatPercent4 = d3.format(".0%");

    var arc4 = d3.svg.arc()
        .startAngle(0)
        .innerRadius(58)
        .outerRadius(66);

    var svg = d3.select("#docsChart").append("svg")
        .attr("width", width2)
        .attr("height", height2)
        .append("g")
        .attr("transform", "translate(" + width2 / 2 + "," + height2 / 2 + ")");

    var meter = svg.append("g")
        .attr("class", "funds-allocated4-meter");

    meter.append("path")
        .attr("class", "background")
        .attr("d", arc4.endAngle(twoPi));

    var foreground4 = meter.append("path")
        .attr("class", "foreground");

    var percentComplete4 = meter.append("text")
        .attr("text-anchor", "middle")
        .attr("class", "percent-complete")
        .attr("dy", "0em");

    var description = meter.append("text")
        .attr("text-anchor", "middle")
        .attr("class", "description")
        .attr("dy", "2.3em")
        .text("Cultural");

    var transition4 = d3.transition('arc4');

    var i4 = d3.interpolate(progress, allocated4 / total);

    transition4.duration(1000).tween("progress", function () {
        return function (t) {
            progress = i4(t);
            foreground4.attr("d", arc4.endAngle(twoPi * progress));
            percentComplete4.text(formatPercent4(progress));
        };
    });
    /* End of Cultural */

    /* CIRCLE GRAPH END */

})();

function changeColour(obj, text, size) {

    obj.style.fontSize = size;

    obj.innerText = text;

    if (obj.style.color == "orange") {
        obj.style.color = "black";
    } else {
        obj.style.color = "orange";
    }
}