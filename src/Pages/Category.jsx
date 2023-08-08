import AddCategory from '../Components/AddCategory'
import CategoryTable from '../Components/CategoryTable';
import { useState } from 'react'

function Category(props) {

  const [OneItem, setOneItem] = useState({
    Id: 1,
    Name: "",
  });
  const [btnState, setBtnState] = useState("Add");
  const [maxId, setMaxId] = useState(getItemCount());

  function getItemCount(){
    console.log(props.AllData)
    if(props.AllData.length == 0)
      return 1
    else
      return Math.max(...props.AllData.map(o => o.Id)) + 1
  }
  
  function changeForm(event) {
    const {name, value} = event.target
    setOneItem(prevItem => ({
      ...prevItem,
      [name]: value
    }))
  }
  function handleUpdate(id) {
    var item = props.AllData.find(item => item.Id == id)
    setOneItem(item)
    setBtnState("Update")
  }
  async function handleDelete(id) {
    var filtered = props.AllData.filter(item => item.Id != id)
    props.setAllData(filtered)
  }

  async function resetForm() {
    setBtnState('Add')
    setOneItem({
      Id: 1,
      Name: "",
    })
  }

  async function submitForm(event) {
    event.preventDefault()
    if (btnState == "Add")
      {
        setMaxId(prev => prev + 1)
        props.setAllData(prevData => ([
          ...prevData,
          {
            ...OneItem,
            Id: maxId
          }
        ]))
      }
    else
      {
        var filtered = props.AllData.filter(item => item.Id != OneItem.Id)
        props.setAllData(([
          ...filtered,
          OneItem
        ]))
        resetForm()
      }
  }
  return (
    <div className='mt-3'>
      <h3 className='mb-3'>Categories</h3>
      
      <AddCategory handleForm={changeForm}
        handleSubmit={submitForm}
        resetForm={resetForm}
        btnText={btnState}
        data={OneItem}></AddCategory>
          
      <CategoryTable update={handleUpdate}
        delete={handleDelete}
        data={props.AllData}></CategoryTable>
    </div>
  )
}

export default Category
