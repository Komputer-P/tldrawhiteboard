import React from 'react'
import ReactDOM from 'react-dom'
//import App from './app'
import YjsTldraw from './yjs-tldraw/src/yjs-tldraw'
import YorkieTldraw from '~yorkie-tldraw/yorkie-tldraw'
import { HashRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <YorkieTldraw />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
