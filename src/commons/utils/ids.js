export const getIdFromURL = (url) => {
    const splitted = url.split("/")
    const idPosition = splitted.length - 2
    return splitted[idPosition]
} 