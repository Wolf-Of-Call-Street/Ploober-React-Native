import CreateDataContext from './CreateDataContext';
import Yelp from '../api/yelpApi';
import userApi from '../api/userApi';

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
        ...state, cardInfo: [...state.cardInfo, action.payload]
      };
    case 'set_address_info':
      return {
        ...state, addresses: [...state.address, action.payload]
      };
    case 'set_current_payment':
      return {
        ...state, currentCardInfo: action.payload
      };
    case 'set_current_address':
      return {
        ...state, currentAddress: action.payload
      };
    case 'submit_order':
      return {
        ...state, history: [...state.history, action.payload]
      };
    case 'get_history':
      return {
        ...state, history: action.payload
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
        term: 'plumb*',
        latitude: lat,
        longitude: long,
        limit: 10
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
    await mongoApi.post('/creditCard', {cardInfo})
    dispatch({type: 'set_payment_info', payload: cardInfo});
  } catch (err) {
    console.log(err)
  }
};

const setAddressInfo = (dispatch) =>  async (address) => {
  try {
    await mongoApi.post('/address', {address})
    dispatch({type: 'set_address_info', payload: address});
  } catch (err) {
    console.log(err)
  }
};

const getPaymentInfo = (dispatch) => async (userId) => {
  try {
    const response = await mongoApi.get(`/creditCard/${userId}`);
    dispatch({type: 'set_current_payment', payload: response.data});
  } catch (err) {
    console.log(err);
  }
};

const setCurrentAddress = (dispatch) => async (userId) => {
  try {
    const response = await mongoApi.get(`/address/${userId}`);
    dispatch({type: 'set_current_address', payload: response.data});
  } catch (err) {
    console.log(err);
  }
};

const submitOrder = (dispatch) => async (order) => {
  try {
    await userApi.post('/submit', order);
    dispatch({type: 'submit_order', payload: order})
  } catch(err){
    console.log(err);
  }
};

const getHistory = (dispatch) => async () => {
  try {
    const response = await userApi.get('/history');
    dispatch({ type: 'get_history', payload: response.data });
  } catch (err) {
    console.log(err);
  };
};

export const { Provider, Context } = CreateDataContext(
  AppointmentReducer,
  { getBusiness, getLocalBusiness, setAppointmentInfo, setPaymentInfo, setAddressInfo, setCurrentAddress, getPaymentInfo, setCurrentAddress, submitOrder, getHistory },
  {
    localBusinesses: [],
    businessInfo: {},
    dateTime: 0,
    appointmentReason: '',
    addresses: [],
    currentAddress: {},
    cardInfo: [],
    currentCardInfo: {},
    history: []
  }
);

/*
    address: {
      line1: '',
      line2: '',
      zip: '', // Changed to string
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

*/