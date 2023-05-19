// FlyHigh is function that takes a input array and returns a number of planeNeeded
function FlyHigh(array){
  let fuelRemaining=array[0] //Quantity of fuel
  let planeNeeded=1          //Quantity of plane
  let maxFuel=array[0]      //maximum Fuel value
  let maxFuelairport=0   //Location of maximum fuel

  
  for(let i=1;i<array.length;i++){
    fuelRemaining--;
    
    if(fuelRemaining===0){
        if(array[i]==0){
            if(maxFuel-Math.abs(maxFuelairport-i)){
                fuelRemaining=maxFuel-Math.abs(maxFuelairport-i);
            }
            else{
            return -1
            }
        }
        fuelRemaining=array[i]
        if(i!=array.length-1){
        planeNeeded++

        }
    }
    else{
         if(maxFuel<array[i]){
            maxFuel=array[i]
            maxFuelairport=i
         }
        }
      
  }
  return planeNeeded
}
let array1 =[1,6,3,4,5,0,0,0,6]
let array2 =[2,1,2,3,1]
console.log(FlyHigh(array1))
console.log(FlyHigh(array2))

// Here's a step-by-step explanation of the algorithm used in the FlyHigh function to solve the given problem:

// Initialize variables:

// fuelRemaining: Represents the quantity of fuel remaining in the current plane.
// planeNeeded: Represents the number of planes needed to reach the last airport. Initially set to 1 since we start at the first airport.
// maxFuel: Represents the maximum fuel value encountered so far.
// maxFuelAirport: Represents the location (index) of the airport with the maximum fuel value encountered so far.
// Iterate over the input array starting from the second airport (index 1):

// Decrement fuelRemaining by 1 to account for the distance traveled from the previous airport.
// Check if the current plane runs out of fuel (fuelRemaining === 0):

// If so, check if the fuel at the current airport (array[i]) is zero. If it is, it means we cannot continue to the next airport and must check if it's possible to reach the next airport using the plane with the maximum fuel encountered so far.
// If the maximum fuel minus the distance from the maximum fuel airport to the current airport (maxFuel - Math.abs(maxFuelAirport - i)) is greater than zero, set fuelRemaining to this value to continue the journey.
// If the above condition is not satisfied, it means it's impossible to reach the last airport, so we return -1.
// If the current plane can continue to the next airport, update fuelRemaining to the fuel value at the current airport (array[i]).

// Also, if the current airport is not the last one, increment planeNeeded to account for hiring a new plane at the current airport.
// During each iteration, check if the fuel value at the current airport is greater than the maximum fuel encountered so far (maxFuel).

// If it is, update maxFuel to the new maximum fuel value and update maxFuelAirport to the current airport's index.
// Repeat steps 2-5 until all airports have been visited.

// Return the final value of planeNeeded, which represents the minimum number of planes needed to reach the last airport.

// // In the given example, for the array [1, 6, 3, 4, 5, 0, 0, 0, 6], the algorithm will output 3, indicating that a minimum of three planes is needed to reach the last airport [1 → 6 → 5 → 6].

