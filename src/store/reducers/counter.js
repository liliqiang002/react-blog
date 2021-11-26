const initData = {
  num: 0
}

export default function counter(state = initData, action) {
  if (action.type === 'update_counter') {
    state = { num: action.data } 
  }
  return state
}
