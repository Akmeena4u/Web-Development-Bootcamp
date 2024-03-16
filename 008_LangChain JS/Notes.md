# Course Overview

## Introduction
 In this course, you'll learn how to leverage LangChain, a JavaScript library, to develop sophisticated applications that utilize large language models (LLMs). By the end of this course, you'll be equipped to integrate LLMs into your projects and harness their capabilities for various applications.

## Course Objectives
- **Introduction to LLMs**: Gain an understanding of working with LLMs and their potential applications.
- **LangChain Basics**: Learn the fundamentals of LangChain and how it simplifies LLM integration in JavaScript.
- **Templates and Response Schemas**: Explore the use of templates and response schemas to customize LLM outputs.
- **Chains and Output Processes**: Understand how to use chains and output processes for further customization of LLM responses.
- **Sequential Chains**: Dive into advanced concepts such as sequential chains for handling complex scenarios.
- **Indexes and Data Retrieval**: Learn how to use indexes and data retrieval techniques to access knowledge bases and extract relevant information.
- **Memory and Context**: Understand the concept of memory in LLMs and how it influences response generation based on conversational context.
- **Agent Automation**: Explore advanced functionalities like agents for automating tasks and enhancing user interactions.

---



<details>
  <summary>Project Setup and Installation</summary>
## Overview
Before diving into the course content, it's essential to set up your environment properly to ensure smooth execution of the code examples. This section provides instructions on setting up the project and installing necessary dependencies.

### Prerequisites
- **OpenAI Account**: You'll need an OpenAI account to access their API, which is used in the course examples.
- **OpenAI API Key**: Obtain an API key from your OpenAI account dashboard and paste it into the `.env` file provided in the project.
- **Node.js**: Ensure that Node.js is installed on your computer. You can check your Node.js version by running `node --version`. It's recommended to use a version not older than 16.

## Project Structure
The project consists of multiple files containing JavaScript code snippets used throughout the course.

### Dependencies
- **dotenv**: Used for loading environment variables from the `.env` file.
- **@vectors/store**: A library for working with vector stores.
- **langchain**: The LangChain package for integrating LLMs into JavaScript applications.
- **openai**: A package for making requests to the OpenAI API.

### `package.json`
The `package.json` file lists the project dependencies and configuration settings. It's crucial to keep the `type` field set to `module` to enable the usage of import statements in Node.js.

```json
{
  "dependencies": {
    "dotenv": "^10.0.0",
    "@vectors/store": "^x.x.x",
    "langchain": "^x.x.x",
    "openai": "^x.x.x"
  },
  "type": "module"
}
```

## Installation
1. Clone the Git repository containing the course materials.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the project dependencies. This will create a `node_modules` folder.
</details>

---


<details>
<summary> Talking to the OpenAI API without LangChain </summary>

# Talking to the OpenAI API without LangChain

In this section, we'll learn how to interact with the OpenAI API directly without using LangChain. This involves setting up the environment, configuring API access, and making requests to the OpenAI API.

## Setting up the Environment

First, we need to set up our environment by loading the OpenAI API key from the `.env` file. We import the configuration and instantiate an OpenAI API object using the provided key.

```javascript
import { config } from 'dotenv';
import { Configuration, OpenAI } from 'openai';

// Load API key from .env file
config();

// Create configuration object with API key
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// Instantiate OpenAI API object
const openai = new OpenAI(configuration);
```

## Making Requests to OpenAI

Next, we create a helper function called `chat` to interact with the OpenAI API. The function takes a string input representing the user's message. We structure the message according to the OpenAI API requirements and send it to the API using the `createChatCompletion` method.

```javascript
async function chat(input) {
  try {
    // Format message for OpenAI
    const messages = [{ role: 'user', content: input }, { role: 'assistant', content: '' }];
    
    // Make request to OpenAI API
    const response = await openai.createChatCompletion({
      model: 'text-davinci-003', // Specify the model to use
      messages,
      temperature: 0.7, // Adjust temperature for dynamic output
    });

    // Extract text response from API response
    const text = response.data.choices[0].message.content;

    return text;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
```

## Example Usage

Finally, we demonstrate how to use the `chat` function to ask a question and receive a response from the OpenAI API.

```javascript
async function main() {
  try {
    // Ask a question
    const question = 'What is the capital of France?';
    const answer = await chat(question);
    
    // Display the response
    console.log(answer);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Run the main function
main();
```

## Customizing Responses

