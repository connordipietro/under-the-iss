import ISSIndex from ''

const container = (props) => {
  //console.log(props)
  return (
    <div className="container col-md-8 text-center">
      <div className='container'>{props.children}</div>
    </div>
  )
};

export default container;