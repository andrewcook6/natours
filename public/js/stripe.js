import axios from 'axios'
import { showAlert } from './alerts'

export const bookTour = async tourId => {
  const stripe = Stripe('pk_test_51MHuW9DBcq2WcKWfzGhp36QWdJ1AMDWiCXWWjJhcazcXRLNJuHTLRM6wPAgNl7w69gIwDdzrCpgzW8rRIarcrydc00nUvI2lSR')
  try {
    // 1. Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`)
    
    // 2. Create checkout form + charge credit card
    window.location.replace(session.data.session.url);
  } catch (err) {
    showAlert('error', err)
  }

}
