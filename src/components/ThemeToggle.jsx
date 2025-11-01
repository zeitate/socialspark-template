import React from 'react'

function getSystemPreference(){
  if(typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function ThemeToggle(){
  const [theme, setTheme] = React.useState(()=> localStorage.getItem('theme') || 'system')

  React.useEffect(()=>{
    const root = document.documentElement
    const actual = theme === 'system' ? getSystemPreference() : theme
    root.classList.toggle('dark', actual === 'dark')
    root.classList.toggle('light', actual === 'light')
    if(theme === 'system') localStorage.removeItem('theme')
    else localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="flex items-center gap-2 text-sm">
      <button onClick={()=> setTheme(theme==='dark' ? 'light' : 'dark')} className="btn btn-ghost" aria-label="Toggle theme">
        { (theme==='dark' || (theme==='system' && getSystemPreference()==='dark')) ? '🌙 Dark' : '☀️ Light' }
      </button>
    </div>
  )
}
