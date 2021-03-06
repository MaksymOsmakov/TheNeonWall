export const required = value => {
	if (!value) return "filed is empty";
	return undefined;
}

export const maxLengthCreator = (maxLength) => (value) => {
	if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
	return undefined;
}