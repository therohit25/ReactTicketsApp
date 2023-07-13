import React from "react";

const NotFound = () => {
  return (
    <>
      <div class="p-5 mb-4 bg-light rounded-3 " style={{ height: "80dvh" }}>
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold text-uppercase">
            404 Not Found
            <span role="img" aria-label="Emoji">
              🌧️
            </span>
          </h1>
          <p class="col-md-8 fs-4">
            The requested URL was not found on this server, Please Check you are
            Visiting the right site, <br />
            Or Site Maybe Removed by the owner
          </p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
