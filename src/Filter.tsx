<filter id="glow">
  <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="BLUR" />
  <feColorMatrix
    in="BLUR"
    type="matrix"
    values="1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 20 -8"
    result="GLOW"
  />
  <feBlend in="SourceGraphic" in2="GLOW" mode="screen" />
</filter>