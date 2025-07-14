import React, { useState } from 'react';
import '../../css/pages/Sleep.css';

const sleepQuestions = [
  {
    question: 'How many hours of sleep did you get last night?',
    name: 'sleepQ1',
    options: [
      { label: 'I slept more than 8 hours', value: '8plus' },
      { label: '6 - 8 hours', value: '6-8' },
      { label: '4 - 6 hours', value: '4-6' },
      { label: '2 - 4 hours', value: '2-4' },
      { label: '1 - 2 hours', value: '1-2' },
      { label: 'I got little to no sleep last night', value: 'little-none' },
    ]
  },
  {
    question: 'How comfortable were you sleeping last night?',
    name: 'sleepQ2',
    options: [
      { label: 'Very comfortable', value: 'very-comfortable' },
      { label: 'Comfortable enough', value: 'comfortable' },
      { label: 'It was alright', value: 'alright' },
      { label: 'I was not comfortable last night', value: 'not-comfortable' },
    ]
  },
  {
    question: 'Has anything prevented you from sleeping comfortably last night?',
    name: 'sleepQ3',
    options: [
      { label: 'Stress', value: 'stress' },
      { label: 'Sleeping space', value: 'sleeping-space' },
      { label: 'Lights/noise', value: 'lights-noise' },
      { label: 'Night terrors', value: 'night-terrors' },
      { label: 'Other', value: 'other' },
    ]
  },
  {
    question: 'How many times did you wake up throughout the night last night?',
    name: 'sleepQ4',
    options: [
      { label: 'I woke up more than 10 times last night', value: '10plus' },
      { label: 'I woke up more than 5 times last night', value: '5plus' },
      { label: '3-4', value: '3-4' },
      { label: '1-2', value: '1-2' },
      { label: 'I slept through the night', value: 'through-night' },
    ]
  }
];

export default function Sleep() {
  const [responses, setResponses] = useState({});

  const handleChange = (questionName, value) => {
    setResponses(prev => ({ ...prev, [questionName]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sleep responses:', responses);
    // You can add validation or send to backend here
  };

  return (
    <div className="sleep-container">
      <h1>Sleep</h1>
      <p>Sleep is very important to maintaining your mental health. It is recommended that you sleep for 8 hours a day.</p>
      <p>The following quiz will assess how well you have slept the past night.</p>

      <form onSubmit={handleSubmit}>
        <ol>
          {sleepQuestions.map((q, i) => (
            <li key={i} className="sleep-question">
              <p>{q.question}</p>
              {q.options.map((opt, j) => (
                <div key={j} className="sleep-option">
                  <input
                    type="radio"
                    id={`${q.name}-${j}`}
                    name={q.name}
                    value={opt.value}
                    checked={responses[q.name] === opt.value}
                    onChange={() => handleChange(q.name, opt.value)}
                  />
                  <label htmlFor={`${q.name}-${j}`}>{opt.label}</label>
                </div>
              ))}
            </li>
          ))}
        </ol>

        <button type="submit" className="sleep-submit">Submit</button>
      </form>
    </div>
  );
}
