const COLINEAR = 0;
const CLOCKWISE = 1;
const COUNTERCLOCKWISE = 2;

exports.onSegment = function (p, q, r) {
    if (q.x <= Math.max(p.x, r.y) && q.x >= Math.min(p.x, r.x) &&
            q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y)) {
        return true;
    } else {
        return false;
    }
};

function orientation(p, q, r) {
    // See https://www.geeksforgeeks.org/orientation-3-ordered-points/ 
    // for details of below formula. 
    let value = (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
    if (value === 0) { // colinear
        return COLINEAR;
    } else if (value>0){
        return CLOCKWISE;
    }else{
        return COUNTERCLOCKWISE; 
    }
    ;
}
;

exports.doIntersect = function (p1, q1, p2, q2) {
// Find the four orientations needed for general and 
// special cases 
    let o1 = orientation(p1, q1, p2);
    let o2 = orientation(p1, q1, q2);
    let o3 = orientation(p2, q2, p1);
    let o4 = orientation(p2, q2, q1);
    let onSegment = false;
    // General case 
    if (o1 !== o2 && o3 !== o4) {
        return true;
    }
    ;
    // Special cases 
    // p1, q1 and p2 are colinear and p2 lies on segment p1q1 
    onSegment = this.onSegment(p1, p2, q1);
    if (o1 === 0 && onSegment === true) {
        return true;
    }
    // p1, q1 and q2 are colinear and q2 lies on segment p1q1 
    onSegment = this.onSegment(p1, q2, q1);
    if (o2 === 0 && onSegment=== true) {
        return true;
    }
    // p2, q2 and p1 are colinear and p1 lies on segment p2q2 
    onSegment = this.onSegment(p2, p1, q2);
    if (o3 === 0 && onSegment === true) {
        return true;
    }
    // p2, q2 and q1 are colinear and q1 lies on segment p2q2 
    onSegment = this.onSegment(p2, q1, q2);
    if (o4 === 0 && onSegment === true) {
        return true;
    }
    return false; // doesn't fall in any of the above cases 
};

exports.calculateIntersection = function (segment1, segment2) {
    let crossPoint = lineLineIntersection(segment1.start, segment1.end, segment2.start, segment2.end);
    return crossPoint;
};


function lineLineIntersection(p1, q1, p2, q2) {
    let crossPoint = {};
    // Line p1q1 represented as a1.x + b1y = c1 
    let a1 = q1.y - p1.y;
    let b1 = p1.x - q1.x;
    let c1 = a1 * (p1.x) + b1 * (p1.y);

    // Line p2q2 represented as a2x + b2y = c2 
    let a2 = q2.y - p2.y;
    let b2 = p2.x - q2.x;
    let c2 = a2 * (p2.x) + b2 * (p2.y);

    let determinant = a1 * b2 - a2 * b1;

    if (determinant === 0) {
        crossPoint = null;
    } else
    {
        crossPoint.x = (b2 * c1 - b1 * c2) / determinant;
        crossPoint.y = (a1 * c2 - a2 * c1) / determinant;
        return crossPoint;
    }
}


