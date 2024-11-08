// eslint-disable-next-line react/prop-types
const Section = ({id, children, cor}) => {
    return (
      <section id={id} className={` h-75 ${cor}`}>
        {children}
        <div className="pb-5"></div>
      </section>
    );
}
 
export default Section;