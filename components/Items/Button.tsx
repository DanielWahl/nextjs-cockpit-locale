import React, { FC } from "react";
import Link from "next/link";
import { NormalProps } from "../../types/types";

interface Props extends NormalProps {
    color?: "primary" | "secondary" | "secondaryLight" | "accent";
    style?: "full" | "empty" | "empty-light";
    onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
    href?: string;
    text?: string;
    className?: string;
    data?: any;
    content?: React.ReactChild | React.ReactChild[];
    disabled?: boolean;
    target?: string;
}

const Button: FC<Props> = ({
    className = "white",
    color = "light",
    style = "full",
    onClick = () => null,
    href = "",
    text = "",
    data,
    content,
    disabled = false,
    target = "_self",
}) => {
    if ((href && href !== "") || (data?.url && data?.url !== ""))
        return (
            <Link
                href={href !== "" ? href : data?.url ?? "/"}
                target={target ?? data?.target}
            >
                <button className={`button ${color} ${style} ${className}`}>
                    {text !== "" ? text : data?.caption ?? data?.text ?? ""}
                    {content && content}
                </button>
            </Link>
        );

    return (
        <button
            className={`button ${color} ${style} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {text !== "" ? text : data?.caption ?? data?.text ?? ""}
            {content && content}
        </button>
    );
};

export default Button;
