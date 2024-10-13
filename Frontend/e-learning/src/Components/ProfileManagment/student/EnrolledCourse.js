import '../../assets/css/profilesitting.css'
import Navbar from '../../Navbar/navbar';


function EnrolledCourse() {
    return (
        <>
            <Navbar />
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.1/dist/css/bootstrap.min.css" rel="stylesheet" />
            <div class="container mb-4 main-container">
                <div class="row">
                    <div class="col-lg-8 pb-5">
                        <div class="d-flex justify-content-end pb-3">
                            <div class="form-inline">
                                <label class="text-muted mr-3" for="order-sort">Sort courses</label>
                                <select class="form-control" id="order-sort">
                                    <option>Course Name</option>
                                    <option>Trainer’s Name</option>
                                    <option>Status</option>
                                    <option>Fee</option>
                                </select>
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-hover mb-0">
                                <thead>
                                    <tr>
                                        <th>Course Name</th>
                                        <th>Trainer</th>
                                        <th>Status</th>
                                        <th>Fee</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><a class="navi-link" href="#Course-details" data-toggle="modal">React JS</a></td>
                                        <td>George Mathews</td>
                                        <td><span class="badge badge-info m-0">Started</span></td>
                                        <td><span>$760.50</span></td>
                                    </tr>
                                    <tr>
                                        <td><a class="navi-link" href="#order-details" data-toggle="modal">React JS</a></td>
                                        <td>George Mathews</td>
                                        <td><span class="badge badge-info m-0">Started</span></td>
                                        <td>$315.20</td>
                                    </tr>
                                    <tr>
                                        <td><a class="navi-link" href="#order-details" data-toggle="modal">React JS</a></td>
                                        <td>George Mathews</td>
                                        <td><span class="badge badge-info m-0">Started</span></td>
                                        <td>$1,264.00</td>
                                    </tr>
                                    <tr>
                                        <td><a class="navi-link" href="#order-details" data-toggle="modal">React JS</a></td>
                                        <td>George Mathews</td>
                                        <td><span class="badge badge-success m-0">Passed</span></td>
                                        <td>$198.35</td>
                                    </tr>
                                    <tr>
                                        <td><a class="navi-link" href="#order-details" data-toggle="modal">React JS</a></td>
                                        <td>George Mathews</td>
                                        <td><span class="badge badge-success m-0">Passed</span></td>
                                        <td>Free</td>
                                    </tr>
                                    <tr>
                                        <td><a class="navi-link" href="#order-details" data-toggle="modal">React JS</a></td>
                                        <td>George Mathews</td>
                                        <td><span class="badge badge-success m-0">Passed</span></td>
                                        <td>$86.40</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.1/dist/js/bootstrap.bundle.min.js"></script>
            <script type="text/javascript"></script>
        </>
    );
}

export default EnrolledCourse;