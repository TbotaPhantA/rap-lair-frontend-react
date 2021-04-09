import React, {useState} from 'react';
import Modal from 'react-modal';
import './WelcomePage.css';
import WelcomeBlock from './WelcomeBlock/WelcomeBlock';
import TeachersBlock from './TeachersBlock/TeachersBlock';
import BestRappersBlock from './BestRappersBlock/BestRappersBlock';
import RegistrationForm from './RegAuthForms/RegistrationForm';
import AuthorizationForm from './RegAuthForms/AuthorizationForm';

const customStylesOfModals = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: 'auto',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        border: 'none',
        color: 'black',
        padding: '0',
        borderRadius: '30px',
        boxShadow: '0 0 100px rgba(255, 179, 32, 0.3)',
    }
}

Modal.setAppElement('#root');
function WelcomePage() {
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [isAuthorizationOpen, setIsAuthorizationOpen] = useState(false);

    // Registration modal window
    function openRegister() {
        setIsRegisterOpen(true);
    }
    
    function closeRegister() {
        setIsRegisterOpen(false);
    }

    // Authorization modal window
    function openAuthorization() {
        setIsAuthorizationOpen(true);
    }

    function closeAuthorization() {
        setIsAuthorizationOpen(false);
    }

    return (
        <div className="welcome_page">

            <WelcomeBlock openRegisterFunc={openRegister} openAuthorizationFunc={openAuthorization} />
            <TeachersBlock />
            <BestRappersBlock />

            <Modal
            isOpen={isRegisterOpen}
            onRequestClose={closeRegister}
            style={customStylesOfModals}>
                <RegistrationForm openAuthorizationFunc={openAuthorization} closeRegisterFunc={closeRegister} />
            </Modal>

            <Modal
            isOpen={isAuthorizationOpen}
            onRequestClose={closeAuthorization}
            style={customStylesOfModals}>
                <AuthorizationForm openRegisterFunc={openRegister} closeAuthorizationFunc={closeAuthorization} />
            </Modal>

        </div>
    );
}

export default WelcomePage;