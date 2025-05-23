import { useForm } from "react-hook-form";
import { boardModalState, todosState } from "../atom";
import { useAtom, useSetAtom } from "jotai";
import { saveTodoToLocalStorage } from "../utils/todo";
import StyledModal from "./common/StyledModal";
import { useCallback } from "react";

interface FormData {
  title: string;
}

const BoardModal = () => {
  const { register, handleSubmit, getValues, setValue } = useForm<FormData>({
    mode: "onChange",
  });
  const [boardModal, setBoardModal] = useAtom<boolean>(boardModalState);
  const setTodos = useSetAtom(todosState);

  const handleCloseModal = useCallback(() => {
    return setBoardModal(false);
  }, [setBoardModal]);

  const onValid = useCallback(() => {
    const { title } = getValues();
    setTodos((prev) => {
      const result = { ...prev, [title]: [] };
      saveTodoToLocalStorage(result);
      return result;
    });
    setValue("title", "");
    handleCloseModal();
  }, [getValues, handleCloseModal, setTodos, setValue]);

  return (
    <StyledModal
      isOpen={boardModal}
      onRequestClose={handleCloseModal}
      ariaHideApp={false}
      contentLabel="boardModal"
    >
      <button type="button" onClick={handleCloseModal}>
        ✕
      </button>
      <form onSubmit={handleSubmit(onValid)}>
        <div>
          <h1>Add Board</h1>
          <input
            {...register("title", { required: "Add a board" })}
            type="text"
            placeholder="Add a board"
          />
        </div>
      </form>
    </StyledModal>
  );
};

export default BoardModal;
