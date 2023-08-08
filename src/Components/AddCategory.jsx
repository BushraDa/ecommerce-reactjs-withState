
function AddCategory(props) {

  return (
    <form className="row" method="POST">
      <div className="mb-3 col-md-6">
        <input className="form-control" id="catName" placeholder="Name"
          name="Name" onChange={props.handleForm}
          value={props.data.Name} />
      </div>
      <div className="mb-3 col-md-6 align-self-end">
        <button className="btn btn-primary m-1" onClick={props.handleSubmit}>{props.btnText}</button>
        <button className="btn btn-secondary m-1" type="reset" onClick={props.resetForm}>Reset</button>
      </div>
    </form>
  )
}

export default AddCategory