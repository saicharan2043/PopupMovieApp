import './index.css'

const MovieItem = props => {
  const {itemDetails, clickImage} = props
  const {thumbnailUrl, id} = itemDetails

  const clickTumbline = () => {
    clickImage(id)
  }

  return (
    <div className="item-container">
      <button type="button" className="button" onClick={clickTumbline}>
        <img src={thumbnailUrl} className="img" alt="" />
      </button>
    </div>
  )
}

export default MovieItem
