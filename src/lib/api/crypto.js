import crypto from 'crypto'

export default function(secret, _id) {
  const hash = crypto.createHmac('sha256', secret)
                     .update(_id)
                     .digest('hex');
  console.log(hash);
}
