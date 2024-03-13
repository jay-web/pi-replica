import { motion } from "framer-motion";

const ScaleIn = ({ classes, children }) => {
  return (
  
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={classes}
      >
        {children}
      </motion.div>
  
  );
};

export default ScaleIn;


