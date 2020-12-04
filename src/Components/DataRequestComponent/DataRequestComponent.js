import React from 'react'
import Preloader from '../Preloader/Preloader'

function DataRequestComponent({ isReady, smallDataUrl, bigDataUrl, dataRequestHandler}) {

  return (
    <div>
      <button 
        className={ !isReady ? "waves-effect waves-light btn red lighten-2" : "waves-effect waves-light btn green disabled" }   
        style={{ marginRight: `15px` }}     
        onClick={ () => { dataRequestHandler(smallDataUrl) } }
      >Small data</button>
      <button 
        className={ !isReady ? "waves-effect waves-light btn red lighten-2" : "waves-effect waves-light btn purple disabled" }
        onClick={ () => { dataRequestHandler(bigDataUrl) } }
      >Big data</button>
      { isReady === false ? <Preloader /> : null }
    </div>
  )
}

export default DataRequestComponent
