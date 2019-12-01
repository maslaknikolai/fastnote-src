export default function (store) {
  function remove(note) {
    store.commit('REMOVE_NOTE', note)
  }

  return {
    remove
  }
}
