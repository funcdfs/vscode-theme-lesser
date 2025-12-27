import { useState, useRef, useEffect } from 'react'
import Editor, { loader } from '@monaco-editor/react'
import { lesserTheme } from './theme'
import { leftSamples, rightSamples } from './samples'

const leftLangs = Object.keys(leftSamples)
const rightLangs = Object.keys(rightSamples)

// 预先定义主题
loader.init().then((monaco) => {
  monaco.editor.defineTheme('lesser', lesserTheme)
})

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
          background: current === l ? 'linear-gradient(135deg, #9370DB, #7B68EE)' : '#1a171d',
          color: current === l ? '#fff' : '#abb2bf',
          border: current === l ? 'none' : '1px solid #3d434f',
          borderRadius: 6,
          cursor: 'pointer',
          transition: 'all 0.2s',
          boxShadow: current === l ? '0 2px 8px rgba(147, 112, 219, 0.3)' : 'none',
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
        border: '1px solid #3d434f',
        borderRadius: 8,
        overflow: 'hidden',
        background: '#1a171d',
      }}
    >
      <div
        style={{
          padding: '8px 12px',
          background: '#211d25',
          borderBottom: '1px solid #3d434f',
          fontSize: 12,
          color: '#636d83',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <span style={{ display: 'flex', gap: 6 }}>
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F56' }} />
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FFBD2E' }} />
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#27CA40' }} />
        </span>
        <span style={{ marginLeft: 8 }}>{current}</span>
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
        <h1 style={{ fontSize: 32, marginBottom: 8, color: '#eeeeee', fontWeight: 600 }}>
          🌈 lesser
        </h1>
        <p style={{ fontSize: 16, color: '#9370DB', marginBottom: 16 }}>
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
              background: '#1a171d',
              color: '#abb2bf',
              border: '1px solid #3d434f',
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
              background: 'linear-gradient(135deg, #9370DB, #7B68EE)',
              color: '#fff',
              border: 'none',
              borderRadius: 6,
              textDecoration: 'none',
              fontSize: 13,
              fontWeight: 500,
              boxShadow: '0 2px 8px rgba(147, 112, 219, 0.3)',
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

      <footer style={{ marginTop: 40, textAlign: 'center', color: '#636d83', fontSize: 13 }}>
        Made with 💜 by{' '}
        <a
          href="https://github.com/funcdfs"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#9370DB', textDecoration: 'none' }}
        >
          funcdfs
        </a>
      </footer>
    </div>
  )
}
