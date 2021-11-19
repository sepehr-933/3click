import React from 'react'
import {Button} from "@mui/material";
import classNames from "classnames";

export default function Buttonxx({variant,
                                   classes,
                                   large,
                                   type,
                                   success,
                                   disabled,
                                   children,
                                   ...rest}) {

    return (
            <Button variant={variant} {...rest}
                    className={classNames(`button button__${type}`, [classes], {
                        large: large,
                        success: success,
                        disabled: disabled,
                    })}
            >
                {children}
            </Button>
    );
};
Button.defaultProps = {
    variant: "contained",
    large: false,
    success: 'false',
    disabled: false,
    type:'default'
};