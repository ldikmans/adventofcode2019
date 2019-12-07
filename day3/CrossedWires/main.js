const linesegments = require('./lib/linesegments');

exports.calculateDistance = function (wire1, wire2) {
    let wirelines1 = calculateWireLines(wire1);
    //let sortedwires1 = sortWirelines(wirelines1);
    let wirelines2 = calculateWireLines(wire2);
    //let sortedwires2 = sortWirelines(wirelines2);
    let crossPoints = compare(wirelines1, wirelines2);
    return calculateSmallesDistance(crossPoints);
};

function calculateWireLines(wire) {
    let lines = [];
    let cursorX = 0;
    let cursorY = 0;
    
    let wireArray = wire.split(',');
    for (let i = 0; i < wireArray.length; i++) {
        let direction = wireArray[i].substring(0, 1);
        let value = Number(wireArray[i].substring(1));
        let line = {};
        line.start = {
            x: cursorX,
            y: cursorY
        };
        line.end = {};
        switch (direction) {
            case 'R':
                cursorX = cursorX + value;
                break;
            case 'L':
                cursorX = cursorX - value;
                break;
            case 'U':
                cursorY = cursorY + value;
                break;
            case 'D':
                cursorY = cursorY - value;
                break;
        }
        ;
        line.end.x = cursorX;
        line.end.y = cursorY;
        lines.push(line);
    }
    return lines;
}
;

function compare(c1, c2) {
    const crosspoints = [];
    c1.forEach((e1) => c2.forEach((e2) => {
        let intersect = linesegments.doIntersect(e1.start, e1.end, e2.start, e2.end);
        if (intersect === true) {
            let intersectionPoint = linesegments.calculateIntersection(e1, e2);
            if (intersectionPoint !== undefined && intersectionPoint.x !== 0 && intersectionPoint.y !==0) {
              crosspoints.push(intersectionPoint);
            } ;
         };
     }));
    return crosspoints;
}
;

function calculateSmallesDistance(crosspoints) {
    let smallest=0;
    for (let i = 0; i < crosspoints.length; i++) {
        let crossPoint = crosspoints[i];
        if (crossPoint.x < 0) {
            crossPoint.x = crossPoint.x * -1;
        }
        if (crossPoint.y < 0) {
            crossPoint.y = crossPoint.y * -1;
        }
        distance = crossPoint.x + crossPoint.y;
        if (!smallest || distance < smallest) {
            smallest = distance;
        }
        ;
    }
    console.log('smallest: ' + smallest);
    return smallest;
}
;



