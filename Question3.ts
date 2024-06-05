interface Board {
    ladders: [number, number][];
    snakes: [number, number][];
}

const quickestPath = (board: Board): number[] => {
    const size = 100;
    const laddersMap: Map<number, number> = new Map(board.ladders);
    const snakesMap: Map<number, number> = new Map(board.snakes);
    const queue: [number, number[]][] = [[1, []]];
    const visited: boolean[] = Array(size + 1).fill(false);
    visited[1] = true;
    while (queue.length > 0) {
        const [position, path] = queue.shift()!;
        
        for (let roll = 1; roll <= 6; roll++) {
            let nextPosition = position + roll;
            if (nextPosition > size) continue;

            if (laddersMap.has(nextPosition)) {
                nextPosition = laddersMap.get(nextPosition)!;
            } else if (snakesMap.has(nextPosition)) {
                nextPosition = snakesMap.get(nextPosition)!;
            }

            if (nextPosition === size) {
                return [...path, roll];
            }

            if (!visited[nextPosition]) {
                visited[nextPosition] = true;
                queue.push([nextPosition, [...path, roll]]);
            }
        }
    }
    return [];
}

const boardData: Board = {
    ladders: [
        [3, 39], [14, 35], [31, 70], [44, 65], [47, 86], [63, 83], [71, 93]
    ],
    snakes: [
        [21, 4], [30, 8], [55, 38], [79, 42], [87, 54], [91, 48], [96, 66]
    ]
};

// console.log(quickestPath(boardData));
