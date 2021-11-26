const initData = {
  userInfo: null
}

export default function user(state = initData, action) {
  if (action.type === 'set_userInfo') {
    state.userInfo = action.data
  }
  return state
}