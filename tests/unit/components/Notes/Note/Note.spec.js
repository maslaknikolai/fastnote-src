import { shallowMount } from '@vue/test-utils'
import Note from '@/components/Notes/Note/Note.vue'

describe('@/components/Notes/Note/Note.vue', () => {
  it('should call remove method with note as argument store method on remove button "confirm" event', () => {
    const note = {
      comment: '',
      answers: [
        {
          title: 'Question 1',
          required: false,
          multiple: true,
          options: [
            { color: '#fff', name: 'Option 1' },
            { color: '#fff', name: 'Option 1' }
          ]
        }
      ]
    }

    const wrapper = shallowMount(Note, {
      propsData: { note }
    })

    wrapper.vm.remove = jest.fn();

    wrapper.find({ ref: 'removeBtn' }).vm.$emit('confirm')

    expect(wrapper.vm.remove).toHaveBeenCalledWith(note);
  })
})
