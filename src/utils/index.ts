export const response = {
    error: (msg: string) => {
        return {
            msg,
            success: false
        }
    },
    
    success: (msg: string, data) => {
        return {
            msg,
            success: true,
            data
        }
    }
}

export class error extends Error {
    status: number

    constructor (message: string, statusCode?: number) {
        super(message)

        this.name = this.constructor.name
        this.status = statusCode || 400
    }
}
