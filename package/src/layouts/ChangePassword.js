import React from 'react';

import user1 from '../../src/assets/images/users/user1.jpg';

const UserDetails = () => {
    return (
      <ul className="collection with-header col m6 s12" style={{ margin: 0 }}>
        <li className="collection-header"><h4>User Details</h4></li>
        <li className="collection-item" style={{ paddingLeft: 10 }}>
          
          <div >Name : KUSH<a href="#" className="col secondary-content"></a></div>
        </li>
        <li className="collection-item" style={{ paddingLeft: 10 }}>
          <div>Username : 50KUSH27<a href="#" className="col secondary-content"></a></div>
        </li>
        <li className="collection-item" style={{ paddingLeft: 10 }}>
          <div>Chips : 0<a className="col secondary-content"></a></div>
        </li>
        <li className="collection-item" style={{ paddingLeft: 10 }}>
          <div>P/L : 0.95<a  className="col secondary-content"></a></div>
        </li>
        <li className="collection-item" style={{ paddingLeft: 10 }}>
          <div>Exposure : 0.00<a  className="col secondary-content "></a></div>
        </li>
        <li className="collection-item" style={{ paddingLeft: 10 }}>
          <div>Balance : 0.95<a className="col secondary-content"></a></div>
        </li>
      </ul>
    );
  };

const ChangePasswordForm = () => {
    return (
      <form className="col s12 m6 form-ui" method="POST" action="">
        <h4>Change Password</h4>
        <input type="hidden" name="_token" value="lebvFWDsT9vN2MwM8XXwR6P1MxO05tECsQPrHYax" />
        <div className="input-field col s12">
          <input placeholder="Old Password" name="old_password" id="old_password" type="password" className="validate" />
          <label htmlFor="old_password" className="active">Old Password</label>
        </div>
        <div className="input-field col s12">
          <input placeholder="New Password" name="new_password" id="new_password" type="password" className="validate" />
          <label htmlFor="new_password" className="active">New Password</label>
        </div>
        <div className="input-field col s12">
          <input placeholder="Re-Type Password" name="new_password_re" id="new_password_re" type="password" className="validate" />
          <label htmlFor="new_password_re" className="active">Re-Type Password</label>
        </div>
        <div className="clearfix"></div>
        <div className="col s12">
          <button type="submit" className="btn">Update</button>
        </div>
      </form>
    );
  };
  

const ChangePassword = () => {
  return (
    <div className="row">
      <div className="col s12">
        <div className="card col s12">
          <div className="card-content">
            <div className="row">
              <UserDetails />
              <ChangePasswordForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
