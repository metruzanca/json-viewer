import React, { useState } from 'react'

// Data from https://randomuser.me/api/?results=4
import dummyData from '../data.json'
import Renderer from './Renderer';

export default function App() {
  const [json, setJson] = useState<any>(dummyData)
  const [isValid, setIsValid] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

  function handleChange({ target }: React.ChangeEvent<HTMLTextAreaElement>) {
    let next;
    try {
      next = JSON.parse(target.value)
      // TODO optimizing. Updating full tree will be more expensive.
      // Might be less costly to diff the tree and perform changes. 
      setJson(next)
      setIsValid(true)
    } catch (error) {
      setIsValid(false)
    }
  }

  function handleChecked({ target }: React.ChangeEvent<HTMLInputElement>) {
    setIsOpen(target.checked)
  }
  

  return (
    <div>
      <div className='flex justify-between'>
        <h1>Ugly Json Viewer</h1>
        <div className='pr-1'>
          <input id='Expand All' type="checkbox" onChange={handleChecked} />
          <label htmlFor="Expand All">Expand All</label>
        </div>
      </div>
      <div className='h-[30vh] relative'>
        {/* TODO replace with https://github.com/microsoft/monaco-editor */}
        <textarea
          id="json-input"
          defaultValue={JSON.stringify(dummyData, null, 2)}
          onChange={handleChange}
        />
        {!isValid && (
          <label
            htmlFor="json-input"
            className='text-red-400'
          >Invalid JSON</label>
        )}
      </div>
      <main className='h-[66vh] overflow-x-auto'>
        <pre>
          <Renderer json={json} open={isOpen}/>
        </pre>
      </main>
    </div>
  )
}