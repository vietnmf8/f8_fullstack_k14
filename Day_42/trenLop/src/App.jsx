
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {addNew, increase} from "./store";

function App() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.count)
  const products = useSelector((state) => state.products)

    console.log('products', products)


  const onClick = () => {
    dispatch(increase())
  }

  const onAdd = () => {
      dispatch(addNew({
          id: 1,
          name: 'test'
      }))
  }

  const onDelete = (id) => {

  }

  return (
    <>
      <h1>Count: {count}</h1>
      <button
        onClick={onClick}
      >Tăng</button>

      <button onClick={onAdd}>
          Add New
      </button>

        <ul>
            {
                products.map(product => {
                    return (
                        <li key={product.id}>
                            <span>{product.name}</span>
                            <button onClick={() => onDelete(product.id)}>Del</button>
                        </li>
                    )
                })
            }
        </ul>
    </>
  )
}

export default App
