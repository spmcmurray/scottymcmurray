import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
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
          borderRadius: 40,
          color: '#1a1f6b',
          fontSize: 64,
          fontWeight: 700,
          letterSpacing: 1,
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
