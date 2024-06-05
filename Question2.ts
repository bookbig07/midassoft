const getQuestionPart = (phrases: string[]): string[] => {
    const findCommonPart = (phrases: string[]): string => {
        const firstPhrase = phrases[0];
        for (let length = firstPhrase.length; length > 0; length--) {
            const commonPart = firstPhrase.slice(0, length);
            if (phrases.every(phrase => phrase.includes(commonPart))) {
                return commonPart;
            }
        }
        return '';
    };

    const commonPart = findCommonPart(phrases);
    const questionParts = phrases.map(phrase => phrase.replace(commonPart, '').trim());
    return questionParts;
};

// console.log(getQuestionPart(["BATHROOM", "BATH SALTS", "BLOODBATH"]));
// console.log(getQuestionPart(["BEFRIEND", "GIRLFRIEND", "FRIENDSHIP"]));