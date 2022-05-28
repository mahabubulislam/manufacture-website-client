import { signOut } from 'firebase/auth';
import React from 'react';
import auth from '../../firebase.init';

const LogoutModal = () => {
    const logOut = () => {
        signOut(auth)
        localStorage.removeItem('accessToken')
    }
    return (
        <div>
            <input type="checkbox" id="logout-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Logout?</h3>
                    <p className="py-4">Are you sure want to logout?</p>
                    <div className="modal-action flex justify-evenly">
                        <label onClick={logOut} htmlFor="logout-modal" className="btn">Yes</label>
                        <label htmlFor="logout-modal" className="btn btn-primary">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default LogoutModal;