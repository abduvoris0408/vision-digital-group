import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Vision Digital Group - Digital Solutions for Small Businesses'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          background: '#09090B',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Glow top-left */}
        <div style={{ position: 'absolute', top: '-100px', left: '-100px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)', display: 'flex' }} />
        {/* Glow bottom-right */}
        <div style={{ position: 'absolute', bottom: '-150px', right: '-100px', width: '700px', height: '700px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)', display: 'flex' }} />
        {/* Grid */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px', display: 'flex' }} />

        <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '60px 72px', width: '100%' }}>
          {/* Top */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', fontWeight: '900', color: 'white' }}>V</div>
              <span style={{ color: 'white', fontSize: '22px', fontWeight: '700', letterSpacing: '-0.5px' }}>Vision Digital Group</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: '100px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#6366f1', display: 'flex' }} />
              <span style={{ color: '#818cf8', fontSize: '14px', fontWeight: '600' }}>Digital Agency for Small Businesses</span>
            </div>
          </div>

          {/* Headline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '68px', fontWeight: '900', color: 'white', lineHeight: '1.05', letterSpacing: '-2px', display: 'flex' }}>Grow Your Business</span>
              <span style={{ fontSize: '68px', fontWeight: '900', lineHeight: '1.05', letterSpacing: '-2px', display: 'flex', background: 'linear-gradient(90deg, #6366f1, #a78bfa, #ec4899)', backgroundClip: 'text', color: 'transparent' }}>with Digital Tools</span>
            </div>
            <p style={{ color: '#71717a', fontSize: '20px', lineHeight: '1.5', maxWidth: '620px', display: 'flex' }}>
              App Development · AI Chatbots · SEO · Social Media · CRM Systems
            </p>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            {[
              { value: '150+', label: 'Businesses Helped' },
              { value: '98%', label: 'Satisfaction Rate' },
              { value: '3x', label: 'Revenue Growth' },
              { value: '24/7', label: 'AI Support' },
            ].map((stat) => (
              <div key={stat.value} style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '16px 24px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', minWidth: '130px' }}>
                <span style={{ fontSize: '30px', fontWeight: '800', color: 'white', display: 'flex' }}>{stat.value}</span>
                <span style={{ fontSize: '13px', color: '#52525b', display: 'flex' }}>{stat.label}</span>
              </div>
            ))}
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '10px', padding: '16px 28px', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', borderRadius: '100px' }}>
              <span style={{ color: 'white', fontSize: '16px', fontWeight: '700', display: 'flex' }}>visiondigitalgroup.com</span>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
