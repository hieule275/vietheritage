import { motion } from "framer-motion";

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}   // lúc bắt đầu
      animate={{ opacity: 1, y: 0 }}    // khi hiện
      exit={{ opacity: 0, y: -20 }}     // khi rời trang
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export default PageWrapper;