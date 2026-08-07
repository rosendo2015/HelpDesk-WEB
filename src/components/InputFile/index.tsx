import React, { useState } from "react";
import { Button } from "../Button";
import { Icon } from "../Icon";
import UploadIcon from "../../assets/icons/upload.svg?react";
import TrashIcon from "../../assets/icons/trash.svg?react";
import UserPlaceholder from "../../assets/icons/users.svg?react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogClose,
} from "../Dialog";
import Divider from "../Divider";
import { Text } from "../Text";
import { api } from "../../services/api";
import type { Users } from "../../contexts/User/model/users";

interface InputFileProps {
  avatarUrl?: string;
  onChange: (user: Users) => void;
  onDelete?: () => Promise<void>;
}

export function InputFile({ avatarUrl, onChange, onDelete }: InputFileProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] || null;
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setIsDialogOpen(true);
    }
  }

  async function handleSave() {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await api.post("/user-avatar/avatar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Resposta do backend:", response.data);

      onChange(response.data);
      setIsDialogOpen(false);
      alert("Imagem atualizada com sucesso!");
    } catch (err) {
      console.error("Erro ao salvar imagem:", err);
      alert("Erro ao salvar imagem. Veja o console.");
    }
  }

  function getAvatarUrl(filename?: string) {
    if (!filename) {
      return "/default-avatar.png";
    }

    // Usa a baseURL do Axios para não hardcodear localhost
    const baseURL = api.defaults.baseURL?.replace(/\/$/, ""); // remove barra final se houver

    // Se o backend já retornou "files/...", não duplica
    const normalizedFilename = filename.startsWith("files/")
      ? filename
      : `files/${filename}`;

    return `${baseURL}/${normalizedFilename}`;
  }

  return (
    <div className="flex items-center gap-2 mb-5">
      {/* Avatar com fallback */}
      <div className="w-12 h-12 rounded-full border border-gray-300 bg-gray-200 flex items-center justify-center overflow-hidden">
        {avatarUrl ? (
          <img
            src={getAvatarUrl(avatarUrl)}
            alt="user"
            className="w-full h-full object-cover"
          />
        ) : (
          <Icon svg={UserPlaceholder} className="w-7 h-7 fill-gray-600" />
        )}
      </div>

      {/* Botão de upload */}
      <label className="flex items-center gap-2 bg-gray-500 text-gray-100 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-400/50 transition-colors duration-200">
        <Icon svg={UploadIcon} className="w-4 h-4 fill-gray-100" />
        <span className="text-sm">Nova imagem</span>
        <input type="file" className="hidden" onChange={handleFileChange} />
      </label>

      {/* Botão de deletar */}
      {avatarUrl && (
        <Button
          type="button"
          onClick={onDelete}
          className="rounded-md bg-gray-500 hover:bg-gray-400/50 transition-colors duration-200"
        >
          <Icon svg={TrashIcon} className="w-4 h-4 fill-feedback-danger" />
        </Button>
      )}

      {/* Dialog de confirmação */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <Text variant="heading-md-bold">Nova imagem</Text>
          </DialogHeader>
          <Divider className="my-4" />
          {previewUrl && (
            <img
              src={previewUrl}
              alt="Prévia"
              className="w-75 h-75 rounded-full object-cover mx-auto"
            />
          )}
          <Divider className="my-4" />
          <DialogFooter>
            <div className="flex justify-end gap-2">
              <DialogClose asChild>
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancelar
                </Button>
              </DialogClose>
              <Button size="lg" variant="primary" onClick={handleSave}>
                Salvar
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
