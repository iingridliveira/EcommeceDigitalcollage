
const OptionSquare = () => {
  return (
    <>
      <h6>Tamanho</h6>
      <div className="btn-group">
        <ul className="list-unstyled pt-2  ">
          <li className="d-inline-block me-3">
            <button className="btn custom-btn border border-black  border-opacity-25 fw-bolder">
              39
            </button>
          </li>
          <li className="d-inline-block me-3 ">
            <button className="btn custom-btn border border-black  border-opacity-25 fw-bolder">
              40
            </button>
          </li>
          <li className="d-inline-block me-3">
            <button className="btn custom-btn border border-black  border-opacity-25 fw-bolder">
              41
            </button>
          </li>

          <li className="d-inline-block me-3">
            <button className="btn custom-btn border border-black  border-opacity-25 fw-bolder">
              42
            </button>
          </li>
          <li className="d-inline-block me-3">
            <button className="btn custom-btn border border-black  border-opacity-25 fw-bolder">
              43
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
const OptionCircle = () => {
  return (
    <>
      <h6>Cor</h6>
      <div className="w-25 " role="group">
        <ul className="list-unstyled pt-2 btn-group d-flex flex-nowrap">
          <li className="d-inline-block me-3 ratio ratio-1x1 w-50 ">
            <button className=" rounded-circle btn btn-circle btn-primary "></button>
          </li>
          <li className="d-inline-block me-3 ratio ratio-1x1 w-50 ">
            <button className=" rounded-circle btn btn-circle btn-danger"></button>
          </li>
          <li className="d-inline-block me-3 ratio ratio-1x1 w-50 ">
            <button className=" rounded-circle btn btn-circle btn-dark"></button>
          </li>

          <li className="d-inline-block me-3 ratio ratio-1x1 w-50 ">
            <button className="rounded-circle btn btn-circle btn-info btn-border-effect"></button>
          </li>
        </ul>
      </div>
    </>
  );
};
export { OptionSquare, OptionCircle };
