export default function (lists) {
    lists = JSON.parse(JSON.stringify(lists))

    return {
        comment: '',
        answers: lists.reduce((lists, list) => {
            list.options = list.options.reduce((options, option) => {
                if (option.selected) {
                    delete option.isDefault
                    delete option.selected
                    options.push(option)
                }
                return options
            }, [])

            if (list.options.length) {
                lists.push(list)
            }
            return lists
        }, [])
    }
}
