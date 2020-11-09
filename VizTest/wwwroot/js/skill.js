


function mouseover(data) {
    chart.refreshChart(data);
    var c = getcrumbpath(data);
    i(c);
    d3
        .selectAll(".skills-sunburst path")
        .style("opacity", .3), sunburst /* Opacity of the whole sunburst during mouse over */
        .selectAll("path")
        .filter(function (a) { return c.indexOf(a) >= 0 })
            .style("opacity", 1) /* opacity of highlighted segment */
    .attr("r", 5.5)
            
};


function mouseleave() {
    d3
        .selectAll("path")
        .on("mouseover", null); /* on mouseLeave, make mouseOver null */
    d3
        .selectAll("path")
        .transition() /* transition */
        .duration(1e3) /* 1e3 is short for 10 to the power of 3...which is 1000 */
        .style("opacity", 1) /* Opacity goes back to normal */
        .each("end", function () { d3.select(this).on("mouseover", mouseover) })
};


function getcrumbpath(a) {
    for (var temp = [], c = a; c.parent;) temp.unshift(c), c = c.parent;
    return temp
};


function initbreadcrumb() { /* Text trail svg */
    d3
        .select("#skills-chart-breadcrumb") /* HTML reference */
        .append("svg:svg") /* attach svg to this html component */
        .attr("width", 770) /* width of text section canvas */
        .attr("height", 50) /* height of text section canvas  */ 
        .attr("class", "trail")
};


function h(d3) { /* All background Arrow settings (the polygon shape) */
    var c = []; /* var c is an empty arraylist...everything with c.push is being pushed into it */
    c.push("1,1"); 
    c.push(r.w + ",1");
    c.push(r.w + r.t + "," + r.h / 1); /* breadcrumb background shape(front arrow shape) */
    c.push(r.w + "," + r.h); 
    c.push("8," + r.h); /* breadcrumb background shape(back end shape) */
    d3 > 0 && c.push(r.t + "," + r.h / 10);
    return c.join(" "); /* Polygon length */
};


function i(a) { /* This function controls text trail */
   
   
    c = d3
        .select("#skills-chart-breadcrumb .trail") /*  */
        .selectAll("g")
        .data(a, function (a) { return a.key + a.depth });
    var d = c.enter().append("svg:g"); /*svg:'g' refers to group*/ /* dv was d */
    d
        .append("svg:polygon") 
        .attr("points", h)
        .style("fill", function (a) { return a._color }), /* Creates the colour variation on the text trail*/
    d
        .append("svg:text")
        .attr("x", r.w / 2 + 2) /* Centers trail text along x axis */
        .attr("y", r.h / 2) /* Centers trail text along y axis */
        .attr("dy", "0.30em") /* not sure what this does yet but it controls text alighnment along y axis TODO */
        .attr("text-anchor", "middle") /* Text anchored by its center */
        .attr("class", "breadcumb-text")
        .style("fill", function (a) { return getcolor(d3.rgb(a._color)) < 150 ? "#fff" : "#000" }) /* Text black unless within red section in which it is white */
        .text(function (a) { return a.key }),
    c
        .attr("transform", function (_a,b) { return "translate(" + b * (r.w + r.s) + ", 0)" }), 
    c.exit().remove(), 
    d3.select(".trail").style("visibility", "")
};


function getcolor(color) { /* creates colour variation */
    return .299 * color.r + .587 * color.g + .114 * color.b
};


function k(a) {
    var c = ["#4CC3D9", "#FFC65D", "#51D775", "#f21b54", "#404040"], /* Blue, Yellow, Green, Red */
        d = [-.1, -.05, 0];
    if (1 == a.depth) {
        var e = c[coloralternative % 5];
        return coloralternative++, e
    }
    if (a.depth > 1) {
        var f = d[a.value % 3];
        return d3.rgb(a.parent._color).brighter(.2 * a.depth + f * a.depth)
    }
};


