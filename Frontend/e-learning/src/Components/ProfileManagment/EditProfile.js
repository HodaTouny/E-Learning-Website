import '../assets/css/profilesitting.css'
import Navbar from '../Navbar/navbar';


function EditProfile() {
    return (
        <>
            <Navbar />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.1/dist/css/bootstrap.min.css" rel="stylesheet" />
            <form class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <label for="account-fn">User Name</label>
                        <input class="form-control" type="text" id="account-fn" value="Daniel" required />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="account-email">E-mail Address</label>
                        <input class="form-control" type="email" id="account-email" value="daniel.adams@example.com" disabled />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="account-phone">Phone Number</label>
                        <input class="form-control" type="text" id="account-phone" value="+7 (805) 348 95 72" required />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="account-pass">New Password</label>
                        <input class="form-control" type="password" id="account-pass" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="account-confirm-pass">Confirm Password</label>
                        <input class="form-control" type="password" id="account-confirm-pass" />
                    </div>
                </div>
                <div class="col-12">
                    <hr class="mt-2 mb-3" />
                    <button class="btn btn-style-1 btn-primary" type="button" data-toast data-toast-position="topRight"
                        data-toast-type="success" data-toast-icon="fe-icon-check-circle" data-toast-title="Success!"
                        data-toast-message="Your profile updated successfuly.">Update Profile</button>
                </div>
            </form>
            <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.1/dist/js/bootstrap.bundle.min.js"></script>
            <script type="text/javascript"></script>
        </>
    );
}

export default EditProfile;