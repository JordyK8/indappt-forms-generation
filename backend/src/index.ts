import GoogleFormCreator from './modules/GoogleFormsGenerator';
import * as questionParts from './data/questions';
async function main(formName: string, editorEmail: string): Promise<void> {
    const formCreator = new GoogleFormCreator();

    // 1. Create a new form
    const formId = await formCreator.createForm(formName);
    await formCreator.grantEditorAccess(formId, editorEmail);
    const questions = [
        questionParts.neutralParentsSurveyQuestions,
        questionParts.parentingAndFamilyQuestions,
        questionParts.friendshopAndSocial,
        questionParts.schoolAndEducation,
        questionParts.schoolAndSocialLife,
        questionParts.futureGoals,
    ];
    for (const part of questions) {
        await formCreator.addPageBreak(formId, part.title);
        await formCreator.addMultipleQuestions(formId, part.questions);
    }

    console.log('Form successfully created with all specified questions.');
}

main().catch(console.error);
