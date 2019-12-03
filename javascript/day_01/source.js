//to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2
import readFileSync from 'fs';

function requiredFuel(mass) {
    let x = mass/3
    x = Math.floor(x)
    return x-2
}

function calculateFuelRequirements(file) {
    var totalFuel
    let inputArr = readFileSync(file).toString();
    for (var i = 0; i < inputArr.length; ++i) {
        inputArr[i] = inputArr[i].trim();
        totalFuel += requiredFuel( Number(inputArr[i]))
       
     }
     return requiredFuel
}

function part1() {
    console.log("Part 1")
    console.log(`expected: 2 got: `, requiredFuel(12))
    console.log(`expected: 2 got: `, requiredFuel(14))
    console.log(`expected: 654 got: `, requiredFuel(1969))
    console.log(`expected 33583 `, requiredFuel(100756))
}

function part2(file) {
    console.log("Part 2")
    console.log("Calculating Required Fuel...")
    console.log(calculateFuelRequirements(file))
}

part1()
part2("input.txt")