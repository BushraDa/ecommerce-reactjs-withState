
function CategoryTable(props) {

    const elements = props.data.map(element => {
                        return (
                            <tr key={element.id}>
                                <th scope="row" >{element.Id}</th>
                                <td>{element.Name}</td>
                                <td><button className="btn btn-warning"
                                    onClick={() => props.update(element.Id)}>تعديل</button></td>
                                <td><button className="btn btn-danger"
                                    onClick={() => props.delete(element.Id)}>حذف</button></td>
                            </tr>
                        )
                    })
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">#</th>
                    <th scope="col">#</th>
                </tr>
            </thead>
            <tbody>
                {elements}
            </tbody>
        </table>
    )
}

export default CategoryTable