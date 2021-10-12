import { useState, useEffect } from 'react';
import { ListConsumer } from '../../providers/ListProvider';

const ListForm = ({ addList, title, desc, id, updateList }) => {
  const [list, setList] = useState({ title: "", desc: "" })

  useEffect( () => {
    if (id) {
      setList({ title, desc })
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateList(id, list)
    } else {
      addList(list)
    }
    setList({ title: "", desc: "" })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          name="title"
          value={list.title} 
          onChange={(e) => setList({ ...list, title: e.target.value })}
          required
          placeholder="List title"
        />
        <textarea
          name="desc"
          value={list.desc}
          onChange={(e) => setList({...list, desc: e.target.value })}
          placeholder="Description"
        >
        </textarea>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

const ConnectedListForm = (props) => (
  <ListConsumer>
    { value => <ListForm {...props} {...value} />}
  </ListConsumer>
)


export default ConnectedListForm;