import createDataContext from './createDataContext';

const initialState = [{ id: 1, title: 'TEST POST', content: 'TEST CONTENT' }];

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOG_POST':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case 'EDIT_BLOG_POST':
      return state.map((blogPost) => {
        if (blogPost.id !== action.payload.id) {
          return blogPost;
        }

        return {
          ...blogPost,
          title: action.payload.title,
          content: action.payload.content,
        };
      });
    case 'DELETE_BLOG_POST':
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content, fn) => {
    dispatch({ type: 'ADD_BLOG_POST', payload: { title, content } });

    /* POINT：ステートを更新の完了を待って、画面遷移する。 */
    if (fn) {
      fn();
    }
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, fn) => {
    dispatch({ type: 'EDIT_BLOG_POST', payload: { id, title, content } });

    /* POINT：ステートを更新の完了を待って、画面遷移する。 */
    if (fn) {
      fn();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: 'DELETE_BLOG_POST', payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, editBlogPost, deleteBlogPost },
  initialState
);
