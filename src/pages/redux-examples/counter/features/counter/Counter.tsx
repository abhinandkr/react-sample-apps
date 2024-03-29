import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, reset, incrementByAmount} from './counterSlice';
import {State} from '../../app/types';

interface Props {
}

export default function Counter(props: Props) {
	// @ts-ignore
	const count = useSelector((state) => state.counter.count);
	const dispatch = useDispatch();

	const [incrementAmount, setIncrementAmount] = useState<State['count']>(0);
	const addValue = Number(incrementAmount) || 0;
	function resetAll() {
		setIncrementAmount(0);
		dispatch(reset());
	}
	return (
		<section>
			<p>{count}</p>
			<div>
				<button onClick={() => dispatch(increment())}>+</button>
				<button onClick={() => dispatch(decrement())}>-</button>
			</div>
			<input
				type={'text'}
				value={incrementAmount}
				onChange={(e) => setIncrementAmount(parseInt(e.target.value))}
			/>
			<div>
				<button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
				<button onClick={resetAll}>Reset</button>
			</div>
		</section>
	);
}