To customize responses, we can use system prompts to set the context for the conversation. We replace variables in the system prompt with actual questions to create more dynamic interactions.

```javascript
// Define system prompt template
const systemPrompt = "I'm a fun chatbot! Let's answer some questions about $QUESTION";

// Replace variables in system prompt
const formattedPrompt = systemPrompt.replace('$QUESTION', question);

// Ask a question with customized prompt
const answer = await chat(formattedPrompt);
```

By customizing the system prompt, we can influence the behavior of the AI and create more engaging conversations.

---

This approach allows us to directly interact with the OpenAI API, providing more flexibility in controlling the conversation flow and handling responses. Further customization can be achieved by adjusting parameters such as temperature and context.
</details>

---
<details>
  <summary>Chains and Prompts Basics</summary>

  # Chains and Prompts Basics

In this section, we'll explore the basics of using chains and prompts with Link Chain to simplify the process of interacting with the OpenAI API.

## Setup and Imports

First, we need to set up our environment by importing the necessary modules and configuring the OpenAI API access.

```javascript
import { config } from 'dotenv';
import { OpenAI } from 'langchain/llms'; // Import from Lang Chain
import { PromptTemplate } from 'linkchain/prompts'; // Import from Link Chain
import { LLMChain } from 'linkchain/chains'; // Import from Link Chain

// Load API key from .env file
config();

// Instantiate OpenAI API object
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  temperature: 0.7, // Set temperature for dynamic output
});

// Define system prompt template
const systemPrompt = "I'm a fun chatbot! Let's answer some questions about $QUESTION";
```

## Creating Chains with Prompts

Next, we create chains using prompts to simplify the interaction with the OpenAI API. We define a template with placeholders for input variables and instantiate a prompt template with the template and input variables. Then, we create an LLM chain with the model and prompt.

```javascript
// Define template with input variables
const template = "What is the capital of {$PLACE}?";

// Instantiate prompt template with template and input variables
const prompt = new PromptTemplate(template, { '$PLACE': 'France' });

// Create LLM chain with model and prompt
const chain = new LLMChain(openai.model, prompt);
```

## Using Chains for Conversations

Now, we can use the chain to generate responses by passing input variables as objects to the `call` function.

```javascript
// Define input object
const input = { '$PLACE': 'France' };

// Call the chain with input object
const response = await chain.call(input);

// Display the response
console.log(response);
```

## Example Usage

Let's put it all together and run the chain to generate a response.

```javascript
async function main() {
  try {
    // Call the chain with input object
    const response = await chain.call({ '$PLACE': 'France' });

    // Display the response
    console.log(response);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Run the main function
main();
```

## Conclusion

Using chains and prompts with Link Chain simplifies the process of interacting with the OpenAI API by abstracting away the complexity of message formatting. By defining templates with placeholders for input variables, we can easily generate dynamic conversations with AI models.

This approach streamlines the development process and allows for more intuitive interaction with language models, making it easier to build sophisticated applications.

---

By leveraging chains and prompts, developers can create more dynamic and engaging conversations with AI models while reducing the amount of boilerplate code required. This facilitates rapid development and experimentation with different use cases for language models.
</details>


---

<details>
  <summary> Intermediate Chains: SequentialChains</summary>

  # Intermediate Chains: SequentialChains

In this section, we'll delve into using sequential chains with Link Chain to streamline the process of passing outputs from one LLM chain to another, allowing for more complex interactions with language models.

## Setup and Imports

First, we need to import the necessary modules and set up our environment.

```javascript
import { config } from 'dotenv';
import { OpenAI } from 'langchain/llms'; // Import from Lang Chain
import { PromptTemplate } from 'linkchain/prompts'; // Import from Link Chain
import { LLMChain, SequentialChain } from 'linkchain/chains'; // Import from Link Chain

// Load API key from .env file
config();

// Instantiate OpenAI API object
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  temperature: 0.7, // Set temperature for dynamic output
});
```

## Simple Sequential Chain

### Setting Up Templates and Chains

We define two templates, each with a single input variable. Then, we create LLM chains for each template. Finally, we combine these chains into a simple sequential chain.

