import React from 'react'

const bootstrapExample = () => {
  return (
    <>
    <div>
  {/* Nav tabs */}
  <ul className="nav nav-tabs" id="navId">
    <li className="nav-item">
      <a href="#tab1Id" className="nav-link active">Active</a>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#tab2Id">Action</a>
        <a className="dropdown-item" href="#tab3Id">Another action</a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#tab4Id">Action</a>
      </div>
    </li>
    <li className="nav-item">
      <a href="#tab5Id" className="nav-link">Another link</a>
    </li>
    <li className="nav-item">
      <a href="#" className="nav-link disabled">Disabled</a>
    </li>
  </ul>
  {/* Tab panes */}
  <div className="tab-content">
    <div className="tab-pane fade show active" id="tab1Id" role="tabpanel" />
    <div className="tab-pane fade" id="tab2Id" role="tabpanel" />
    <div className="tab-pane fade" id="tab3Id" role="tabpanel" />
    <div className="tab-pane fade" id="tab4Id" role="tabpanel" />
    <div className="tab-pane fade" id="tab5Id" role="tabpanel" />
  </div>
</div>
<div className="form-group">
  <label htmlFor />
  <input type="email" className="form-control" name id aria-describedby="emailHelpId" placeholder />
  <small id="emailHelpId" className="form-text text-muted">Help text</small>
</div>
<div className="form-check form-check-inline">
  <label className="form-check-label">
    <input className="form-check-input" type="checkbox" name id defaultValue="checkedValue" /> Display value
  </label>
</div>
<div className="form-group">
  <label htmlFor />
  <input type="text" name id className="form-control" placeholder aria-describedby="helpId" />
  <small id="helpId" className="text-muted">Help text</small>
</div>
<div className="form-group">
  <label htmlFor />
  <input type="text" name id className="form-control" placeholder aria-describedby="helpId" />
  <small id="helpId" className="text-muted">Help text</small>
</div>

<nav className="navbar navbar-expand navbar-red bg-faded">
  <a className="navbar-brand" href="#">Navbar</a>
  <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
    <li className="nav-item active">
      <a className="nav-link" href="#">Active <span className="sr-only">(current)</span></a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Link</a>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
      <div className="dropdown-menu" aria-labelledby="dropdownId">
        <a className="dropdown-item" href="#">Action 1</a>
        <a className="dropdown-item" href="#">Action 2</a>
      </div>
    </li>
  </ul>
  <form className="form-inline my-2 my-lg-0">
    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
res


{/* TODO: This is for server side, there is another version for browser defaults */}



    </>
  )
}

export default bootstrapExample
