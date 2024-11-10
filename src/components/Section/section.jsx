// eslint-disable-next-line react/prop-types
const Section = ({id, children, cor}) => {
    return (
      <section id={id} className={`pb-5 h-75 ${cor}`}>
        {children}  
      </section>
    );
}
 
export default Section;