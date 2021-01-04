import CreateDataContext from './CreateDataContext';
import Yelp from '../api/yelpApi';

const AppointmentReducer = (state, action) => {
  switch (action.type) {
    case 'get_business':
      return {
        ...state, businessInfo: action.payload
      };
    case 'get_local_business':
      return {
        ...state, localBusinesses: action.payload
      };
    case 'set_appointment_info':
      return {
        ...state, dateTime: action.payload.date, appointmentReason: action.payload.reason
      };
    case 'set_payment_info':
      return {
        ...state, cardInfo: action.payload
      };
    case 'set_address_info':
      return {
        ...state, address: action.payload
      };
    default:
      return state;
  }
};

const getBusiness = (dispatch) => async (id) => {
  try {
    const response = await Yelp.get(`/${id}`);
    dispatch({ type: 'get_business', payload: response.data });
  } catch(err) {
    console.log(err);
  }
};

const getLocalBusiness = (dispatch) => async (lat, long) => {
  try {
    const response = await Yelp.get('/search', {
      params: {
        limit: 20,
        term: 'plumb*',
        latitude: lat,
        longitude: long,
        radius: 24000
      }
    });
    dispatch({ type: 'get_local_business', payload: response.data.businesses });
  } catch (err) {
    console.log(err);
  }
};

const setAppointmentInfo = (dispatch) => (date, reason) => {
  dispatch({ type: 'set_appointment_info', payload: {date, reason}});
};

const setPaymentInfo = (dispatch) => async (cardInfo) => {
  try {
    const response = await mongoApi.post('/creditCard', {cardInfo})
    dispatch({type: 'set_payment_info', payload: cardInfo});
  } catch (err) {
    console.log(err)
  }
};

const setAddressInfo = (dispatch) =>  async (address) => {
  try {
    const response = await mongoApi.post('/address', {address})
    dispatch({type: 'set_address_info', payload: address});
  } catch (err) {
    console.log(err)
  }
};


export const { Provider, Context } = createDataContext(
  appointmentReducer,
  { getBusiness, getLocalBusiness, setAppointmentInfo, setPaymentInfo, setAddressInfo },
  {
    localBusinesses: [],
    dateTime: 0,
    businessInfo: {},
    appointmentReason: '',
    address: {
      line1: '',
      line2: '',
      zip: 00000,
      state: '',
      city: ''
    },
    cardInfo: {
      userInfo: {
        firstName: '',
        middleInitial: '',
        lastName: ''
      },
      number: 0,
      expDate: 0000,
      name: '',
      billingAddress: {
        line1: '',
        line2: '',
        zip: 00000,
        state: '',
        city: ''
      }
    }
  }
);