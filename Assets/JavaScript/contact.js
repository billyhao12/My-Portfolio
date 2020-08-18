$(document).ready( () => {

    let fields = {};

    $("form").submit( event => {

        event.preventDefault();

        fields.name = $("#name");
        fields.email = $("#email");
        fields.message = $("#message");

        sendContact();

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

        let isFieldValid = validationFunction( field.val() );

        if (!isFieldValid) {
            field.className = "placeholderRed";
        } else {
            field.className = "";
        }

        return isFieldValid;
    }

    isValid = () => {
        let valid = true;

        valid &= fieldValidation(fields.name, isNotEmpty);
        valid &= fieldValidation(fields.email, isEmail);
        valid &= fieldValidation(fields.message, isNotEmpty);

        return valid;
    }

    class User {
        constructor(name, email, message) {
            this.name = name;
            this.email = email;
            this.message = message;
        }
    }

    sendContact = () => {
        if ( isValid() ) {
            let user = new User( fields.name.val(), fields.email.val(), fields.message.val() );

            alert(`${user.name}, thanks for your message!`);

            clearForm();

        } else {
            alert("There was an error. Please ensure that you have completed all fields with valid information.");
        }
    }

    clearForm = () => {
        fields.name.val("");
        fields.email.val("");
        fields.message.val("");
    }

});