import Cookies from 'js-cookie'

export const GET_MANAGE_USER_REQUEST = 'GET_MANAGE_USER_REQUEST'
export const GET_MANAGE_USER_SUCCESS = 'GET_MANAGE_USER_SUCCESS'
export const GET_MANAGE_USER_ERROR = 'GET_MANAGE_USER_ERROR'

export const ADD_MANAGE_USER_REQUEST = 'ADD_MANAGE_USER_REQUEST'

export const RESET_BLOCK_MANAGE_USER = 'RESET_BLOCK_MANAGE_USER'
export const RESET_FLAGS_MANAGE_USER = 'RESET_FLAGS_MANAGE_USER'

const block = {
  loading: false,
  error: '',
  success: false,
}

const initialState = {
  manageUsers: {
    ...block,
    tableData: [
      {
        name: 'Leah Ramos',
        mobile_no: '(320) 899-4101',
        email: 'leah.ramos@example.com',
        date: '2/4/1964',
      },
      {
        name: 'Cody Wagner',
        mobile_no: '(659) 590-6871',
        email: 'cody.wagner@example.com',
        date: '11/3/1974',
      },
      {
        name: 'Ruben Lewis',
        mobile_no: '(989) 295-5975',
        email: 'ruben.lewis@example.com',
        date: '1/5/1997',
      },
    ],
  },
}

export const ManageUsersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MANAGE_USER_REQUEST:
      return { ...state, manageUsers: { ...state.manageUsers, loading: true } }
    case GET_MANAGE_USER_SUCCESS:
      return {
        ...state,
        manageUsers: { ...state.manageUsers, loading: false, success: true, error: '' },
      }
    case GET_MANAGE_USER_ERROR:
      return {
        ...state,
        manageUsers: { ...state.manageUsers, loading: false, error: payload },
      }
    case ADD_MANAGE_USER_REQUEST:
      return {
        ...state,
        manageUsers: { ...state.manageUsers, tableData: [...state.manageUsers.tableData, payload] },
      }

    //reset block with flag and data
    case RESET_BLOCK_MANAGE_USER:
      return {
        ...state,
        [payload.blockType]: {
          ...state[payload.blockType],
          ...initialState[payload.blockType],
        },
      }

    //reset only flags(block)
    case RESET_FLAGS_MANAGE_USER:
      return {
        ...state,
        [payload.blockType]: {
          ...state[payload.blockType],
          ...block,
        },
      }

    default:
      return state
  }
}
