import Image from "next/image";

export const Banner = ({
  width,
  height,
  alt,
  content,
  board = true,
  imageUrl,
}: {
  width?: number;
  height?: number;
  alt?: string;
  content?: any;
  board?: boolean;
  imageUrl?: string;
}) => {
  return (
    <section className="container mx-auto px-8 md:px-0">
      {!board ? (
        <div className={"flex space-x-8"}>
          {content?.map((banner: any, index: number) => (
            <a
              key={index}
              className="flex flex-1"
              href={banner.href}
              title={banner.alt}
            >
              <div className="flex w-full">
                <Image
                  src={banner.src}
                  alt={banner.alt}
                  width={760}
                  height={370}
                  layout="responsive"
                  className="cover w-full"
                  priority={index === 0} // Optionally prioritize the first image
                />
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="container mx-auto">
          {imageUrl && alt ? (
            <Image src={imageUrl} width={width} height={height} alt={alt} />
          ) : null}
        </div>
      )}
    </section>
  );
};
