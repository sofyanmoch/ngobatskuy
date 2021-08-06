
export const LogInNavigation = 'LogIn'
export const RegisterNavigation = 'Register'
export const GetStartedNavigation = 'GetStarted'
export const SplashNavigation = 'Splash'
export const UploadPhotoNavigation = 'UploadPhoto'

const mainColors = {
    green1: '#0BCAD4',
    dark1: '#112340',
    grey1: '#7D8797'
}

export const colors = {
    primary: mainColors.green1,
    secondary: mainColors.dark1,
    black: 'black',
    white: 'white',
    text: {
        default: mainColors.dark1,
        secondary: mainColors.grey1
    },
    button: {
        primary: {
            background: mainColors.green1,
            text: 'white'
        },
        secondary: {
            background: 'white',
            text: mainColors.dark1
        }
    }
}
