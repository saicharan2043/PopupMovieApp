import {IoMdClose} from 'react-icons/io'

import Popup from 'reactjs-popup'

import ReactPlayer from 'react-player'

import './index.css'

const MovieItem = props => {
  const {itemDetails, clickImage} = props
  const {thumbnailUrl, id, videoUrl} = itemDetails

  return (
    <div className="container-popup">
      <Popup
        modal
        position="center center"
        trigger={
          <button type="button" className="button">
            <img src={thumbnailUrl} className="img" alt="thumbnail" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <>
            <div className="pop-up-container">
              <button
                type="button"
                className="icon-button"
                onClick={() => close()}
                data-testid="closeButton"
              >
                <IoMdClose className="icon" />
              </button>
              <ReactPlayer
                url={videoUrl}
                controls="true"
                width="640px"
                height="360px"
              />
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
