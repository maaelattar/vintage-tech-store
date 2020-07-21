import axios from 'axios';
import url from '../utils/URL';
async function submitOrder({ name, total, items, stripeTokenId, userToken }) {
	const response = await axios.post(
		`${url}/orders`,
		{ name, total, items, stripeTokenId },
		{ headers: { Authorization: `Bearer ${userToken}` } }
	);
	return response;
}
export default submitOrder;
