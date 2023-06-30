"use client";

import Image from "next/image";
import { ImagePlusIcon, Trash } from "lucide-react";
import { ClientOnly } from "../ClientOnly";
import { Button } from "./button";
import { CldUploadWidget } from "next-cloudinary";

interface ImageUploadProps {
  disabled?: boolean;
  onChange: (string: string) => void;
  onRemove: (value: string) => void;
  value: string[];
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  disabled,
  onChange,
  onRemove,
  value,
}) => {
  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };

  return (
    <ClientOnly>
      <div>
        <div className="flex items-center gap-4 mb-4">
          {value.map((url) => (
            <div
              key={url}
              className="relative w-[200px] h-[200px] rounded-md overflow-hidden"
            >
              <div className="absolute z-10 top-2 right-2">
                <Button
                  type="button"
                  variant={"destructive"}
                  size={"icon"}
                  onClick={() => onRemove(url)}
                >
                  <Trash className="w-4 h-4" />
                </Button>
              </div>
              <Image fill className="object-cover" alt="Image" src={url} />
            </div>
          ))}
        </div>
        <CldUploadWidget onUpload={onUpload} uploadPreset="abfjqxh2">
          {({ open }) => {
            const onClick = () => {
              open();
            };

            return (
              <Button
                typeof="button"
                disabled={disabled}
                variant={"secondary"}
                onClick={onClick}
              >
                <ImagePlusIcon className="w-4 h-4 mr-2" />
                Upload an image
              </Button>
            );
          }}
        </CldUploadWidget>
      </div>
    </ClientOnly>
  );
};

export default ImageUpload;
