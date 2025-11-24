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
          background: 'transparent',
        }}
      >
        <div
          style={{
            fontSize: 20,
            background: 'linear-gradient(135deg, #ff6b35 0%, #ffffff 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            fontFamily: '"Times New Roman", Georgia, serif',
            fontWeight: 700,
          }}
        >
          SM
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
