"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

const SetupPage = () => {
  const storeModal = useStoreModal();
  const { onOpen, isOpen } = storeModal;

  useEffect(() => {
    if (!isOpen) onOpen();
  }, [isOpen, onOpen]);

  return null;
};

export default SetupPage;
