self = this;

exports.calculateDistance = function(wire1, wire2){
    let coordinates1 = calculateWireCoordinates(wire1);
    let coordinates2 = calculateWireCoordinates(wire2);
    let crossPoints = compare(coordinates1, coordinates2);
    return calculateSmallesDistance(crossPoints);
};

calculateWireCoordinates = function(wire){
    let coordinateArray = [];
    let cursorX = 0;
    let cursorY = 0;
    let wireArray = wire.split(',');
    for (let i = 0; i<wireArray.length; i++){
        let direction = wireArray[i].substring(0,1);
        value = Number(wireArray[i].substring(1));
        switch (direction){
            case 'R': 
                for(let j=0; j<value; j++){
                   cursorX = cursorX+1;
                   coordinateArray.push(cursorX + ';' + cursorY); 
                };
                break;
            case 'L':
                for (let j=0; j<value; j++){
                    cursorX = cursorX -1;
                    coordinateArray.push(cursorX + ';' + cursorY); 
                }
                break;
            case 'U': 
                 for (let j=0; j<value; j++){
                    cursorY = cursorY+1;
                    coordinateArray.push(cursorX + ';' + cursorY); 
                }
                break;
            case 'D':
                 for (let j=0; j<value; j++){
                    cursorY = cursorY-1;
                    coordinateArray.push(cursorX + ';' + cursorY); 
                }
                 break;
         }
     }
     return coordinateArray;
};

function compare(c1, c2){
    const crosspoints=[];
    c1.forEach((e1)=>c2.forEach((e2)=>{
       if(e1 === e2){
           crosspoints.push(e1);
       }
   }
 ));
 return crosspoints;
}

function calculateSmallesDistance(crosspoints){
    let smallest;
    for(let i= 0; i<crosspoints.length; i++){
        let coordinates = crosspoints[i];
        let coordinateArray = coordinates.split(';').map(Number);
        if(coordinateArray[0] < 0){
            coordinateArray[0] = coordinateArray[0]*-1;
        }
        if(coordinateArray[1] < 0){
            coordinateArray[1] = coordinateArray[1]*-1;
        }
        distance = coordinateArray[0] + coordinateArray[1];
        if(!smallest || distance < smallest){
            smallest = distance;
        };
    }
    console.log(smallest);
    return smallest;
};