```javascript
// Define first response template with a single input variable
const firstResponseTemplate = "Thank you for your input: {$INPUT}";

// Define second response template with a single input variable
const secondResponseTemplate = "You are an assistant bot. Your job is to make the customer feel heard and understood: {$INPUT}";

// Instantiate prompt templates for the first and second response templates
const firstPrompt = new PromptTemplate(firstResponseTemplate, { '$INPUT': 'user' });
const secondPrompt = new PromptTemplate(secondResponseTemplate, { '$INPUT': 'user' });

// Create LLM chains for the first and second templates
const firstChain = new LLMChain(openai.model, firstPrompt);
const secondChain = new LLMChain(openai.model, secondPrompt);

// Combine chains into a simple sequential chain
const sequentialChain = new SequentialChain([firstChain, secondChain]);
```

### Using the Sequential Chain

Now, we can use the sequential chain to generate responses by passing input variables to the `call` function.

```javascript
// Define input object
const input = { '$INPUT': 'I ordered pizza salami. It was awful.' };

// Call the sequential chain with input object
const response = await sequentialChain.call(input);

// Display the final response
console.log(response);
```

## Complex Sequential Chain with Output Keys

### Setting Up Templates and Chains

We define templates with multiple input variables and output keys for each chain. Then, we create LLM chains for each template and specify the output keys. Finally, we combine these chains into a complex sequential chain.

```javascript
// Define first template with multiple input variables
const firstTemplate = "You ordered {$DISH_NAME}. Your experience was {$EXPERIENCE}. Please write a review.";

// Instantiate prompt template for the first template
const firstPrompt = new PromptTemplate(firstTemplate, { '$DISH_NAME': 'input', '$EXPERIENCE': 'input' });

// Create LLM chain for the first template
const firstChain = new LLMChain(openai.model, firstPrompt, { outputKey: 'review' });

// Define second template with an output key matching the input variable of the next chain
const secondTemplate = "Thank you for your review: {$REVIEW}";

// Instantiate prompt template for the second template
const secondPrompt = new PromptTemplate(secondTemplate, { '$REVIEW': 'review' });

// Create LLM chain for the second template
const secondChain = new LLMChain(openai.model, secondPrompt, { outputKey: 'comment' });

// Define third template with an output key matching the input variable of the next chain
const thirdTemplate = "Review summary: {$REVIEW_SUMMARY}";

// Instantiate prompt template for the third template
const thirdPrompt = new PromptTemplate(thirdTemplate, { '$REVIEW_SUMMARY': 'comment' });

// Create LLM chain for the third template
const thirdChain = new LLMChain(openai.model, thirdPrompt, { outputKey: 'summary' });

// Define fourth template with an output key matching the input variable of the next chain
const fourthTemplate = "German translation: {$GERMAN_TRANSLATION}";

// Instantiate prompt template for the fourth template
const fourthPrompt = new PromptTemplate(fourthTemplate, { '$GERMAN_TRANSLATION': 'summary' });

// Create LLM chain for the fourth template
const fourthChain = new LLMChain(openai.model, fourthPrompt, { outputKey: 'translation' });

// Combine chains into a complex sequential chain
const complexSequentialChain = new SequentialChain([firstChain, secondChain, thirdChain, fourthChain]);
```

### Using the Complex Sequential Chain

Now, we can use the complex sequential chain to generate responses by passing input variables to the `call` function.

```javascript
// Define input object
const input = { '$DISH_NAME': 'pizza salami', '$EXPERIENCE': 'awful' };

// Call the complex sequential chain with input object
const response = await complexSequentialChain.call(input);

// Display the final response
console.log(response);
```

## Conclusion

Using sequential chains with Link Chain allows for the chaining of multiple LLM chains together, enabling more complex interactions with language models. By passing outputs from one chain to another, developers can create dynamic and engaging conversations with AI models, making it possible to build sophisticated applications with ease.

---

Sequential chains provide a powerful mechanism for orchestrating interactions with language models, allowing developers to create intricate conversational flows with minimal effort. By leveraging output keys, developers can pass outputs between chains seamlessly, enabling the creation of rich and dynamic conversational experiences.
</details>


---

<details>
  <summary>OutputParsers and ResponseSchemas</summary>
  # OutputParsers and ResponseSchemas

In this section, we'll explore how to use output parsers and response schemas in Link Chain to handle responses from language models in structured formats instead of plain text. This allows for more versatile interactions and enables the handling of complex data structures.

## Setup and Imports

First, we import the necessary modules and classes.

```javascript
import { OpenAI } from 'openai'; // Import OpenAI class
import { PromptTemplate } from 'linkchain/prompts'; // Import PromptTemplate class
import { StructuredOutputParser } from 'linkchain/parsers'; // Import StructuredOutputParser class

// Instantiate OpenAI API object
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  temperature: 0.7, // Set temperature for dynamic output
});
```

