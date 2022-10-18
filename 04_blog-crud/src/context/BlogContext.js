import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const initialState = [];

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'GET_BLOG_POSTS':
      return action.payload;
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

const getBlogPosts = (dispatch) => {
  return async () => {
    const res = await jsonServer.get('/blogposts');
    dispatch({ type: 'GET_BLOG_POSTS', payload: res.data });
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, fn) => {
    await jsonServer.post('/blogposts', {
      title,
      content,
    });

    // POINT：画面とバックエンドをどう同期するか？
    // (1) ここでステートも変える。
    // dispatch({ type: 'ADD_BLOG_POST', payload: { title, content } });
    // (2) fetchしなおす。
    // const res = await jsonServer.get('/blogposts');
    // dispatch({ type: 'GET_BLOG_POSTS', payload: res.data });
    // (3) IndexPageでdiFocusする。
    // この方法が全部に使えるので便利良い？⇒そうでもない。

    /* POINT：ステートを更新の完了を待って、画面遷移する。 */
    if (fn) {
      fn();
    }
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, fn) => {
    // POINT：画面とバックエンドをどう同期するか？
    await jsonServer.put(`/blogposts/${id}`, {
      title,
      content,
    });

    // ShowPageを更新するためには、dispatchが必要になる。
    dispatch({ type: 'EDIT_BLOG_POST', payload: { id, title, content } });

    /* POINT：ステートを更新の完了を待って、画面遷移する。 */
    if (fn) {
      fn();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    // POINT：画面とバックエンドをどう同期するか？
    await jsonServer.delete(`/blogposts/${id}`);

    // (1) IndexPageで明示的にgetBlogPostsを呼び出すか
    // (2) dispatchするか？
    dispatch({ type: 'DELETE_BLOG_POST', payload: id });
    // (3) fetchしなおす。
    // const res = await jsonServer.get('/blogposts');
    // dispatch({ type: 'GET_BLOG_POSTS', payload: res.data });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { getBlogPosts, addBlogPost, editBlogPost, deleteBlogPost },
  initialState
);
