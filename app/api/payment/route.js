import SSLCommerzPayment from 'sslcommerz-lts';

export default async function handler(req, res) {

    if (req.method === 'POST') {
        const { amount, customer_name, customer_email, customer_address, customer_phone, product_name } = req.body;

        console.log(amount, customer_address,customer_email,'console from server')
    }


    //     const paymentData = {
    //         store_id: process.env.SSLCOMMERZ_STORE_ID,
    //         store_passwd: process.env.SSLCOMMERZ_STORE_PASSWORD,
    //         total_amount: amount,
    //         currency: 'BDT',
    //         tran_id: 'unique_transaction_id', // Generate a unique transaction ID
    //         success_url: 'payment/success',
    //         fail_url: 'payment/success',
    //         cancel_url: 'payment/success',
    //         ipn_url: 'payment/success',
    //         product_profile: 'general',
    //         product_name,
    //         cus_name: customer_name,
    //         cus_email: customer_email,
    //         cus_add1: customer_address,
    //         cus_phone: customer_phone,
    //     };

    //     const sslcz = new SSLCommerzPayment(process.env.SSLCOMMERZ_STORE_ID, process.env.SSLCOMMERZ_STORE_PASSWORD, false); // false for sandbox mode
    //     sslcz.init(paymentData)
    //         .then(data => {
    //             if (data.GatewayPageURL) {
    //                 res.status(200).json({ url: data.GatewayPageURL });
    //             } else {
    //                 res.status(400).json({ error: 'Failed to initiate payment' });
    //             }
    //         })
    //         .catch(err => {
    //             res.status(500).json({ error: err.message });
    //         });

    // } else {
    //     res.status(405).json({ error: 'Method not allowed' });
    // }


};
