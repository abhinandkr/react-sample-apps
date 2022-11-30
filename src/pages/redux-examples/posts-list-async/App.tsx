import {store} from './app/store';
import {Provider} from 'react-redux';
import PostsListAsync from './features/posts/PostsListAsync';
import AddPostForm from './features/posts/AddPostForm';
import './index.css';
import {fetchUsers} from './app/usersSlice';

store.dispatch(fetchUsers());

function App() {
	return (
		<Provider store={store}>
			<main className="App">
				<AddPostForm />
				<PostsListAsync />
			</main>
		</Provider>
	);
}

export default App;
