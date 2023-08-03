export default {
    error: (text: string) => {
        return {
            text,
            success: false
        }
    },
    
    success: (text: string, data) => {
        return {
            text,
            success: true,
            data
        }
    }
}