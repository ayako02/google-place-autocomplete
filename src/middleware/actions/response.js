export const actions = {
  GET: { RESPONSES: 'GET_RESPONSES' },
  PUT: { SEARCHED_HISTORIES: 'PUT_SEARCHED_HISTORIES' },
};

export const getResponses = () => ({
  type: actions.GET.RESPONSES,
});

export const putSearchedHistories = res => ({
  type: actions.PUT.SEARCHED_HISTORIES,
  payload: res,
});
