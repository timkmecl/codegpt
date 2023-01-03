# GPT3 extension for VSCode

This Visual Studio Code extension allows you to use the [official OpenAI API](https://openai.com/api/) to generate code or natural language responses from OpenAI's [GPT3/GPT3.5](https://en.wikipedia.org/wiki/GPT-3) to your questions, right within the editor.

🚀✨ Supercharge your coding with AI-powered assistance. Automatically write new code from scratch, ask questions, get explanations, refactor code, find bugs and more!

### Links:

- **[VSCode Marketplace](https://marketplace.visualstudio.com/items?itemName=timkmecl.codegpt)**
- **[Github](https://github.com/timkmecl/codegpt)**

<br>

*This is currently a work-in-progress, if there are any problems please let me know. You can also try [ChatGPT extension](https://github.com/timkmecl/chatgpt-vscode) ([marketplace](https://marketplace.visualstudio.com/items?itemName=timkmecl.chatgpt)) which is smarter, but the setup is more complicated and it may not work (403/429 errors)*

<br>

<img src="examples/main.png" alt="Refactoring selected code using chatGPT"/>

## Features
- 💡 **Ask general questions** or use code snippets from the editor to query ChatGPT via an input box in the sidebar
- 🖱️ Right click on a code selection and run one of the context menu **shortcuts**
	- automatically write documentation for your code
	- explain the selected code
	- refactor or optimize it
	- find problems with it
- 💻 View ChatGPT's responses in a panel next to the editor
- 📝 **Insert code snippets** from the AI's response into the active editor by clicking on them



## Installation

To use this extension, install it from the VSCode marketplace.

1. After the installation is complete, you will need to add your OpenAI API key to the extension settings in VSCode. To do this, open the `Settings` panel by going to the `Code` menu and selecting `Preferences`, then `Settings`.
2. In the search bar, type `CodeGPT` to filter the settings list.
3. In the CodeGPT section, enter your API key in the top field

After completing these steps, the extension should be ready to use.

### Obtaining API key

To use this extension, you will need an API key from OpenAI. To obtain one, follow these steps:

1. Go to [OpenAI's website](https://beta.openai.com/account/api-keys). If you don't have an account, you will need to create one or sign up using your Google or Microsoft account.
2. Click on the `Create new secret key` button.
3. Copy the key and paste it into the `API Key` field in the extension settings.

When you create a new account, you receive $18 in free credits for the API which you must use in the first 90 days. You can see pricing information [here](https://openai.com/api/pricing/). 1000 tokens are about 700 words, and you can see the token count for each request at the end of the response in the sidebar.


## Using the Extension

To use the extension, open a text editor in Visual Studio Code and open the CodeGPT panel by clicking on the CodeGPT icon in the sidebar. This will open a panel with an input field where you can enter your prompt or question. By clicking enter, it will be sent to GPT3. Its response will be displayed below the input field in the sidebar (note that it may take some time for it to be calculated).

<img src="examples/create.png" alt="Writing new code using chatGPT" width="500"/>

You can also select a code snippet in the editor and then enter a prompt in the side panel, or right-click and select "Ask CodeGPT". The **selected code will be automatically appended** to your query when it is sent to the AI. This can be useful for generating code snippets or getting explanations for specific pieces of code.

<img src="examples/explain.png" alt="Refactoring selected code using chatGPT"/>

To **insert a code snippet** from the AI's response into the editor, simply click on the code block in the panel. The code will be automatically inserted at the cursor position in the active editor.

<img src="examples/refactor.png" alt="chatGPT explaining selected code"/>

You can select some code in the editor, right click on it and choose one of the following **shortcuts** from the context menu:
#### Commands:
- `Ask CodeGPT`: will provide a prompt for you to enter any query
- `CodeGPT: Explain selection`: will explain what the selected code does
- `CodeGPT: Refactor selection`: will try to refactor the selected code
- `CodeGPT: Find problems`: looks for problems/errors in the selected code, fixes and explains them
- `CodeGPT: Optimize selection`: tries to optimize the selected code

`Ask CodeGPT` is also available when nothing is selected. For the other four commands, you can **customize the exact prompt** that will be sent to the AI by editing the extension settings in VSCode Preferences.

---

Please note that this extension is currently a proof of concept and may have some limitations or bugs. We welcome feedback and contributions to improve the extension. Also check out the [ChatGPT extension](https://github.com/timkmecl/codegpt) which is smarter, but the setup is more complicated and it may not work (403/429 errors).