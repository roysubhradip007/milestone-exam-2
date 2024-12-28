
function todoReducer(state, action) {
    if(action.type == 'add_todo'){
        const { todoData } = action.payload;
        return [...state, {id: state.length + 1, todoData, status: 'pending'}];
    }
    else if(action.type == 'edit_status') {
        const { todo } = action.payload;
            return state.map((t) => 
                t.id === todo.id 
                    ? { ...t, status: t.status === 'pending' ? 'completed' : 'pending' }
                    : t
            );
    }
    else if (action.type === 'remove_todo') {
        const { todo } = action.payload;
        const updatedList = state.filter((t) => t.id !== todo.id);

        const newList = updatedList.map((todo, index) => ({
            ...todo,
            id: index + 1,
        }));

        return newList;
    } 
    else{
        return state;
    }
}

export default todoReducer;