import React, { useState } from 'react'
// CSS
import './App.css'
// JSX
import FlipCard from 'react-png-flipcard'
// import Tooltip from 'react-png-tooltip'
// import SyntaxHighlighter from 'react-syntax-highlighter'
// import { obsidian as syntaxStyle } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const example = () => {
  const [theme, setTheme] = useState('light')
  let bodyTheme = 'App LightTheme'
  let backClass = 'BackLight'
  let frontClass = 'FrontLight'

  const changeThemeHandler = () => {
    if (theme === 'light') {
      return setTheme('dark')
    } else {
      return setTheme('light')
    }
  }

  if (theme === 'light') {
    bodyTheme = 'App LightTheme'
    backClass = 'BackLight'
    frontClass = 'FrontLight'
  }
  if (theme === 'dark') {
    bodyTheme = 'App DarkTheme'
    backClass = 'BackDark'
    frontClass = 'FrontDark'
  }

  return (
    <div className={bodyTheme}>
      <div className='ThemeHandler'>
        <button className='Button' onClick={changeThemeHandler}>
          Change Theme
        </button>
      </div>
      <div className='Title'>
        <div style={{ maxWidth: '600px' }}>
          <h1>React PNG FlipCard </h1>
        </div>
        <br />
      </div>
      <br />
      <hr />
      <div>asd</div>
      <FlipCard
        front={<div>FRONT</div>}
        back={<div>BACK</div>}
        backClass={backClass}
        frontClass={frontClass}
        width={300}
        height={300}
        borderRadius={50}
      />
    </div>
  )
}

export default example
