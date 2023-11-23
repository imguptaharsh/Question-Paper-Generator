const express = require('express');
const Joi = require('joi');
const Question = require('../models/model');
const questionPaperGeneratorService = require('../service/paper_generator');

const router = express.Router();

const questions = require('../data/data.json');

// Validation schema for request parameters
const schema = Joi.object({
  totalMarks: Joi.number().required(),
  difficultyDistribution: Joi.array()
    .items(
      Joi.object({
        difficulty: Joi.string().valid('Easy', 'Medium', 'Hard').required(),
        percentage: Joi.number().required(),
      })
    )
    .required(),
});
// API to get all questions
router.get('/', (req, res) => {
  res.json(questions);
});
// API to generate question paper
router.post('/generate', (req, res) => {
  // Validate input
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { totalMarks, difficultyDistribution } = req.body;

  // Generate question paper
  const generatedQuestions = questionPaperGeneratorService(questions, totalMarks, difficultyDistribution);

  res.json(generatedQuestions);
});

module.exports = router;
