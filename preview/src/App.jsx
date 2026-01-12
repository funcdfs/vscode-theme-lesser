import { useState, useRef } from 'react'
import Editor, { loader } from '@monaco-editor/react'
import { lesserTheme } from './theme'
import { leftSamples, rightSamples } from './samples'

const leftLangs = Object.keys(leftSamples)
const rightLangs = Object.keys(rightSamples)

// 预先定义主题
loader.init().then((monaco) => {
  monaco.editor.defineTheme('lesser', lesserTheme)
})

// 主题色常量
const colors = {
  bg: '#211D25',
  surface: '#251E2E',
  selection: '#322840',
  violet: '#A995F1',
  violetDim: '#7A6BAE',
  text: '#E4E4E4EB',
  textMuted: '#E4E4E48D',
  textDim: '#E4E4E442',
  border: '#E4E4E413',
}

const LangButtons = ({ langs, current, onChange }) => (
  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 12 }}>
    {langs.map((l) => (
      <button
        key={l}
        onClick={() => onChange(l)}
        style={{
          padding: '6px 14px',
          fontSize: 12,
          fontWeight: 500,
          background: current === l ? `linear-gradient(135deg, ${colors.violet}, ${colors.violetDim})` : colors.bg,
          color: current === l ? '#fff' : colors.textMuted,
          border: current === l ? 'none' : `1px solid ${colors.border}`,
          borderRadius: 6,
          cursor: 'pointer',
          transition: 'all 0.2s',
          boxShadow: current === l ? `0 2px 8px ${colors.violet}40` : 'none',
        }}
      >
        {l}
      </button>
    ))}
  </div>
)

const EditorPanel = ({ langs, samples, current }) => {
  const editorsRef = useRef({})

  return (
    <div
      style={{
        border: `1px solid ${colors.border}`,
        borderRadius: 8,
        overflow: 'hidden',
        background: colors.bg,
      }}
    >
      <div
        style={{
          padding: '8px 12px',
          background: colors.surface,
          borderBottom: `1px solid ${colors.border}`,
          fontSize: 12,
          color: colors.textDim,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <span style={{ display: 'flex', gap: 6 }}>
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#E34671' }} />
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#F1B467' }} />
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#3FA266' }} />
        </span>
        <span style={{ marginLeft: 8, color: colors.textMuted }}>{current}</span>
      </div>
      <div style={{ position: 'relative', height: 460 }}>
        {langs.map((lang) => (
          <div
            key={lang}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              visibility: current === lang ? 'visible' : 'hidden',
              zIndex: current === lang ? 1 : 0,
            }}
          >
            <Editor
              height="460px"
              language={lang}
              value={samples[lang]}
              theme="lesser"
              onMount={(editor) => {
                editorsRef.current[lang] = editor
              }}
              options={{
                fontSize: 13,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                padding: { top: 12 },
                readOnly: true,
                lineNumbers: 'on',
                renderLineHighlight: 'none',
                scrollbar: { vertical: 'hidden', horizontal: 'hidden' },
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function App() {
  const [leftLang, setLeftLang] = useState('dart')
  const [rightLang, setRightLang] = useState('typescript')

  return (
    <div style={{ padding: '32px 0', width: '80%', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: 40 }}>
        <h1 style={{ fontSize: 32, marginBottom: 8, color: colors.text, fontWeight: 600 }}>
          🌈 lesser
        </h1>
        <p style={{ fontSize: 16, color: colors.violet, marginBottom: 16 }}>
          A Pure Colorful Dark Theme
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>
          <a
            href="https://github.com/funcdfs/vscode-theme-lesser"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '8px 16px',
              background: colors.bg,
              color: colors.textMuted,
              border: `1px solid ${colors.border}`,
              borderRadius: 6,
              textDecoration: 'none',
              fontSize: 13,
              transition: 'all 0.2s',
            }}
          >
            ⭐ GitHub
          </a>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=funcdfs.lesser"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '8px 16px',
              background: `linear-gradient(135deg, ${colors.violet}, ${colors.violetDim})`,
              color: '#fff',
              border: 'none',
              borderRadius: 6,
              textDecoration: 'none',
              fontSize: 13,
              fontWeight: 500,
              boxShadow: `0 2px 8px ${colors.violet}40`,
            }}
          >
            📦 VS Code Marketplace
          </a>
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        <div>
          <LangButtons langs={leftLangs} current={leftLang} onChange={setLeftLang} />
          <EditorPanel langs={leftLangs} samples={leftSamples} current={leftLang} />
        </div>
        <div>
          <LangButtons langs={rightLangs} current={rightLang} onChange={setRightLang} />
          <EditorPanel langs={rightLangs} samples={rightSamples} current={rightLang} />
        </div>
      </div>

      <footer style={{ marginTop: 40, textAlign: 'center', color: colors.textDim, fontSize: 13 }}>
        Made with 💜 by{' '}
        <a
          href="https://github.com/funcdfs"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: colors.violet, textDecoration: 'none' }}
        >
          funcdfs
        </a>
      </footer>
    </div>
  )
}
