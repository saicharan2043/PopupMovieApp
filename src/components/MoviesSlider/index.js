import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesList, clickImage} = props

  const setting = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 4,
  }

  return (
    <div className="slide-container" data-testid="planets">
      <Slider {...setting}>
        {moviesList.map(echValue => (
          <MovieItem
            itemDetails={echValue}
            key={echValue.id}
            clickImage={clickImage}
          />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
