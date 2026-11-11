import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#ffffff',
          borderRadius: 8,
          color: '#1a1f6b',
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: 0.4,
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
      >
        SM
      </div>
    ),
    {
      ...size,
    }
  )
}
