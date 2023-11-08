import { motion } from "framer-motion"
import "./BackScrollButton.scss"

function BackScrollButton() {

    const variantsContainer = {
        hidden: { scale: .6 },
        visible: { scale: 1, transition: { duration: 1, type: "spring" }}
    }
    const variantsItem = {
        hidden: { rotate: -1, opacity: 0 } ,
        visible: { opacity: 1, rotate: [20, 150, 200, 30, -1], transition: { duration: .6} }
    }

    return (
        <motion.div className="BackScrollButton" variants={variantsContainer} initial="hidden" whileInView="visible">
            <motion.a href="#Inicio" variants={variantsItem}>
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none">
                <path d="M10.9999 8.57098L7.04994 12.521C6.86133 12.7031 6.60873 12.8039 6.34654 12.8017C6.08434 12.7994 5.83353 12.6942 5.64812 12.5088C5.46271 12.3234 5.35754 12.0726 5.35526 11.8104C5.35298 11.5482 5.45378 11.2956 5.63594 11.107L11.2929 5.44998C11.3856 5.35679 11.4958 5.28285 11.6171 5.23238C11.7384 5.18192 11.8685 5.15594 11.9999 5.15594C12.1313 5.15594 12.2615 5.18192 12.3828 5.23238C12.5041 5.28285 12.6143 5.35679 12.7069 5.44998L18.3639 11.107C18.5416 11.2964 18.6386 11.5476 18.6344 11.8072C18.6301 12.0669 18.5251 12.3148 18.3413 12.4984C18.1576 12.682 17.9097 12.7869 17.65 12.7909C17.3903 12.7949 17.1393 12.6978 16.9499 12.52L12.9999 8.56998V18.156C12.9999 18.4212 12.8946 18.6756 12.707 18.8631C12.5195 19.0506 12.2652 19.156 11.9999 19.156C11.7347 19.156 11.4804 19.0506 11.2928 18.8631C11.1053 18.6756 10.9999 18.4212 10.9999 18.156V8.57098Z" fill="#232323"/>
                </svg>
            </motion.a>
        </motion.div>
    )
}

export default BackScrollButton