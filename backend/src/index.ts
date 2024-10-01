import GoogleFormCreator from './modules/GoogleFormsGenerator';
import { question } from 'readline-sync';
import questions from './data/questions';

// Function to validate the questions format
function validateQuestions(questions: any) {
    if (!Array.isArray(questions)) {
        throw new Error('The questions file should be an array.');
    }
    for (const part of questions) {
        if (!part.title || !part.questions || !Array.isArray(part.questions)) {
            throw new Error('Each part of the questions file should have a title and questions array.');
        }
        for (const question of part.questions) {
            if (!question.type || !question.title) {
                throw new Error('Each question should have a type and a title.');
            }
        }
    }
}

async function main(formName: string, editorEmail: string, questions: any): Promise<void> {
    const formCreator = new GoogleFormCreator();
    // Validate the questions format
    validateQuestions(questions);
    // 1. Create a new form
    const formId = await formCreator.createForm(formName);
    await formCreator.grantEditorAccess(formId, editorEmail);
    for (const part of questions) {
        await formCreator.addPageBreak(formId, part.title);
        await formCreator.addMultipleQuestions(formId, part.questions);
    }

    console.log('Form successfully created with all specified questions.');
}

async function run(formName: string, email: string, questions: any) {
    main(formName, email, questions).catch(console.error);
}

console.log('Welcome to the Google Form Generator!');
// Get email in prompt:
const email = question('Enter the email of the editor you want to grant access to the form:');
// Get form name in prompt:
const formName = question('Enter the name of the form you want to create:');
// Get path to file in prompt:
const providedQuestions = question('Did you provide the questions in the data/questions.ts file? (y/n)');
// Get file path relative to the current directory:
if (providedQuestions === 'y') {
    run(formName, email, questions);
}
else {
    console.log('Please provide the questions in the data/questions.ts file.');
    process.exit(1);
}