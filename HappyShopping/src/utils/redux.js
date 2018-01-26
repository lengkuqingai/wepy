import { createStore } from 'redux'
const provider = (store)=>(mapStateToProps)=>(render)=>{
    const renderWrapper = () => {
        const props = mapStateToProps(store.getState());
        render(props)
    }
    store.subscribe(renderWrapper)
    return renderWrapper
}
  //创建reducer
  const appReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_HEADER':
        return Object.assign(state, { header: action.header })
      case 'UPDATE_BODY':
        return Object.assign(state, { body: action.body })
      case 'UPDATE_FOOTER':
        return Object.assign(state, { footer: action.footer })
      default:
        return state
    }
  }
  //创建store库,并初始化
  const store = createStore(appReducer, {
    header: 'Header',
    body: 'Bodys',
    footer: 'Footer'
  })
  const connect = provider(store);
  export default {
      store,
      connect
  }