import React, { useState } from 'react'
// CSS
import './App.css'
// JSX
import FlipCard from 'react-png-flipcard'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { obsidian as syntaxStyle } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const example = () => {
  const [theme, setTheme] = useState('light')
  const [flip, setFlip] = useState('false')
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
    backClass = 'BackLight Card'
    frontClass = 'FrontLight Card'
  }
  if (theme === 'dark') {
    bodyTheme = 'App DarkTheme'
    backClass = 'BackDark Card'
    frontClass = 'FrontDark Card'
  }

  const firstCode = `
  <FlipCard
  backClass={backClass}
  frontClass={frontClass}
  margin={20}
  width={300}
  height={300}
  borderRadius={50}
  direction='horizontal'
  manual
  flip={flip}
  front={
    <div className='CardContent'>
      <img
        src='https://images.unsplash.com/photo-1501509497947-782640bc1412?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
        alt='Miami'
        className='CardImage'
      />
      <h3>Miami</h3>
      <div className='HoverInfo' onClick={() => setFlip(true)}>
        <p style={{ margin: 5 }}>Click to learn more</p>
        <i className='fas fa-arrow-right' style={{ marginTop: 7 }} />
      </div>
    </div>
  }
  back={
    <div className='CardContent'>
      <ul style={{ margin: 15, marginLeft: 5 }}>
        <li>Miami, officially the City of Miami</li>
        <li>
          is the cultural, economic and financial center of South Florida.
        </li>
        <li>
          Miami is the seat of Miami-Dade County, the most populous county
          in Florida.
        </li>
      </ul>
      <div
        className='HoverInfo'
        onClick={() => setFlip(false)}
        style={{ marginLeft: 15 }}
      >
        <p style={{ margin: 5 }}>Go back</p>
        <i className='fas fa-arrow-left' style={{ marginTop: 7 }} />
      </div>
    </div>
  }
/>
`
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
      <h2>Horizontal</h2>
      <FlipCard
        front={
          <div className='CardContent'>
            <img
              src='https://images.unsplash.com/photo-1419407118704-43ccfda4036d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80'
              alt='San francisco'
              className='CardImage'
            />
            <h3>San francisco</h3>
            <div className='HoverInfo'>
              <p style={{ margin: 5 }}>Hover to learn more</p>
              <i className='fas fa-arrow-right' style={{ marginTop: 7 }} />
            </div>
          </div>
        }
        back={
          <div className='CardContent'>
            <ul style={{ margin: 15, marginLeft: 5 }}>
              <li>San Francisco, in northern California,</li>
              <li>
                is a hilly city on the tip of a peninsula surrounded by the
                Pacific Ocean and San Francisco Bay
              </li>
              <li>
                It's known for its year-round fog, iconic Golden Gate Bridge,
                cable cars and colorful Victorian houses.
              </li>
              <li>
                In the bay sits Alcatraz Island, site of the notorious former
                prison.
              </li>
            </ul>
          </div>
        }
        backClass={backClass}
        frontClass={frontClass}
        margin={20}
        width={300}
        height={300}
        borderRadius={50}
        direction='horizontal'
      />
      <br />
      <hr />
      <h2>Vertical</h2>
      <FlipCard
        front={
          <div className='CardContent'>
            <img
              src='https://images.unsplash.com/photo-1551734044-8cf6396c8639?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'
              alt='New York'
              className='CardImage'
            />
            <h3>New York</h3>
            <div className='HoverInfo'>
              <p style={{ margin: 5 }}>Hover to learn more</p>
              <i className='fas fa-arrow-right' style={{ marginTop: 7 }} />
            </div>
          </div>
        }
        back={
          <div className='CardContent'>
            <ul style={{ margin: 15, marginLeft: 5 }}>
              <li>
                New York City comprises 5 boroughs sitting where the Hudson
                River meets the Atlantic Ocean
              </li>
              <li>
                At its core is Manhattan, a densely populated borough that’s
                among the world’s major commercial, financial and cultural
                centers
              </li>
              <li>
                Its iconic sites include skyscrapers such as the Empire State
                Building and sprawling Central Park
              </li>
            </ul>
          </div>
        }
        backClass={backClass}
        frontClass={frontClass}
        margin={20}
        width={300}
        height={300}
        borderRadius={50}
        direction='vertical'
      />
      <br />
      <hr />
      <h2>Manual</h2>
      <FlipCard
        front={
          <div className='CardContent'>
            <img
              src='https://images.unsplash.com/photo-1501509497947-782640bc1412?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
              alt='Miami'
              className='CardImage'
            />
            <h3>Miami</h3>
            <div className='HoverInfo' onClick={() => setFlip(true)}>
              <p style={{ margin: 5 }}>Click here to learn more</p>
              <i className='fas fa-arrow-right' style={{ marginTop: 7 }} />
            </div>
          </div>
        }
        back={
          <div className='CardContent'>
            <ul style={{ margin: 15, marginLeft: 5 }}>
              <li>Miami, officially the City of Miami</li>
              <li>
                is the cultural, economic and financial center of South Florida.
              </li>
              <li>
                Miami is the seat of Miami-Dade County, the most populous county
                in Florida.
              </li>
            </ul>
            <div
              className='HoverInfo'
              onClick={() => setFlip(false)}
              style={{ marginLeft: 15 }}
            >
              <p style={{ margin: 5 }}>Go back</p>
              <i className='fas fa-arrow-left' style={{ marginTop: 7 }} />
            </div>
          </div>
        }
        backClass={backClass}
        frontClass={frontClass}
        margin={20}
        width={300}
        height={300}
        borderRadius={50}
        direction='horizontal'
        manual
        flip={flip}
      />
      <br />
      <hr />
      <h2>Code example</h2>
      <div className='CodeBlock'>
        <SyntaxHighlighter language='javascript' style={syntaxStyle}>
          {firstCode}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default example
