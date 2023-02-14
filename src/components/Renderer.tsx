import { FC } from "react";
import Leaf from "./Leaf";

type RendererProps = { json: any; name?: string; open?: boolean}

/* 
  Might be able to refactor this to be iterative,
  but for once, recursion seems to make it easier
*/

const Renderer: FC<RendererProps> = ({ json, name, open }) => {
  if (Array.isArray(json)) {
    return (
      <>
        <details open={open}>
          <summary>{'Array: ['}</summary>
          <div className='ml-4'>
            {json.map(item => (
              <div>
                <Renderer json={item} open={open} />
              </div>
            ))}
          </div>
        </details>
        {']'}
      </>
    )
  }

  // typeof null is apparently object
  if (typeof json === 'object' && json !== null) {
    return (
      <>
        <details open={open}>
          <>
            <summary>
              {name ? (
                <span className="text-sky-300">"{name}"</span>
              ) : (
                'Object'
              )}
              {': {'}
              </summary>
            <div className='ml-4'>
              {Object.entries(json).map(([k, v]) => (
                <div>
                  <Renderer json={v} name={k} key={k} open={open} />
                </div>
              ))}
            </div>
          </>
        </details>
        {'}'}
      </>
    )
  }

  return <Leaf value={json} name={name} key={json}/>
}

export default Renderer;