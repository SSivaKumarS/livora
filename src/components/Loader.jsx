import './Loader.css'

function Loader({ message = "Finding your perfect match..." }) {
  return (
    <div className="loader-wrap">
      <div className="loader">
        <div className="loader__ring" />
        <div className="loader__ring loader__ring--2" />
        <div className="loader__dot" />
      </div>
      <p className="loader__message">{message}</p>
    </div>
  )
}

export default Loader
