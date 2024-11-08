/* eslint-disable react/prop-types */

const Card2 = ({photo, text}) => {
  return (
    <>
      <main className=" rounded-circle bg-white m-4 p-4 shadow-lg ">
        <div className="">
          <img className="" src={photo} />
        </div>
      </main>
      <h6 className="d-flex flex-column  align-items-center justify-content-between">
        {text}
      </h6>
    </>
  );
};

export default Card2;
