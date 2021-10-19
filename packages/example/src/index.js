import ReactDOM from 'react-dom'
import App from "./App";
import monitor from '@monitor/react'
monitor()
ReactDOM.render(<App/>,document.querySelector('#root'))