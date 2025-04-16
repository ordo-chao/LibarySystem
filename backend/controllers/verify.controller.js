const PAYSTACK_SECRET_KEY = "sk_test_34b0be9c1bd3d7a21bfcae0c47f41eb9ef529d9d";

const verify = async (req, res) => {
  const { reference } = req.body;
  console.log(reference);
  try {
    const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
    });
  
    const result = await response.json();
  
    const status = result.data.status;
    console.log(status);
    res.json({ status });
  
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Verification failed" });
  }  
}


module.exports = verify