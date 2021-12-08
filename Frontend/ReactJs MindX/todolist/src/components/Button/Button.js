import React from 'react';

const varianMap = {
    'primary': "bg-blue-500",
    'danger': "bg-red-500",
};

function Button({label, variant = "primary", ...restProps}) {
 return {
      <button className="btn btn-primary">{label}</button>
  };
}

export default Button;