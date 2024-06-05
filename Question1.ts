const getClockAngle = (hr_min: string): number => {
    const [hr, min] = hr_min.split(':').map(Number);
    const cachedHourAngle = (hr % 12) * 30;
    const minuteAngle = min * 6;
    const hourAngle = cachedHourAngle + min * 0.5;
    let angle = Math.abs(hourAngle - minuteAngle);
    if (angle > 180) {
        angle = 360 - angle;
    }
    return angle;
}

console.log(getClockAngle("09:00"));
console.log(getClockAngle("17:30"));