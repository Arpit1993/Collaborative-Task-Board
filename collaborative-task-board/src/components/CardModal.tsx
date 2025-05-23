import { useForm } from "react-hook-form";
import { cardModalState, cardState, todosState } from "../atom";
import { useAtom } from "jotai";
import StyledModal from "./common/StyledModal";
import { saveTodoToLocalStorage } from "../utils/todo";
import { useCallback } from "react";

interface FormData {
  text: string;
}

const CardModal = () => {
  const { register, handleSubmit, getValues, setValue } = useForm<FormData>({
    mode: "onChange",
  });
  const [card, setCard] = useAtom(cardState);
  const [cardModal, setCardModal] = useAtom<boolean>(cardModalState);
  const [_, setTodos] = useAtom(todosState);

  const handleCloseModal = useCallback(() => {
    return setCardModal(false);
  }, [setCardModal]);

  const onValid = useCallback(() => {
    const { text } = getValues();
    setTodos((prev) => {
      const cardKey = Object.keys(card)[0];
      const cardValue = Object.values(card)[0];
      const { [cardKey]: todosToEdit, ...restTodos } = prev;
      const editedTodo = { id: cardValue, text };
      const updatedTodos = [
        editedTodo,
        ...todosToEdit.filter((todo) => todo.id !== editedTodo.id),
      ];
      const result = { ...restTodos, [cardKey]: updatedTodos };
      saveTodoToLocalStorage(result);
      return result;
    });
    setCard({});
    setValue("text", "");
    handleCloseModal();
  }, [card, getValues, handleCloseModal, setCard, setTodos, setValue]);

  return (
    <StyledModal
      isOpen={cardModal}
      onRequestClose={handleCloseModal}
      ariaHideApp={false}
      contentLabel="cardModal"
    >
      <button type="button" onClick={handleCloseModal}>
        ✕
      </button>
      <form onSubmit={handleSubmit(onValid)}>
        <div>
          <h1>Edit to-do</h1>
          <input
            {...register("text", { required: "Please edit your to-do list" })}
            type="text"
            placeholder="Please edit your to-do list"
          />
        </div>
      </form>
    </StyledModal>
  );
};

export default CardModal;
