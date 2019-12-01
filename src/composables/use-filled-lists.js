const useFilledLists = {
    lists: [],
    _onAddCallbacks: [],
    noteAdded() {
        this._onAddCallbacks.forEach(callback => callback())
    }
}

Object.defineProperty(useFilledLists, 'onNoteAdded', {
    get() {
        return this._onAddCallbacks
    },
    set(callback) {
        this._onAddCallbacks.push(callback)
    }
});

export default useFilledLists
