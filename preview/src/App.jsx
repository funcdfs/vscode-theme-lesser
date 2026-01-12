/**
 * Lesser Theme - Color Palette Preview
 */

const palette = {
  syntax: [
    { color: '#FF8BA7', hex: 'FF8BA7' },
    { color: '#87c3ff', hex: '87c3ff' },
    { color: '#efb080', hex: 'efb080' },
    { color: '#AAA0FA', hex: 'AAA0FA' },
    { color: '#dbd6d2', hex: 'dbd6d2' },
    { color: '#e394dc', hex: 'e394dc' },
    { color: '#5CA55C', hex: '5CA55C' },
    { color: '#8B8399', hex: '8B8399' },
    { color: '#f8c762', hex: 'f8c762' },
    { color: '#a8cc7c', hex: 'a8cc7c' },
    { color: '#cc7c8a', hex: 'cc7c8a' },
  ],
  editor: [
    { color: '#211D25', hex: '211D25' },
    { color: '#E4E4E4', hex: 'E4E4E4' },
    { color: '#3D3250', hex: '3D3250' },
    { color: '#251E2E', hex: '251E2E' },
    { color: '#A995F1', hex: 'A995F1' },
    { color: '#E4E4E442', hex: 'E4E442' },
  ],
  brackets: [
    { color: '#7EB8DA', hex: '7EB8DA' },
    { color: '#8FBC8F', hex: '8FBC8F' },
    { color: '#B8A9C9', hex: 'B8A9C9' },
    { color: '#C9A86C', hex: 'C9A86C' },
    { color: '#E0A370', hex: 'E0A370' },
    { color: '#A0A0B0', hex: 'A0A0B0' },
  ],
  terminal: [
    { color: '#211A28', hex: '211A28' },
    { color: '#FF8BA7', hex: 'FF8BA7' },
    { color: '#a8cc7c', hex: 'a8cc7c' },
    { color: '#f8c762', hex: 'f8c762' },
    { color: '#efb080', hex: 'efb080' },
    { color: '#e394dc', hex: 'e394dc' },
    { color: '#5CA55C', hex: '5CA55C' },
    { color: '#E4E4E4', hex: 'E4E4E4' },
  ],
  terminalBright: [
    { color: '#E4E4E442', hex: 'E4E442' },
    { color: '#CC7C8A', hex: 'CC7C8A' },
    { color: '#87c3ff', hex: '87c3ff' },
    { color: '#fad075', hex: 'fad075' },
    { color: '#AAA0FA', hex: 'AAA0FA' },
    { color: '#e394dc', hex: 'e394dc' },
    { color: '#5CA55C', hex: '5CA55C' },
    { color: '#E4E4E4', hex: 'E4E4E4' },
  ],
  git: [
    { color: '#518263', hex: '518263' },
    { color: '#7A6BAE', hex: '7A6BAE' },
    { color: '#B64D5E', hex: 'B64D5E' },
    { color: '#628B96', hex: '628B96' },
    { color: '#A33352', hex: 'A33352' },
    { color: '#454545', hex: '454545' },
  ],
  status: [
    { color: '#E34671', hex: 'E34671' },
    { color: '#F1B467', hex: 'F1B467' },
    { color: '#88C0D0', hex: '88C0D0' },
    { color: '#3FA266', hex: '3FA266' },
  ],
}

const ColorSwatch = ({ color, hex }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(color)
  }

  return (
    <div
      onClick={copyToClipboard}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
        cursor: 'pointer',
      }}
    >
      <div style={{
        width: 44,
        height: 44,
        borderRadius: 8,
        background: color,
        boxShadow: `
          0 2px 4px rgba(0,0,0,0.2),
          0 4px 12px rgba(0,0,0,0.15),
          inset 0 1px 0 rgba(255,255,255,0.08)
        `,
        border: '1px solid rgba(255,255,255,0.06)',
        transition: 'transform 0.15s, box-shadow 0.15s',
      }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.08)'
          e.currentTarget.style.boxShadow = `
            0 4px 8px rgba(0,0,0,0.25),
            0 8px 20px rgba(0,0,0,0.2),
            inset 0 1px 0 rgba(255,255,255,0.1)
          `
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)'
          e.currentTarget.style.boxShadow = `
            0 2px 4px rgba(0,0,0,0.2),
            0 4px 12px rgba(0,0,0,0.15),
            inset 0 1px 0 rgba(255,255,255,0.08)
          `
        }}
      />
      <span style={{
        fontSize: 9,
        color: 'rgba(228,228,228,0.35)',
        fontFamily: 'SF Mono, Monaco, Consolas, monospace',
        letterSpacing: 0.3,
      }}>
        {hex}
      </span>
    </div>
  )
}

const Section = ({ title, colors }) => (
  <div style={{ marginBottom: 28 }}>
    <div style={{
      fontSize: 10,
      color: 'rgba(228,228,228,0.25)',
      marginBottom: 12,
      fontWeight: 500,
      letterSpacing: 1.5,
      textTransform: 'uppercase',
    }}>
      {title}
    </div>
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
    }}>
      {colors.map((c, i) => (
        <ColorSwatch key={i} color={c.color} hex={c.hex} />
      ))}
    </div>
  </div>
)

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#18141c',
      padding: '48px 32px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <header style={{ textAlign: 'center', marginBottom: 48 }}>
          <h1 style={{
            fontSize: 42,
            color: 'rgba(228,228,228,0.9)',
            fontWeight: 300,
            marginBottom: 8,
            letterSpacing: 3,
          }}>
            lesser
          </h1>
          <p style={{
            color: 'rgba(228,228,228,0.3)',
            fontSize: 13,
            fontWeight: 400,
            letterSpacing: 0.5,
          }}>
            A minimal dark theme for VS Code
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 12,
            marginTop: 24,
          }}>
            <a
              href="https://marketplace.visualstudio.com/items?itemName=funcdfs.lesser"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '10px 24px',
                background: 'rgba(169,149,241,0.9)',
                color: '#1a161e',
                borderRadius: 6,
                textDecoration: 'none',
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: 0.3,
                boxShadow: '0 2px 8px rgba(169,149,241,0.3)',
                transition: 'all 0.2s',
              }}
            >
              Install
            </a>
            <a
              href="https://github.com/funcdfs/vscode-theme-lesser"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '10px 24px',
                background: 'rgba(228,228,228,0.05)',
                color: 'rgba(228,228,228,0.7)',
                borderRadius: 6,
                textDecoration: 'none',
                fontSize: 13,
                fontWeight: 400,
                letterSpacing: 0.3,
                border: '1px solid rgba(228,228,228,0.1)',
              }}
            >
              GitHub
            </a>
          </div>
        </header>

        <div style={{
          background: 'rgba(33,29,37,0.6)',
          borderRadius: 16,
          padding: 32,
          border: '1px solid rgba(228,228,228,0.04)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        }}>
          <Section title="Syntax" colors={palette.syntax} />
          <Section title="Editor" colors={palette.editor} />
          <Section title="Brackets" colors={palette.brackets} />
          <Section title="Terminal" colors={palette.terminal} />
          <Section title="Terminal Bright" colors={palette.terminalBright} />
          <Section title="Git" colors={palette.git} />
          <Section title="Status" colors={palette.status} />
        </div>

        <footer style={{
          marginTop: 32,
          textAlign: 'center',
        }}>
          <a
            href="https://github.com/funcdfs"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'rgba(169,149,241,0.6)',
              textDecoration: 'none',
              fontSize: 12,
              letterSpacing: 0.5,
            }}
          >
            @funcdfs
          </a>
        </footer>
      </div>
    </div>
  )
}
