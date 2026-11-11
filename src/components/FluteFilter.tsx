const MAP =
  "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28'%3E%3ClinearGradient id='g'%3E%3Cstop offset='0' stop-color='%23008000'/%3E%3Cstop offset='1' stop-color='%23ff8000'/%3E%3C/linearGradient%3E%3Crect width='28' height='28' fill='url(%23g)'/%3E%3C/svg%3E"

/** SVG displacement map used by the fluted-glass atmosphere. */
export default function FluteFilter() {
  return (
    <svg width="0" height="0" aria-hidden="true" style={{ position: 'absolute' }}>
      <filter id="flute" x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
        <feImage
          result="map"
          preserveAspectRatio="none"
          x="0"
          y="0"
          width="28"
          height="28"
          href={MAP}
          xlinkHref={MAP}
        />
        <feTile in="map" result="tiled" />
        <feDisplacementMap in="SourceGraphic" in2="tiled" scale="70" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>
  )
}
