const initialState = {
  selectedId: 0,
  messages: { 0: 'Hello, Tylor', 1: 'Hello, Alice', 2: 'Hello, Bob' },
};

const messengerReducer = (state, action) => {
  switch (action.type) {
    case 'changed_selection': {
      return {
        ...state,
        selectedId: action.contactId,
      };
    }
    case 'edited_message': {
      return {
        ...state,
        messages: { ...state.messages, [state.selectedId]: action.message },
      };
    }
    case 'sent_message': {
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: '',
        },
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
};

export { initialState, messengerReducer };