var chart = function (d3) {

    function processdata(data) {
        var b = [], 
            c = 0;
        return data._proficiency.forEach(function (a) {
            c <= i.length && (b.push({
                p: a,
                date: i[c]
            }), c++)
        }), b
    };


    function c(b) {
        j.domain(d3.extent(b, function (a) { return a.date }));

        k
            .domain([0, 100]), cpath
            .append("g")
            .attr("class", "x-axis axis")
            .attr("transform", "translate(0," + h + ")")
      
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".91em")
            .style("text-anchor", "end")           
    };


    function refreshChart(data) {
        var e = processdata(data),
            f = d3.select("#skills-chart-line");
        null === f[0][0] 
        ? c(e) 
        : f
            .datum(e)
            .attr("d", n)
           
    };

    var chart = {},   /*chart is an object*/
        rect = {
            top: 10,
            right: 10,
            bottom: 10,
            left: 10
        },
            
        g = 2 - rect.left - rect.right,
        h = 20 - rect.top - rect.bottom,
      
        j = d3.scale.linear().range([0, g]),
        k = d3.scale.linear().range([h, 0]),
        n = d3.svg.line().interpolate("basis").x(function (a) {
            return j(a.date)
        }).y(function (a) {
            return k(a.p)
            }),


        cpath = d3 /* creating the skillschart graph */
            .select(".skills-chart")
            .append("svg")
            .attr("width", g + rect.left + rect.right)
            .attr("height", h + rect.top + rect.bottom)

            .append("g")
            .attr("transform", "translate(" + rect.left + "," + rect.top + ")");
        chart.refreshChart = refreshChart;
        return chart;
}

    (d3),
    width = 550,  /* Size of sunburst graph svg */
    height = 550,
    rad = Math.min(width, height) / Math.PI - 25, /*radius*/
    q = k,
    r = {
        w: 250,  /*Size of chart labels*/
        h: 40,
        s: 3,
        t: 7
    },

    sunburst = d3
        .select(".skills-sunburst")
        .append("svg:svg")
        .attr("width", width)
        .attr("height", height)
        .append("svg:g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")"); /* Sunburst transform/translate of sunburst model */

sunburst.append("svg:circle").attr("r", rad).style("opacity", 0);


var t = function (a, b)
{
    var c = [],
        d = a.length;
    if (a.length !== b.length) c = a.length > b.length ? a : b;
    else for (var e = 0; d > e; e++) {
        var f = Math.max(a[e], b[e]) - Math.abs(a[e] - b[e]) / 4;
        c.push(f)
    }
    return c
},
  
    u = function (a)
    {
            return a;                                   /*if (a instanceof Array)*/  /* Jquery...if a is not an instance of array then return itself*/
        var b = [];
        return $.each(a, function (_a, c) {
            b = t(u(c), b)
        }), b
    },

    proficiencydata = d3
        .layout
        .partition()
        .sort(null)
        .size([2 * Math.PI, rad])
        .children(function (a) {
            return a.value instanceof Array 
                ? (a._proficiency = a.value, d3.entries([a.value[a.value.length - 1]])) 
                : (a._proficiency = u(a.value), isNaN(a.value) ? d3.entries(a.value) : null)  /* how the data is organised */
        })
        .value(function (a) { return a.value }),
    arc = d3.svg
        .arc()
        .startAngle(function (a) { return a.x })
        .endAngle(function (a) { return a.x + a.dx - 0 / (a.depth + 0) }) /* Space between sections (X-axis) */
        .innerRadius(function (a) { return rad / Math.PI * a.depth - 1 }) /* Space between layers */
        .outerRadius(function (a) { return rad / Math.PI * (a.depth + 1) - 1 }); /* Size of the sections along Y-axis */



var coloralternative = 0
initbreadcrumb();

var path = sunburst
    .data(d3.entries(SkillsData))
    .selectAll("g")
    .data(proficiencydata)
    .enter() /* data related */
    .append("svg:g")
    .attr("display", function (a) { return a.depth ? null : "none" });
path
    .append("svg:path")
    .attr("d", arc)
    .attr("stroke", "#000") /* Sunburst outline (Black) */
    .attr("stroke-width", "0.5px")
    .attr("fill", function (a) { return a._color = q(a), a._color })
    .attr("fill-rule", "evenodd").attr("display", function (a) { return a.children ? null : "none" })
    .on("mouseover", mouseover);






