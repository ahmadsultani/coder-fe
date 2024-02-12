import { IProject } from "@/_types/project";
import Image from "next/image";

interface PopupProjectModalProps {
  project: IProject;
  onClose: () => void;
}

export default function PopupProjectModal({
  project,
  onClose,
}: PopupProjectModalProps) {
  const { title, division, cover_image, images, description } = project;

  return (
    <section className="fixed inset-0 z-50 flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-[rgba(0,0,0,0.9)]">
      <div className="m-auto w-screen flex-1 flex-col items-center justify-center overflow-y-scroll overscroll-contain pt-10 align-middle">
        <header className="m-auto mb-5 flex w-[1024px] items-center justify-between gap-2 text-neutral-200">
          <section className="flex flex-col gap-2">
            <h1 className="text-heading-m  font-semibold leading-9 ">
              {title}
            </h1>
            <div className="flex gap-5">
              <span className="text-xl font-medium leading-7 ">
                Divisi {division}
              </span>
            </div>
          </section>
          <button
            onClick={onClose}
            className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full bg-neutral-700 hover:bg-neutral-normal-hover"
          >
            <Image
              src="/icons/btn-close.svg"
              width={36}
              height={36}
              alt="close"
            />
          </button>
        </header>
        <main className="m-auto flex w-[1024px] flex-col overscroll-contain">
          <Image
            src={cover_image.src}
            width={1024}
            height={1024}
            alt="placeholder"
          />
          {images?.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              width={1024}
              height={1024}
              alt="placeholder"
            />
          ))}
          <section className="flex flex-col gap-8 bg-white px-16 py-8">
            <h1 className="text-center text-heading-m  font-semibold leading-9">
              ABOUT
            </h1>
            <p className="text-xl font-medium leading-7 text-neutral-900">
              {description}
            </p>
          </section>
        </main>
      </div>
    </section>
  );
}
