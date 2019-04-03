import * as workService from '../services/work';

export default {

  namespace: 'work',

  state: {
    list: [],
    query: [],
    modalVisible: false,
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      dispatch({
        type: 'query',
        payload: {},
      });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    * query({ payload }, { call, put }) {
      const { data } = yield call(workService.query, payload);
      debugger;
      console.log('data'.concat(data))
      if (data) {
        yield put({
          type: 'save',
          payload: {
            data,
          },
        });
      }
    },
    * add({ payload }, { call, put }) {
      yield put({ type: 'hideModal' });
      const { data } = yield call(workService.add, payload);
      console.log('add result'.concat(data));
    },
  },

  reducers: {
    save(state, { payload: { data: list } }) {
      return { ...state, list };
    },
    showModal(state, { payload }) {
      return { ...state, ...payload, modalVisible: true };
    },
    hideModal(state) {
      return { ...state, modalVisible: false };
    },
  },
};
