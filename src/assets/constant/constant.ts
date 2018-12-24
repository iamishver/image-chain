import { environment } from '../../environments/environment';
export class Constants {
    public static SERVER_URL = environment.general_const.SERVER_URL;
    public static baseURL = environment.general_const.BASE_URL;
    public static DELAY = 1000;
    public static defaultTimeZone = '+05:30';
    public static defaultDateFormat = 'MM-dd-yyyy';
    public static defaultTimeFormat = 'hh:mm:ss a';
    public static defaultdigitFormat = '1.3-3';
    public static pageLength = '100';

    public static date_formats = [
        { 'date_key': 1, 'date_value': 'MM-dd-yyyy' },
        { 'date_key': 2, 'date_value': 'yyyy-MM-dd' },
        { 'date_key': 3, 'date_value': 'dd, MMMM yyyy' },
        { 'date_key': 4, 'date_value': 'MMMM dd yyyy' },
    ];

    public static time_formats = [
        { 'time_key': 'HH:mm:ss', 'time_value': '24 Hour format' },
        { 'time_key': 'hh:mm:ss a', 'time_value': '12 Hour format' },
    ];

    public static admin_type_formats = [
        { 'type': 0, 'type_value': 'Admin' },
        { 'type': 1, 'type_value': 'Company Admin' },
    ];

    public static status = [
        { 'status': 0, 'status_value': 'In-Active' },
        { 'status': 1, 'status_value': 'Active' },
    ];

    public static allergyTypeList = [
        { 'allergyType_id': 1, 'allergyType_value': 'codeine' },
        { 'allergyType_id': 2, 'allergyType_value': 'iodine' },
        { 'allergyType_id': 3, 'allergyType_value': 'penicillin' },
        { 'allergyType_id': 4, 'allergyType_value': 'sulfa' },
    ];

    public static occurrenceList = [
        { 'occurrence_id': 1, 'occurrence_value': 'Unknown or N/A' },
        { 'occurrence_id': 2, 'occurrence_value': 'First' },
        { 'occurrence_id': 3, 'occurrence_value': 'Early Recurrence (<2 Mo)' },
        { 'occurrence_id': 4, 'occurrence_value': 'Late Recurrence (2 - 12 Mo)' },
        { 'occurrence_id': 5, 'occurrence_value': 'Delayed Recurrence (> 12 Mo)' },
        { 'occurrence_id': 6, 'occurrence_value': 'Chronic/Recurrent' },
        { 'occurrence_id': 7, 'occurrence_value': 'Acute on Chronic' },
    ];

    public static severityList = [
        { 'severity_id': 1, 'severity_value': 'Unassigned' },
        { 'severity_id': 2, 'severity_value': 'Mild' },
        { 'severity_id': 3, 'severity_value': 'Mild to moderate' },
        { 'severity_id': 4, 'severity_value': 'Moderate' },
        { 'severity_id': 5, 'severity_value': 'Moderate to severe' },
        { 'severity_id': 6, 'severity_value': 'Severe' },
        { 'severity_id': 7, 'severity_value': 'Life threatening severity' },
        { 'severity_id': 8, 'severity_value': 'Fatal' },
    ];

    public static reactionList = [
        { 'reaction_id': 1, 'reaction_value': 'Unassigned' },
        { 'reaction_id': 2, 'reaction_value': 'Hives' },
        { 'reaction_id': 3, 'reaction_value': 'Nausea' },
        { 'reaction_id': 4, 'reaction_value': 'Shortness of Breath' },
    ];


    public static outcomeList = [
        { 'outcome_id': 1, 'outcome_value': 'Unassigned' },
        { 'outcome_id': 2, 'outcome_value': 'Resolved' },
        { 'outcome_id': 3, 'outcome_value': 'Improved' },
        { 'outcome_id': 4, 'outcome_value': 'Status quo' },
        { 'outcome_id': 5, 'outcome_value': 'Worse' },
        { 'outcome_id': 6, 'outcome_value': 'Pending followup' },
    ];



}

export class RegisterToasterMessage {
    public static successRegister = 'Successfully registed';
}

export class LoginToasterMessage {
    public static successLogin = 'Successfully logged in';
    public static successLogout = 'Successfully logged Out';
    public static errorLogin = 'You are not authorized user.';
    public static blankInputError = 'Please enter valid credential.';
    public static userPasswordError = 'Please enter valid email or password.';
}

export class ForgotPasswordToasterMessage {
    public static successfullySent = 'We have sent an email message to your email address, Please check your email messages.';
    public static emailNotExistError = 'Email address is not available, choose a different email address.';
}

export class ResetPasswordToasterMessage {
    public static successfullyUpdate = 'Password Reset successfully.';
}

export class AccessToasterMessage {
    public static revokeUpdate = 'You have successfully revoked access.';
}

export class ProfileToasterMessage {
    public static profileUpdate = 'Profile has been updated successfully.';
}

export class AllergyToasterMessage {
    public static AllergyAdd = 'You have successfully added the allergy.';
    public static AllergyUpdate = 'You have successfully updated the allergy.';
    public static AllergyDelete = 'You have successfully deleted the allergy.';
}

export class GeneralError {
    public static QUERYEXCEPTION = 'Query exception!!!';
    public static somethingWentWrong = 'something Went Wrong.';
}

export class ApiUrl {
    public static siteUrl = {
        'login': Constants.SERVER_URL + 'login',
        'forgotPassword': Constants.SERVER_URL + 'forgotPassword',
        'resetPassword': Constants.SERVER_URL + 'verify',
        'profile': Constants.SERVER_URL + 'updateProfile',
        'register': Constants.SERVER_URL + 'signup',
        'getAllergy': Constants.SERVER_URL + 'getAllergy',
        'addAllergy': Constants.SERVER_URL + 'addAllergy',
        'editAllergy': Constants.SERVER_URL + 'editAllergy',
        'deleteAllergy': Constants.SERVER_URL + 'deleteAllergy',
    };
}
