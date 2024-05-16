import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import "./JobDetails.css";

const JobDetails = () => {
  const { user } = useContext(AuthContext);
  const job = useLoaderData();
  const {
    _id,
    photoUrl,
    jobTitle,
    salaryRange,
    jobDescription,
    jobPosting,
    deadline,
    totalApplicants,
  } = job;

  const handleApplyJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const resumeLink = form.resume.value;
    const appliedOn = new Date();
    const applicationDeadline = new Date(deadline);

    const candidate = { name, email, resumeLink, job, appliedOn };
    // console.log(email);

    if (job.user !== user.email) {
      if (appliedOn < applicationDeadline) {
        axios
          .post(`http://localhost:3000/appliedJob/${_id}`, candidate)
          .then((res) => {
            console.log(res.data);
            if (res.data.insertedId) {
              Swal.fire({
                title: "Success!",
                text: "Application Submitted!!",
                icon: "success",
                confirmButtonText: "Go back",
              });
            }
          });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Application Deadline Passes!!",
          icon: "warning",
          confirmButtonText: "Go back",
        });
      }
    } else {
      Swal.fire({
        title: "Error!",
        text: "You cannot apply on the Job you posted!!",
        icon: "warning",
        confirmButtonText: "Go back",
        customClass: {
          container: "custom-swal-container",
        },
      });
    }
  };
  return (
    <div className="mx-auto py-8 px-4 w-full max-w-7xl bg-white">
      <div className="mx-auto max-w-2xl lg:max-w-none grid grid-cols-2 gap-x-5">
        {/* :PRODUCT PICTURE */}
        <div className="order-first lg:order-last col-span-full lg:col-span-1 relative rounded-sm border-2 border-gray-200">
          <img
            src={photoUrl}
            alt={jobTitle}
            className="object-contain w-full h-80 lg:h-full"
          />
        </div>

        {/* :PRODUCT DETAILS */}
        <div className="order-last lg:order-first col-span-full lg:col-span-1 lg:max-w-xl flex flex-col items-start">
          {/* ::Name */}
          <h1 className="text-3xl sm:text-4xl text-gray-700 font-extrabold tracking-wide">
            {jobTitle}
          </h1>
          {/* ::Price & Rating */}
          <div className="mt-5 flex items-center">
            {/* :::Price */}
            <p className="text-md text-gray-700 font-normal">
              {jobDescription}
            </p>
          </div>

          {/* ::Availability */}
          <div className="w-full flex justify-center">
            <div className="mt-12">
              <p className="space-x-1 text-2xl text-gray-700 font-bold">
                Salary Range : {salaryRange}
              </p>
            </div>
          </div>

          {/* ::Add to Cart Button */}
          <button
            onClick={() => document.getElementById("my_modal_4").showModal()}
            className="btn glass mt-10 py-2 w-full inline-block rounded-md bg-red-500 text-base text-white font-semibold tracking-wide hover:bg-red-600"
          >
            Apply
          </button>

          <dialog
            id="my_modal_4"
            className="modal modal-bottom sm:modal-middle z-10"
          >
            <div className="modal-box w-11/12 max-w-4xl">
              <h3 className="font-bold text-lg">Submit Your Resume!!</h3>
              <form onSubmit={handleApplyJob} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    value={user.displayName}
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    value={user.email}
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Resume Link</span>
                  </label>
                  <input
                    type="text"
                    name="resume"
                    placeholder="Resume Link"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className=" form-control mt-6">
                  <button className="btn bg-red-600 text-white">
                    Submit Application
                  </button>
                </div>
              </form>
              <label className="modal-backdrop" htmlFor="my_modal_7">
                Close
              </label>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
          {/* ::Lifetime Guarantee */}
          <p className="mt-3 w-full inline-flex justify-center items-center text-sm text-gray-500 font font-semibold">
            Total Applicants : {job.totalApplicants}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
