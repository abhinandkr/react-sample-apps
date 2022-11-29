import {store} from './app/store';
import {Provider} from 'react-redux';
import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';
import './index.css';

function App() {
	return (
		<Provider store={store}>
			<main className="App">
				<AddPostForm />
				<PostsList />
			</main>
		</Provider>
	);
}

export default App;
