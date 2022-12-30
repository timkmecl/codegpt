import { Settings } from "./extension";

export default (question: string, settings: Settings, selection?: string) => {
	let prompt = '';
	if (selection) {
		// If there is a selection, add the prompt and the selected text to the search prompt
		if (settings.selectedInsideCodeblock) {
			prompt = `${question}\n\`\`\`\n${selection}\n\`\`\``;
		} else {
			prompt = `${question}\n${selection}\n`;
		}
	} else {
		// Otherwise, just use the prompt if user typed it
		prompt = question;
	}

	prompt = `The following is part of a conversation between a user and a helpful and knowledgeable AI assistant who is an expert programmer. Assistant's responses are all formatted using markdown, with multi-line code being written inside codeblocks. (\`\`\`)\n\n USER: ${prompt}\n\nASSISTANT: `;

	return prompt;
};
