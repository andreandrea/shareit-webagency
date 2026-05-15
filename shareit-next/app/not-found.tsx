import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="error-page">
      <div className="robot-container">
        <svg version="1.1" viewBox="0 0 375.1 625.2" className="robot-svg">
          <defs>
            <linearGradient
              id="SVGID_1_"
              gradientUnits="userSpaceOnUse"
              x1="74.1602"
              y1="294.3841"
              x2="268.6852"
              y2="294.3841"
            >
              <stop offset="0" stopColor="#3B60AA" />
              <stop offset="0.5697" stopColor="#55C3EA" />
              <stop offset="1" stopColor="#3B60AA" />
            </linearGradient>
            <linearGradient
              id="eye-gradient"
              gradientUnits="userSpaceOnUse"
              x1="126.1227"
              y1="271.734"
              x2="205.3977"
              y2="271.734"
            >
              <stop offset="0" stopColor="#55C3EA" />
              <stop offset="1" stopColor="#3B60AA" />
            </linearGradient>
            <linearGradient
              id="antenna-gradient"
              gradientUnits="userSpaceOnUse"
              x1="179.3502"
              y1="118.8465"
              x2="197.4702"
              y2="118.8465"
            >
              <stop offset="0" stopColor="#55C3EA" />
              <stop offset="1" stopColor="#3B60AA" />
            </linearGradient>
          </defs>
          <path
            fill="#172A44"
            stroke="url(#SVGID_1_)"
            strokeWidth="2"
            d="M75.2,195.1c0-7.7,6.3-14,14-14H245c7.6,0,15.1,3.8,22.7,11.3v201.2c0,7.7-6.3,14-14,14H89.2c-7.7,0-14-6.3-14-14V195.1z"
          />
          <circle
            fill="url(#eye-gradient)"
            stroke="#55C3EA"
            strokeWidth="3"
            cx="165.8"
            cy="271.7"
            r="39.6"
          />
          <circle className="st3" fill="#172B45" cx="165.8" cy="271.7" r="20.4" />
          <circle
            fill="url(#antenna-gradient)"
            stroke="#55C3EA"
            strokeWidth="3"
            cx="188.4"
            cy="118.8"
            r="9.1"
          />
          <path
            fill="#172B45"
            stroke="#55C3EA"
            strokeWidth="2"
            d="M131.8,407.6h65.3c7.7,0,14,6.3,14,14v17.3c0,7.7-6.3,14-14,14h-62.6c-7.7,0-14-6.3-14-14v-20C120.5,411.4,124.2,407.6,131.8,407.6"
          />
        </svg>
      </div>

      <div className="error-content">
        <h1>404</h1>
        <p>Oops! Il segnale si è interrotto nel cyberspazio.</p>
        <Link href="/" className="back-home">
          Ricarica Sistema (Home)
        </Link>
      </div>
    </div>
  )
}
