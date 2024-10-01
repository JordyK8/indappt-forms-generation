import { forms_v1, auth } from '@googleapis/forms';
import { drive_v3 } from '@googleapis/drive';
export enum QuestionType {
    RADIO = 'RADIO',
    CHECKBOX = 'CHECKBOX',
    DROPDOWN = 'DROPDOWN',
    TEXT = 'TEXT',
    PARAGRAPH = 'PARAGRAPH'
}

export interface QuestionConfig {
    type: QuestionType; // The type of the question
    title: string; // The title of the question
    description?: string; // Optional: a description for the question
    required?: boolean; // Optional: whether the question is required
    options?: { value: string }[]; // Optional: for choice questions, an array of options
}

export default class GoogleFormCreator {
    private authClient: any;
    private forms: forms_v1.Forms;
    private drive: drive_v3.Drive;
    public formIndex: number;

    constructor() {
        console.log(`${__dirname}/../../google-auth-access-key.json`);
        // Initialize Google Forms API and Google Drive API
        this.authClient = new auth.GoogleAuth({
            keyFile: `${__dirname}/../../google-auth-access-key.json`,
            scopes: [
                'https://www.googleapis.com/auth/forms.body',
                'https://www.googleapis.com/auth/drive'
            ]
        });
        this.forms = new forms_v1.Forms({ auth: this.authClient });
        this.drive = new drive_v3.Drive({ auth: this.authClient });
        this.formIndex = 0;
    }

    // Authenticate client and set auth
    private async authenticate() {
        const authClient = await this.authClient.getClient();
        this.forms = new forms_v1.Forms({ auth: authClient });
    }

    private increaseIndex() {
        this.formIndex++;
    }

    // Function to create a form with the given title
    async createForm(formTitle: string): Promise<string> {
        await this.authenticate();

        const res = await this.forms.forms.create({
            requestBody: {
                info: {
                    title: formTitle,
                }
            }
        });

        const formId = res.data.formId;
        console.log('form info: ', res.data);
        console.log(`Form created with ID: ${formId}`);
        return formId as string;
    }

    // Function to add a single question to the form
    async addQuestion(formId: string, questionConfig: QuestionConfig) {
        await this.authenticate();

        // Define question structure based on type
        let question: any = {};

        switch (questionConfig.type) {
            case 'RADIO': // Radio button (single choice)
                question = {
                    required: questionConfig.required || false,
                    choiceQuestion: {
                        type: 'RADIO',
                        options: questionConfig.options || []
                    }
                };
                break;

            case 'CHECKBOX': // Checkbox (multiple choices)
                question = {
                    required: questionConfig.required || false,
                    choiceQuestion: {
                        type: 'CHECKBOX',
                        options: questionConfig.options || []
                    }
                };
                break;

            case 'DROPDOWN': // Dropdown menu
                question = {
                    required: questionConfig.required || false,
                    choiceQuestion: {
                        type: 'DROP_DOWN',
                        options: questionConfig.options || []
                    }
                };
                break;

            case 'TEXT': // Short answer (single-line text)
                question = {
                    required: questionConfig.required || false,
                    textQuestion: {
                        paragraph: false
                    }
                };
                break;

            case 'PARAGRAPH': // Long answer (multi-line text)
                question = {
                    required: questionConfig.required || false,
                    textQuestion: {
                        paragraph: true
                    }
                };
                break;

            default:
                console.error(`Unsupported question type: ${questionConfig.type}`);
                return;
        }

        // Add the question to the form
        const request = {
            formId,
            requestBody: {
                requests: [
                    {
                        createItem: {
                            location: {
                                index: null
                            },
                            item: {
                                title: questionConfig.title,
                                description: questionConfig.description || '',
                                questionItem: {
                                    question
                                }
                            }
                        }
                    }
                ]
            }
        };

        // Fetch the form to determine the correct index for the new page
        const form = await this.forms.forms.get({ formId });
        const items = form.data.items || [];
        const index = items.length; // Append to the end of the form

        request.requestBody.requests[0].createItem.location.index = index;

        const res = await this.forms.forms.batchUpdate(request);
        console.log(`Question added: ${questionConfig.title}`);
    }

    // Add multiple questions to a form
    async addMultipleQuestions(formId: string, questionsConfig: QuestionConfig[]) {
        // reverse array 
        for (const questionConfig of questionsConfig) {
            await this.addQuestion(formId, questionConfig);
            this.increaseIndex();
        }
    }

    // Helper function to generate options from an array of strings
    generateOptions(options: string[]): any[] {
        return options.map(option => ({ value: option }));
    }

    // In your FormsManager class
    async addPageBreak(formId: string, title: string) {
        const request = {
            requests: [
                {
                    createItem: {
                        item: {
                            title: title,
                            pageBreakItem: {}
                        },
                        location: {
                            index: null
                        }
                    }
                }
            ]
        };

        // Fetch the form to determine the correct index for the new page
        const form = await this.forms.forms.get({ formId });
        const items = form.data.items || [];
        const index = items.length; // Append to the end of the form

        request.requests[0].createItem.location.index = index;

        return this.forms.forms.batchUpdate({ formId, requestBody: request });
    }

    // Method to grant editor access to a Gmail account
    async grantEditorAccess(formId: string, email: string) {
        try {
            // Add permissions using Drive API
            const permission = {
                type: 'user',
                role: 'writer', // Role to give edit access
                emailAddress: email
            };

            await this.drive.permissions.create({
                fileId: formId, // The ID of the Google Form
                requestBody: permission
            });

            console.log(`Editor access granted to ${email}`);
        } catch (error) {
            console.error('Error granting editor access:', error);
        }

    }
    // async publishFormAndEmailToTeamToFillOut(formId: string, emails: string[]) {
    //     // Send email to team members
    //     for (const email of emails) {
    //         const message = `Hello, please fill out the following form: https://docs.google.com/forms/d/${formId}`;
    //         console.log(`Sending email to ${email}: ${message}`);
    //     }
    // }

}

