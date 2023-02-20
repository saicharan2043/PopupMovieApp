import {IoMdClose} from 'react-icons/io'

import Popup from 'reactjs-popup'

import ReactPlayer from 'react-player'

import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const videoUrl = 'https://www.youtube.com/watch?v=odM92ap8_c0'

  const actionMovieList = moviesList.filter(
    echValue => echValue.categoryId === 'ACTION',
  )
  const comedyMovieList = moviesList.filter(
    echValue => echValue.categoryId === 'COMEDY',
  )

  // const popupBtn = (filterVideo) =>{

  // }

  const clickImage = id => {
    const filterVideo = moviesList.filter(echValue => echValue.id === id)
    // popupBtn(filterVideo)
  }

  return (
    <div className="bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        className="prime-video-thumbline"
        alt=""
      />
      <h1 className="action-movie-text">Action Movies</h1>
      <MoviesSlider moviesList={actionMovieList} clickImage={clickImage} />
      <h1 className="action-movie-text">Comedy Movies</h1>
      <MoviesSlider moviesList={comedyMovieList} clickImage={clickImage} />

      <div className="container-popup">
        <Popup
          trigger={
            <button type="button" className="trigger-button">
              popup
            </button>
          }
        >
          {close => (
            <>
              <div className="pop-up-container">
                <button
                  type="button"
                  className="button"
                  onClick={() => close()}
                >
                  <IoMdClose className="icon" />
                </button>
                <ReactPlayer url={videoUrl} controls="true" />
              </div>
            </>
          )}
        </Popup>
      </div>
    </div>
  )
}

export default PrimeVideo