## Using Structured Output Parser and Prompt Template

### Parsing Text to Structured Format

We use the `StructuredOutputParser` class to parse text into a structured format, such as JSON.

```javascript
// Define input text
const answer = "The capital of France is Paris";

// Parse text to structured format
const formatInstructions = StructuredOutputParser.fromNamesAndDescriptions({ answer });

// Display format instructions
console.log(formatInstructions);
```

### Using Prompt Template with Response Schema

We then create a prompt template that includes the format instructions, allowing us to request structured responses from the language model.

```javascript
// Define prompt template with format instructions and questions
const prompt = new PromptTemplate(formatInstructions, {
  'question': ['What is the capital of France?'],
});

// Create input object for the model
const input = {
  'question': 'What is the capital of France?',
};

// Generate response from the model
const response = await openai.complete(prompt.format(input));

// Parse response to structured format
const parsedResponse = StructuredOutputParser.parse(response);

// Display parsed response
console.log(parsedResponse);
```

## Conclusion

By using output parsers and response schemas in conjunction with prompt templates, developers can handle language model responses in structured formats, enabling seamless integration with external systems and databases. This capability allows for more sophisticated interactions with language models and enhances the versatility of AI-powered applications.

---

Output parsers and response schemas provide a powerful mechanism for processing language model outputs in structured formats, allowing developers to handle complex data structures with ease. By leveraging these features, developers can build applications that seamlessly interact with language models and integrate with a wide range of external systems and services.
</details>

---

<details>
  <summary>Index - Loaders, Splitters, VectorDBs, RetrievalChains</summary>
  ## Index - Loaders, Splitters, VectorDBs, RetrievalChains

In this section, we'll cover the process of indexing a large knowledge base, splitting it into manageable chunks, converting those chunks into embeddings, and retrieving relevant information using similarity search and retrieval chains.

### Setup and Imports

We begin by importing necessary modules and classes:

```javascript
import { OpenAI } from 'openai'; // Import OpenAI class
import { TextLoader, CharacterTextSplitter } from 'linkchain/loaders'; // Import loaders
import { StructuredOutputParser } from 'linkchain/parsers'; // Import StructuredOutputParser class
import { FileStore } from 'linkchain/vector-db'; // Import FileStore for vector storage

// Instantiate OpenAI API object
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  temperature: 0.7, // Set temperature for dynamic output
});
```

### Indexing and Splitting Documents

We load the text file containing the knowledge base and split it into manageable chunks:

```javascript
// Load text file into memory
const loader = new TextLoader('restaurant.txt');
const documents = await loader.load();

// Split documents into chunks
const splitter = new CharacterTextSplitter({ chunkSize: 100 });
const splitDocuments = await splitter.splitDocuments(documents);
```

### Converting Chunks to Embeddings

Next, we convert the text chunks into embeddings and store them in a vector database:

```javascript
// Instantiate OpenAI embeddings class
const embeddings = new OpenAIEmbeddings();

// Convert chunks to embeddings and save to vector database
const vectorStore = FileStore.fromDocuments(splitDocuments, embeddings);
vectorStore.save();
```

### Retrieval using Similarity Search

Now, we retrieve relevant information using a similarity search and retrieval chains:

```javascript
// Load vector database
const fileStore = FileStore.load();

// Instantiate OpenAI embeddings class
const embeddings = new OpenAIEmbeddings();

// Instantiate Retrieval QA chain
const retrieverChain = new RetrievalQAChain({
  combineDocumentsChain: loadQAStuffChain(modulus),
  retriever: fileStore.toRetriever(),
});

// Run query and retrieve information
const query = "When does the restaurant open on Friday?";
const result = await retrieverChain.call(query);

// Display result
console.log(result.text);
```

### Conclusion

By indexing large knowledge bases, splitting them into chunks, converting them into embeddings, and utilizing retrieval chains, we can efficiently retrieve relevant information from the knowledge base in response to user queries. This process allows for the creation of powerful AI-powered applications capable of handling complex data and providing meaningful responses to user inquiries.

---

This section demonstrates the process of indexing, splitting, converting, and retrieving information from a large knowledge base using Link Chain. By following these steps, developers can efficiently manage and utilize large datasets to power AI applications and provide valuable insights to users.
</details>

---

<details>
  <summary>Memory - Using ConversationMemory</summary>
## Memory - Using ConversationMemory

