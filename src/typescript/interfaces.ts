export interface IOptions {
	repeat: boolean;
	format: string;
	checksInterval: number;
	actions: IActions
}

export interface IActions {
	event?: string,
	function?: Function,
}