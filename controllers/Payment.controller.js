const mercadoPago = require('mercadoPago')

const items = [{
    id: '1234',
    title: 'curso react',
    description: 'curso de react desde cero',
    picture_ulr: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    quantity: 1,
    currency_id: 'CLP',
    unit_price: 10000
}]

const createPayment = async (req, res) => {
    const {title, unit_price, quantity, currency_id} = res.body
    try {
        mercadoPago.configure({
            access_token: "TEST-8417679951600710-091220-ffef1dbcd9f32c155602251850f24639-240640965"
        })
        const preference = {
            items,
            back_urls: {
                success:"http://localhost:5173/success-purchase",
                pending:"http://localhost:4000/payment/payment-pending",
                failure:"http://localhost:4000/payment/payment-failed"
            }
        }
        const respuesta = await mercadoPago.preferences.create(preference)
        return res.status(200).json({
            message: "ok",
            detail: respuesta
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            error
        })
    }
}

const paymentApproved = async (req, res) => {
    return res.status(200).json({
        message: "ok",
        detail: req.query
    })
}

const paymentPending = async (req, res) => {
    return res.status(200).json({
        message: "ok",
        detail: req.query
    })
}

const paymentFailed = async (req, res) => {
    return res.status(200).json({
        message: "ok",
        detail: req.query
    })
}


module.exports = {
    createPayment,
    paymentApproved,
    paymentPending,
    paymentFailed
}