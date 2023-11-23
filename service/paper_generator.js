const { calculateDistribution } = require('./calculation');

// function to suffle the array
const shuffleArray = (array) => {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

const QuestionPaperGeneratorService = (questions, totalMarks, difficultyDistribution) => {
    const distribution = calculateDistribution(questions, totalMarks, difficultyDistribution);
  
    let questionPaper = [];
  
    Object.keys(distribution).forEach((difficulty) => {
      // without suffling the array
    //   const filteredQuestions = questions.filter((q) => q.difficulty === difficulty);

      // with suffling the array
      const shuffledQuestions = shuffleArray(questions.filter((q) => q.difficulty === difficulty));

      const selectedQuestions = shuffledQuestions.slice(0, distribution[difficulty]);
      questionPaper = questionPaper.concat(selectedQuestions);
    });
  
    return questionPaper;
  };
  
  module.exports = QuestionPaperGeneratorService;
  