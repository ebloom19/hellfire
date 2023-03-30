declare module "MyTypes" {
	import { ActionType, StateType } from "typesafe-actions";

	export type ReducerState = StateType<typeof import("../reducers").default>;
	export type RootAction = ActionType<typeof import("../actions/actions")>;
}
