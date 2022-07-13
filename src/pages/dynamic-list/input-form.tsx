import React, {useState} from 'react';
import _uniqueId from 'lodash/uniqueId';
import {ItemProps} from './types';

export default function InputForm(props: { onSubmitItems: (item: ItemProps) => void }) {
	const [value, setValue] = useState('');

	function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		setValue(e.target.value);
	}

	function onSubmitClick() {
		setValue('');
		const id = _uniqueId('item-');
		props.onSubmitItems({id, value});
	}

	return (<>
		<input type={'text'} onChange={onInputChange} value={value}/>
		<button onClick={onSubmitClick}>Submit</button>
	</>);
}
