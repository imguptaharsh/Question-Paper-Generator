const calculateDistribution = (questions, totalMarks, difficultyDistribution) => {
    const distribution = {};

    difficultyDistribution.forEach(({ difficulty, percentage }) => {
        const marksForDifficulty = Math.round((percentage / 100) * totalMarks);
        let count = 0;
        let cnt=0;
        for (const question of questions) {
            if (question.difficulty === difficulty) {
                if (count < marksForDifficulty) {
                count += question.marks;
                cnt++;
                }
                else break;
            }
        }

        count = Math.max(count, 0);
        count = Math.min(count, questions.filter(q => q.difficulty === difficulty).length);
        console.log(difficulty,":" ,cnt)
        distribution[difficulty] = cnt;
    });
    console.log(distribution)
    return distribution;
};

module.exports = { calculateDistribution };
