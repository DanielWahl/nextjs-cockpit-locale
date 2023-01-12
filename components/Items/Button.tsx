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
    className = "",
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
    if (href && href !== "")
        return (
            <Link href={href} target={target}>
                <button className={`button ${color} ${style} ${className}`}>
                    {text ?? data?.text ?? ""}
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
            {text ?? data?.text ?? ""}
            {content && content}
        </button>
    );
};

export default Button;
