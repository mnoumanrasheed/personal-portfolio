import { ImageResponse } from 'next/og';

export const alt = 'Muhammad Nouman - Web Developer and ML Enthusiast';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'center',
          background: 'linear-gradient(135deg, #090d16 0%, #17223b 58%, #0d1b35 100%)',
          color: '#f8fafc',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center',
          padding: '72px',
          position: 'relative',
          width: '100%',
        }}
      >
        <div style={{ color: '#60a5fa', display: 'flex', fontSize: 26, letterSpacing: 8, textTransform: 'uppercase' }}>
          Web Developer & ML Enthusiast
        </div>
        <div style={{ display: 'flex', fontSize: 84, fontWeight: 800, letterSpacing: -3, marginTop: 24 }}>
          Muhammad Nouman
        </div>
        <div style={{ color: '#cbd5e1', display: 'flex', fontSize: 32, marginTop: 24 }}>
          Modern Web Apps | ML Projects | Digital Solutions
        </div>
        <div style={{ background: '#3b82f6', bottom: 0, display: 'flex', height: 8, left: 0, position: 'absolute', width: '100%' }} />
      </div>
    ),
    size,
  );
}
