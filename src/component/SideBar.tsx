export function SideBar() {
  return (
    // <div className="col-auto col-sm-2 bg-dark d-flex flex-column justify-content-between min-vh-100">
    <div className="mt-2">
      <ul className="nav nav-pills flex-column" id="parentM">
        <li className="nav-item  my-1">
          <a href="#" className="nav-link text-white" aria-current="page">
            <img src="/HomeIcon.png" alt="" />
            <span className="ms-2 d-md-none d-lg-inline-block ">Home</span>
          </a>
        </li>
        <li className="nav-item  my-1">
          <a
            href="#"
            className="nav-link text-white"
            data-bs-toggle="collapse"
            aria-current="page"
          >
            <img src="/agentIcon.png" alt="" />
            <span className="ms-2  d-none d-sm-inline">Agents</span>
            <i className="bi bi-arrow-down-short text-end ms-3"></i>
          </a>
        </li>
        <li className="nav-item  my-1">
          <a href="#" className="nav-link text-white" aria-current="page">
            <img src="/callIcon.png" alt="" />

            <span className="ms-2  d-none d-sm-inline">Calls</span>
          </a>
        </li>
        <li className="nav-item text-white my-1">
          <a href="#" className="nav-link text-white" aria-current="page">
            <img src="/contactIcon.png" alt="" />

            <span className="ms-2   d-none d-sm-inline">Contacts</span>
          </a>
        </li>
        <li className="nav-item my-1">
          <a href="#" className="nav-link text-white" aria-current="page">
            <img src="/campaignIcon.png" alt="" />

            <span className="ms-2   d-none d-sm-inline">Campaigns</span>
          </a>
        </li>
        <li className="nav-item my-1">
          <a href="#" className="nav-link text-white" aria-current="page">
            <img src="/companyIcon.png" alt="" />

            <span className="ms-2   d-none d-sm-inline">Companies</span>
          </a>
        </li>
        <li className="nav-item my-1">
          <a href="#" className="nav-link text-white" aria-current="page">
            <img src="/knowledgeIcon.png" alt="" />

            <span className="ms-2   d-none d-sm-inline">Knowledge</span>
          </a>
        </li>
      </ul>
    </div>
    // </div>
  );
}
