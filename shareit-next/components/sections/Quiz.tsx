'use client'

import { useState } from 'react'

export default function Quiz({ data }: { data: any }) {
  const [currentQ, setCurrentQ] = useState(0)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  if (!data) return null;

  const handleAnswer = (correct: boolean) => {
    const newScore = correct ? score + 1 : score
    if (currentQ + 1 < data.questions.length) {
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

  const progress = done ? 100 : (currentQ / data.questions.length) * 100
  const result = data.results.find((r: any) => score >= r.min && score <= r.max)

  return (
    <section id="quiz" className="lv1" aria-labelledby="quiz-title">
      <h2 id="quiz-title" className="head-2">
        {data.title}
      </h2>
      <p className="text" style={{ textAlign: 'center', maxWidth: 580, margin: '0 auto var(--spacing-md)' }}>
        {data.subtitle}
      </p>
      <div className="quiz-container">
        <div className="quiz-progress">
          <div className="quiz-progress-bar" style={{ width: `${progress}%` }} />
        </div>

        {done ? (
          <div className="lv2" style={{ textAlign: 'center' }} aria-live="polite">
            <div style={{ fontSize: 48, marginBottom: 'var(--spacing-sm)' }}>{result?.emoji}</div>
            <h3 className="head-3">
              {score}/{data.questions.length} risposte corrette
            </h3>
            <p className="text" style={{ marginTop: 'var(--spacing-sm)', marginBottom: 'var(--spacing-md)' }}>
              {result?.message}
            </p>
            <div style={{ display: 'flex', gap: 'var(--spacing-sm)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn" onClick={reset} id="quiz-retry-btn">Riprova</button>
              <a href="#contatti" className="btn" style={{ background: 'transparent', border: '1px solid var(--accent-color)', color: 'var(--accent-color)' }} id="quiz-apply-btn">
                Candidati ora →
              </a>
            </div>
          </div>
        ) : (
          <div className="lv2">
            <p className="text" style={{ fontSize: 'var(--font-size-sm)', opacity: 0.6, marginBottom: 'var(--spacing-xs)' }}>
              Domanda {currentQ + 1} di {data.questions.length}
            </p>
            <h3 className="head-3">{data.questions[currentQ].text}</h3>
            <div className="answers">
              {data.questions[currentQ].answers.map((a: any) => (
                <button
                  key={a.label}
                  className="answer-btn"
                  onClick={() => handleAnswer(a.correct)}
                  id={`quiz-answer-${a.label.substring(0, 10).replace(/\s/g, '-')}`}
                >
                  {a.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
