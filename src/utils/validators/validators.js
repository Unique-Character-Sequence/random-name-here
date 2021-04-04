export const required = value => (value ? undefined : 'Required')

export const maxSymAmount = max => value => value.length <= max ? undefined : `Should be less than ${max} symbols`

export const asdasd = {
    required (value) {
        debugger
        return value ? undefined : 'Required'
    }
}