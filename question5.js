// 5.1 Spread med objekt (2p)
// Skriv klart funktionen addIsFast som tar ett bil-objekt och returnerar en kopia
// av objektet och dessutom lägger till egenskapen isFast på det nya objektet.
// Om speed är över 100 ska isFast vara true annars ska det vara false

const car = {
    name: "Volvo",
    speed: 120,
  };
  
  function addIsFast(car) {
    /*let isFast = false;
    
    car.ForEach((speed) => {
      speed = speed[car.speed]
      if (speed >= 120){
        isFast = true;
        car.push({isFast: true})
      } else (car.push({isFast: false}))
    })
  
    return*/
  }
  
  //console.log(addIsFast(car)); // Ska logga { name: "Volvo", speed: 120, isFast: true }
  
  // 5.2  Spread med arrayer (2p)
  // Skapa en funktion 'combineArrays' som tar emot två arrayer som argument
  // och använder spread operatorn för att kombinera dem till en enda array.
  // Returnera den nya arrayen
  
  function combineArrays(arr1, arr2) {
    const join =[...arr1, ...arr2]
  
    return join;
  }
  
  console.log(combineArrays([1, 2, 3], [4, 5, 6])); // Ska logga [1, 2, 3, 4, 5, 6]