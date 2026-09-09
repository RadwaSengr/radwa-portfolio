function Services(props) {
  return (
    <div className="mt-4 p-4 bg-white rounded shadow-sm border border-primary">
      
      <h2 className="text-primary mb-4">{props.title}</h2>
      
      <div className="row">
        {props.servicesList.map((service, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="p-3 border rounded border-primary h-100 d-flex flex-column justify-content-between">
              <p className="fs-5 text-primary fw-bold">{service}</p>
              <button 
                className="btn btn-outline-primary mt-2"
                onClick={props.onRequestService}
              >
                Request Service 🚀
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Services;