Memory plays a crucial role in maintaining context and continuity in conversations, just like how it does in human interactions. Without memory, an AI language model (LLM) would lose the context of the conversation after each exchange, leading to disjointed interactions. Let's explore how we can implement memory in our chatbot using the ConversationMemory feature in Link Chain.

### Setup and Imports

First, we import necessary modules and classes:

```javascript
import { config } from './config'; // Import config function
import { ConversationChain } from 'linkchain/chains'; // Import ConversationChain class
import { ChatOpenAI } from 'linkchain/chat'; // Import ChatOpenAI class
import { PromptMessages } from 'linkchain/prompts'; // Import PromptMessages class
import { BufferMemory } from 'linkchain/memory'; // Import BufferMemory class
```

### Creating Chat Instance with Memory

We create an instance of the ChatOpenAI class and set up the conversation chain with memory:

```javascript
// Create instance of ChatOpenAI class
const chat = new ChatOpenAI();

// Create system message prompt for the bot identity
const systemMessage = PromptMessages.systemMessage('Bot');

// Create a prompt template with placeholder for conversation history
const historyPlaceholder = PromptMessages.placeholder();

// Create a human message prompt template
const humanMessagePrompt = new PromptMessages('What would you like to say?', ['text']);

// Set up buffer memory to store conversation history
const memory = new BufferMemory({ key: 'history' });

// Set up conversation chain with memory
const conversationChain = new ConversationChain({ memory });
conversationChain.setPrompt(systemMessage);
conversationChain.setPrompt(historyPlaceholder);
conversationChain.setLLM(chat);
```

### Using Memory in Conversation

Now, we can interact with our chatbot, maintaining context across multiple exchanges:

```javascript
// Start conversation with initial question
const response1 = await conversationChain.call('What is the capital of France?');

// Follow-up question based on previous response
const response2 = await conversationChain.call('What are some great places to see there?');

// Display responses
console.log(response1);
console.log(response2);
```

### Conclusion

By incorporating memory into our chatbot using the ConversationMemory feature, we can ensure that the bot retains context and maintains a coherent conversation flow. This enables more natural and engaging interactions with users, making the chatbot more effective and user-friendly.

---

In summary, implementing memory in our chatbot using ConversationMemory in Link Chain allows us to create more context-aware and engaging conversational AI applications. This enhances the user experience and enables more meaningful interactions between users and chatbots.
</details>

---
<details>
  <summary>Agents - LLMs Plus Tools</summary>
## Agents - LLMs Plus Tools

Agents in Link Chain are LM chords that utilize a recursive function approach, similar to a function calling itself repeatedly until it reaches a final answer. These agents leverage a special framework called REACT (Reason and Act) under the hood, which splits the user input into thoughts and actions, compelling the LLM to devise an optimal strategy to solve the problem.

### Setting Up an Agent

Let's set up an agent in code:

```javascript
import { config } from './config'; // Import config function
import { ChatOpenAI } from 'linkchain/chat'; // Import ChatOpenAI class
import { initializeAgentExecutorWithOptions, Calculator } from 'linkchain/tools'; // Import tools

// Set Lang chain Handler environment variable
process.env.Lang_chain_Handler = 'linkchain';

// Create instance of ChatOpenAI class
const chat = new ChatOpenAI();

// Instantiate calculator tool
const calculator = new Calculator();

// Initialize agent executor with options
const executor = initializeAgentExecutorWithOptions({
  tools: [calculator], // Pass array of tools
  model: chat,
  agentType: 'chat', // Use conversational react description
});
```

### Using the Agent

Now, let's use the agent to handle user input:

```javascript
// Ask a non-math related question
const result1 = await executor.call('What is the capital of France?');

// Ask a math-related question
const result2 = await executor.call('What is 100 divided by 25?');

// Display results
console.log(result1);
console.log(result2);
```

### Output

Upon running the code, we can observe the agent in action:

- For the non-math related question, the agent handles it without resorting to any tool.
- For the math-related question, the agent utilizes the calculator tool to provide the correct answer.

### Conclusion

Agents in Link Chain enable LM chords to utilize various tools to solve complex problems, providing more comprehensive and accurate responses to user queries. By leveraging this framework, developers can create more versatile and powerful conversational AI applications.

---

In summary, agents in Link Chain empower LM chords with the ability to reason and act, using a variety of tools to handle user queries effectively. This approach enhances the capabilities of conversational AI systems and enables them to provide more sophisticated responses to user inputs.
</details>
