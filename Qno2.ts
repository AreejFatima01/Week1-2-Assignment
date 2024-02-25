// Write a program that takes input and calculates the volume of a cube.
function calculateCubeVolume(length: number): number {
    const volume = Math.pow(length, 3);
    return volume;
}

// Example usage
const edgeLength = 5; // Replace with your desired edge length

const cubeVolume = calculateCubeVolume(edgeLength);
console.log(`The volume of the cube is: ${cubeVolume}`);
 