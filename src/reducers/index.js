import { CREATE_EVENT, DELETE_EVENT, DELETE_ALL_EVENTS } from "../actions";

const events = (state = [], action) => {
	switch (action.type) {
		case CREATE_EVENT:
			const event = { title: action.title, body: action.body };
			const length = state.length;
			// 要素が何個あるかによって条件分岐させたいから、長さを求めてる。
			const id = length === 0 ? 1 : state[length - 1].id + 1;
			return [...state, { id: id, ...event }];
		// 左辺は配列の展開、右辺はオブジェクトの展開を行ってる。その上で、配列でまた囲う。
		// return でそれをstateに返してる。

		case DELETE_EVENT:
			return state.filter((event) => {
				return event.id !== action.id;
			});

		case DELETE_ALL_EVENTS:
			return [];

		default:
			return state;
	}
};

export default events;
