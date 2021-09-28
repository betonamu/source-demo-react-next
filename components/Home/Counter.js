import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "../../redux/actions";

export const CounterNav = () => {
	const dispatch = useDispatch();

	const count = useSelector(store => store.count);

	return (
		<div className="counter-nav">
			<div>{count}</div>
			<div>
				<button onClick={() => { dispatch(actions.decrement()); }}>
					Decrease
				</button>

				<button onClick={() => { dispatch(actions.reset()); }}>
					Reset
				</button>

				<button onClick={() => { dispatch(actions.increment()); }}>
					Increase
				</button>
			</div>
		</div>
	);
};

export default CounterNav;