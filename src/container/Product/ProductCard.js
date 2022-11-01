import './Product.scss'

function CardList(props) {
  return (
    <div className="card pt-2" style={{ width: '18rem', height: '300px' }}>
      <img
        style={{ width: '70px' }}
        className="card-img mx-auto d-block"
        src={props.imgUrl}
        alt="card pix"
      />
      <div className="card-body">
        <h5 className="card-title text-center">{props.title}</h5>
        <p className="card-text text-start">{props.text}</p>
      </div>
    </div>
  )
}

export default CardList
