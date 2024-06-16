function generateJSON(p1, p2, p3) {
    let result = [];

    // Convert string ranges to arrays of numbers
    let range1 = p1.split('-').map(Number);
    let range2 = p2.split('-').map(Number);

    // Determine the overall range
    let min = Math.min(range1[0], range2[0]);
    let max = Math.max(range1[1], range2[1]);

    // Generate the objects for the range
    for (let i = min; i <= max; i++) {
        let stage1dValue;
        let stage2dValue;

        if (i == 0) {
            stage1dValue = "Attachment Template";
            stage2dValue = "AT";
        } else if (i === max && p3) {
            stage1dValue = "Retainer";
            stage2dValue = "RT";
        } else {
            stage1dValue = i.toString();
            stage2dValue = i.toString().padStart(2, '0');
        }

        result.push({
            frameID: "1",
            "stage-1d": stage1dValue,
            "stage-2d": stage2dValue
        });
    }

    return result;
}
