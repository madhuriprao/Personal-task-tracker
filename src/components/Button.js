import PropTypes from  "prop-types";
import { Children } from "react";
import {BsPlus} from "react-icons/bs";

const Button =({Children, type, isDisabled}) => {
    return(
    <button type ={type} disabled={isDisabled} className="btn">
        <BsPlus fontSize="52px"/> {Children}
        </button>
        )
}

Button.defaultProps = {
    type:"button",
    isDisabled: false
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type:PropTypes.string,
    isDisabled: PropTypes.bool,
}
export default Button;

