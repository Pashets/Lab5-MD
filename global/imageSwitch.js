export const imageSwitch = (key) => {
    switch (key) {
        case 'Image_01.png':
            return require('../assets/images/Image_01.png')
        case 'Image_02.png':
            return require('../assets/images/Image_02.png')
        case 'Image_03.png':
            return require('../assets/images/Image_03.png')
        case 'Image_05.png':
            return require('../assets/images/Image_05.png')
        case 'Image_06.png':
            return require('../assets/images/Image_06.png')
        case 'Image_07.png':
            return require('../assets/images/Image_07.png')
        case 'Image_08.png':
            return require('../assets/images/Image_08.png')
        case 'Image_10.png':
            return require('../assets/images/Image_10.png')
            

        default:
            return require('../assets/images/no-image.png')
    }
}
