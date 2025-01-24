import React, {FC, ReactHTML, ReactNode, useEffect, Children, useState, useRef} from "react";
import twemoji from "twemoji";

const parseChild = (
    child: HTMLElement,
    imageClassName: HTMLImageElement["className"] | undefined,
) => {
    twemoji.parse(child, {
        className: imageClassName,
        ext: ".svg",
        folder: "svg",
        base: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/",
    });
};

const Twemoji: FC<{
    children: ReactNode;
    className?: HTMLDivElement["className"];
    imageClassName?: HTMLDivElement["className"];
    wrapper?: boolean;
    tag?: keyof ReactHTML;
}> = ({
          children,
          className = "",
          imageClassName,
          wrapper = false,
          tag = "div",
      }) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const refList = useRef<HTMLElement[]>([]);
    const [replaceDone, setReplaceDone] = useState(false);

    useEffect(() => {
        refList.current.map((childRef) => {
            parseChild(childRef, imageClassName);
        });
        setReplaceDone(true);
    }, [children, imageClassName, refList]);

    useEffect(() => {
        if (wrapperRef.current === null) {
            return;
        }

        parseChild(wrapperRef.current, imageClassName);
        setReplaceDone(true);
    }, [children, wrapperRef, imageClassName]);

    return children == null ? null : wrapper ? (
        React.createElement(
            tag,
            {
                ref: wrapperRef,
                className: `${className}${replaceDone ? "" : " invisible"}`,
            },
            children,
        )
    ) : (
        <>
            {Children.map(children, (child, index) => {
                if (child === null) {
                    return null;
                }
                if (typeof child === "string") {
                    return child;
                }

                if (typeof child === "boolean") {
                    return child;
                }

                if (!React.isValidElement<HTMLElement>(child)) {
                    return child;
                }

                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                return React.cloneElement(child as any, {
                    ref: (ref: HTMLElement) => {
                        refList.current[index] = ref;
                    },
                    className: `${child.props.className ?? ""}${
                        replaceDone ? "" : " invisible"
                    }`,
                });
            })}
        </>
    );
};

export default Twemoji;
