export function setTechnology(text) {
    return {
        type: 'SET_TECHNOLOGY',
        payload: {
            tech: text
        }
    }
}