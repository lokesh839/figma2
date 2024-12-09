const Heading = ({ level, children, className }) => {
    const Tag = `h${level}`;
    return <Tag className={`font-bold  mb-5 ${className}`}>{children}</Tag>;
  };
  
  export default Heading;
  