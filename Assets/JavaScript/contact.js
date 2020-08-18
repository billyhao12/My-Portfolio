$(document).ready( () => {

    let fields = {};

    $("form").submit( event => {

        fields.name = $("input[name='name']");
        fields.email = $("input[name='email']");
        fields.message = $("textarea[name='message']");

        sendContact(event);
        
    });

    isNotEmpty = value => {
        if (value === null || typeof value === "undefined") return false;

        return (value.length > 0);
    }

    isEmail = email => {
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        return regex.test( String(email).toLowerCase() );
    }

    fieldValidation = (field, validationFunction) => {
        if (field === null) return false;

        return validationFunction( field.val() );
    }

    isValid = () => {
        let valid = true;

        valid &= fieldValidation(fields.name, isNotEmpty);
        valid &= fieldValidation(fields.email, isEmail);
        valid &= fieldValidation(fields.message, isNotEmpty);

        return valid;
    }

    sendContact = event => {
        if ( !isValid() ) {

            event.preventDefault();

            alert("There was an error. Please ensure that you have completed all fields with valid information.");

        }
    }

});