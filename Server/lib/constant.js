module.exports = {
    Response: {
        auth: {
            success: {
                status: 200,
                success: true,
                message: "Authentication Successful"
            },
            error: {
                status: 401,
                success: false,
                message: "Authentication Failed"
            }
        },
        get: {
            success: {
                status: 200,
                success: true,
                message: "Object Found",
                data: null
            },
            error: {
                stauts: 404,
                success: false,
                message: "Object Not Found"
            }
        },
        post: {
            success: {
                status: 201,
                success: true,
                message: "Object Created"
            },
            error: {
                status: 500,
                success: false,
                message: "Operation Failed"
            }
        }
    }
}