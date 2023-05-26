import NextImage, { ImageProps as NextImageProps } from "next/image";
import { FC, useMemo, useState } from "react";

export interface ImageProps extends Omit<NextImageProps, "fill"> {
  shadow?: boolean;
}

export const Image: FC<ImageProps> = ({
  src,
  width = 300,
  height = 300,
  shadow = false,
  ...props
}) => {
  const [isReady, setIsReady] = useState(false);

  const onLoadHandler = () => {
    return void setIsReady(true);
  };

  const showShadow = useMemo(() => isReady && shadow, [isReady, shadow]);

  return (
    <div className={`block relative h-[${height}] w-[${width}]`}>
      {showShadow && (
        <div className="absolute top-0 bottom-0 left-0 right-0 translate-x-8 translate-y-8 border-2 border-black rounded-lg -z-10 dark:border-pink-100" />
      )}
      <NextImage
        src={src}
        {...props}
        fill={false}
        width={width}
        height={height}
        onLoadingComplete={onLoadHandler}
        className={`bg-gray-400 dark:bg-gray-800/25 transition duration-100 ${
          isReady ? "scale-100 blur-0" : "scale-105 blur-2xl"
        } ${props.className}`}
      />
    </div>
  );
};
