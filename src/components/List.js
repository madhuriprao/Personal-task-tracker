import Item from "./Item";

const List = ({todo}) => {
    return(
        <div className="todo-list">
            {todo.map((item) => (
                <Item key ={item.id} todo={item}/> //creating a uniq key and passing the prop todo which will be equal to item
            ))}
        </div>
  )

}

export default List;