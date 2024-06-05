const minEnergy = (start: number, shops: number[], stations: number[], target: number): number => {
    const sortedPoints = [start, ...shops, ...stations, target].sort((a, b) => a - b);
    const stationIndices = new Set(stations);
    let energy = 0;
    for (let i = 0; i < sortedPoints.length - 1; i++) {
        const current = sortedPoints[i];
        const next = sortedPoints[i + 1];
        if (stationIndices.has(current) && next - current > energy) {
            energy = next - current - 1;
        }
    }
    for (let i = 0; i < sortedPoints.length - 1; i++) {
        const current = sortedPoints[i];
        const next = sortedPoints[i + 1];
        if (!stationIndices.has(current)) {
            energy += next - current;
        }
    }

    return energy;
}

// console.log(minEnergy(0, [4, 9], [3, 6, 8], 11));