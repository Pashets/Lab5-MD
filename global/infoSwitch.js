export const infoSwitch = (key) => {
    switch (key) {
        case '9780321856715':
            return require('../assets/books-information/9780321856715.json')
        case '9780321862969':
            return require('../assets/books-information/9780321862969.json')
        case '9781118841471':
            return require('../assets/books-information/9781118841471.json')
        case '9781430236054':
            return require('../assets/books-information/9781430236054.json')
        case '9781430237105':
            return require('../assets/books-information/9781430237105.json')
        case '9781430238072':
            return require('../assets/books-information/9781430238072.json')
        case '9781430245124':
            return require('../assets/books-information/9781430245124.json')
        case '9781430260226':
            return require('../assets/books-information/9781430260226.json')
        case '9781449308360':
            return require('../assets/books-information/9781449308360.json')
        case '9781449342753':
            return require('../assets/books-information/9781449342753.json')


        default:
            return require('../assets/books-information/default.json')
    }
}