const ShowList = ({ location }) => {

  const { id, title, desc, created_at} = location.state
  return (
    <>  
      <h1>{title}</h1>
      <p>{desc}</p>
      <p>{created_at}</p>
    </>
  )
}

export default ShowList;