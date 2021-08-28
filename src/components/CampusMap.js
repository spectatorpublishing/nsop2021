import * as d3 from "d3";
import { useEffect } from "react";

const CampusMap = () => {
    useEffect(() => {
        var svg = d3.select("#containers")
        .append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "0 0 400 300")
        .classed("svg-content", true);
    
        //Circle locations        
        var data = [ 
            { "name" : "STUDENT LIFE", "cx" : 120, "cy" : 75, "r" : 8 , "fill" : "#FAE1AF", 
                    "linkOne": {"title" : "Decoding the tricky Barnard-Columbia relationship", "href" : "http://columbiaspectator.com"}, 
                    "linkTwo" : {"title" : "Data Explainer: Class of 2024 and 2025", "href" : "http://columbiaspectator.com"}, 
                    "linkThree": {"title" : "Culminating community: Get to know Columbia’s biggest campus events", "href" : "http://columbiaspectator.com"},
                    "linkFour": {"title" : "View more >", "href" : "http://columbiaspectator.com"}},
            { "name" : "CITY", "cx" : 100, "cy" : 136, "r" : 8 , "fill" : "#FAE1AF", 
                    "linkOne": {"title" : "What does the return of students to campus mean for local restaurants?", "href" : "http://columbiaspectator.com"}, 
                    "linkTwo" : {"title" : "A night out as a Columbia Student", "href" : "http://columbiaspectator.com"}, 
                    "linkThree": {"title" : "Places around MoHi to buy room necessities", "href" : "http://columbiaspectator.com"},
                    "linkFour": {"title" : "View more >", "href" : "http://columbiaspectator.com"}},
            { "name" : "Circle 3", "cx" : 210, "cy" : 70, "r" : 8 , "fill" : "#FAE1AF", "href": "http://columbiaspectator.com"},
            { "name" : "COVID-19", "cx" : 240, "cy" : 205, "r" : 8 , "fill" : "#FAE1AF", 
                    "linkOne": {"title" : "Barnard breaks from Columbia’s original guidance, will continue mandating indoor masking for fall semester", "href" : "http://columbiaspectator.com"}, 
                    "linkTwo" : {"title" : "Columbia COVID guidelines for the fall", "href" : "http://columbiaspectator.com"}, 
                    "linkThree": {"title" : "View more >", "href" : "http://columbiaspectator.com"}},
            { "name" : "JOIN SPEC", "cx" : 355, "cy" : 142, "r" : 8 , "fill" : "#FAE1AF", "href": "http://columbiaspectator.com"},
            { "name" : "EXPLORE HOUSING", "cx" : 320, "cy" : 68, "r" : 8 , "fill" : "#FAE1AF", "href": "http://columbiaspectator.com"},
            { "name" : "EXPLORE CLUBS", "cx" : 310, "cy" : 15, "r" : 8 , "fill" : "#FAE1AF", "href": "http://columbiaspectator.com"},
            { "name" : "SPECTATOR STAFF", "cx" : 348, "cy" : 195, "r" : 8 , "fill" : "#FAE1AF", "href": "http://columbiaspectator.com"}]
    
        //Hover text
        var hoverdiv = d3.select("#containers").append("div")
        .attr("class", "tooltip-donut")
        .style("opacity", 0);
    
        //Creating circles
        var circles = svg.selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('name', function(d) {return d.name})
        .attr('cx', function (d) { return d.cx })
        .attr('cy', function (d) { return d.cy })
        .attr('r', function (d) { return d.r })
        .attr('fill', function (d) { return d.fill})
        .on('mouseover',function(d) {
            d3.select(this)
            .transition()
            .duration(500)
            .attr('fill','#FFF5E0');
    
            //Makes the new div appear:
            hoverdiv.transition()
                .duration(500)
                .style("opacity", 1);
            if(d.href){
                hoverdiv.html(d.name)
                .style("left", (d3.event.pageX + 15) + "px")
                .style("top", (d3.event.pageY - 15) + "px");
            }
            else if(d.linkFour){ 
                hoverdiv.html(`<div class="longData">
                    <p>${d.name}</p>
                    <div class="longDataLinks">
                    <a href=${d.linkOne.href}>${d.linkOne.title}</a><br>
                    <a href=${d.linkTwo.href}>${d.linkTwo.title}</a><br>
                    <a href=${d.linkThree.href}>${d.linkThree.title}</a><br>
                    <a class="viewMore" href=${d.linkFour.href}>${d.linkFour.title}</a>
                    </div>
                </div>`)
                .style("left", (d3.event.pageX + 15) + "px")
                .style("top", (d3.event.pageY - 15) + "px");
            }
            else{ 
                hoverdiv.html(`<div class="longData">
                    <p>${d.name}</p>
                    <div class="longDataLinks">
                    <a href=${d.linkOne.href}>${d.linkOne.title}</a><br>
                    <a href=${d.linkTwo.href}>${d.linkTwo.title}</a><br>
                    <a class="viewMore" href=${d.linkThree.href}>${d.linkThree.title}</a><br>
                    </div>
                </div>`)
                .style("left", (d3.event.pageX + 15) + "px")
                .style("top", (d3.event.pageY - 250) + "px");
            }
        })
    
        .on('click',function(d) {
            if(d.href){
                window.location.replace(d.href)    
            }
        })
    
        .on('mouseout',function () {
            d3.select(this)
            .transition()
            .duration(1000)
            .attr('fill','#FAE1AF');
    
            //Makes the new div disappear:
            hoverdiv.transition()
                .delay('2000')
                .duration('50')
                .style("opacity", 0);
    
            //HOW TO MAKE THE LONG POPUPS NOT DISAPPEAR??
        });    
    }, []);

    return (
        <div className="img-overlay-wrap" id="containers">
            <img src="https://cds-static-hosting.s3.amazonaws.com/NSOP-ILLO.png" />
        </div>
    )
}

export default CampusMap;
