import useRemoveNote from '@/composables/use-remove-note'

describe('@/composables/use', () => {
  it('"remove" method should call "REMOVE_NOTE" store commit with note as argument', () => {
    const note = {
      id: Math.random()
    }
    const store = {
      commit: jest.fn()
    }

    const { remove } = useRemoveNote(store)
    remove(note)

    expect(store.commit).toBeCalledWith('REMOVE_NOTE', note)
  })
})
