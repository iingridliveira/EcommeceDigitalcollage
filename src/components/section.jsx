// eslint-disable-next-line react/prop-types
const Section = ({id, children, cor}) => {
    return (
      <section
        id={id}
        className={` h-75 ${cor}`}
       
      >
        {children}
      </section>
    );
}
 
export default Section;