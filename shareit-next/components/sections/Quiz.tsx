'use client'

import { useState } from 'react'

type Answer = { label: string; correct: boolean }
type Question = { text: string; answers: Answer[] }

const questions: Question[] = [
  {
    text: 'Cosa significa SEO?',
    answers: [
      { label: 'Social Engine Optimization', correct: false },
      { label: 'Search Engine Optimization', correct: true },
      { label: 'Software Engineering Operations', correct: false },
      { label: 'Secure Email Output', correct: false },
    ],
  },
  {
    text: 'Cosa si intende per "responsive design"?',
    answers: [
      { label: 'Un sito che risponde alle email', correct: false },
      { label: 'Un sito che si adatta a ogni dispositivo', correct: true },
      { label: 'Un design molto veloce', correct: false },
      { label: 'Un sito con molte animazioni', correct: false },
    ],
  },
  {
    text: "Cos'è il Cloud Computing?",
    answers: [
      { label: 'Tecnologia meteorologica', correct: false },
      { label: 'Un tipo di database locale', correct: false },
      { label: 'Servizi IT erogati via internet', correct: true },
      { label: 'Un linguaggio di programmazione', correct: false },
    ],
  },
]

export default function Quiz() {
  const [currentQ, setCurrentQ] = useState(0)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  const handleAnswer = (correct: boolean) => {
    const newScore = correct ? score + 1 : score
    if (currentQ + 1 < questions.length) {
      setScore(newScore)
      setCurrentQ(currentQ + 1)
    } else {
      setScore(newScore)
      setDone(true)
    }
  }

  const reset = () => {
    setCurrentQ(0)
    setScore(0)
    setDone(false)
  }

  const progress = done ? 100 : (currentQ / questions.length) * 100

  return (
    <section id="quiz" className="section">
      <div className="lv1">
        <h2 className="head-2">Quanto conosci il digitale?</h2>
        <div className="quiz-container">
          <div className="quiz-progress">
            <div className="quiz-progress-bar" style={{ width: `${progress}%` }} />
          </div>

          {done ? (
            <div>
              <h3 className="head-3">
                Punteggio: {score}/{questions.length}
                <br />
                {score === questions.length ? 'Esperto Digitale! 🚀' : 'Puoi migliorare!'}
              </h3>
              <button className="btn" onClick={reset} style={{ marginTop: '20px' }}>
                Riprova
              </button>
            </div>
          ) : (
            <div>
              <h3 className="head-3">{questions[currentQ].text}</h3>
              <div className="answers">
                {questions[currentQ].answers.map((a) => (
                  <button
                    key={a.label}
                    className="answer-btn"
                    onClick={() => handleAnswer(a.correct)}
                  >
                    {a.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
