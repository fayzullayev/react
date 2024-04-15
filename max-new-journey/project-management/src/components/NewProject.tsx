import Input from './Input.tsx';
import { useRef } from 'react';
import Modal, { ModalRef } from './Modal.tsx';

function NewProject() {
  const title = useRef<HTMLInputElement | null>(null);
  const description = useRef<HTMLTextAreaElement | null>(null);
  const dueDate = useRef<HTMLInputElement | null>(null);
  const modalRef = useRef<ModalRef | null>(null);

  function handleSave() {
    const enteredTitle = title.current?.value;
    const enteredDescription = description.current?.value;
    const enteredDueDate = dueDate.current?.value;

    if (
      enteredTitle?.trim() &&
      enteredDescription?.trim() &&
      enteredDueDate?.trim()
    ) {
      onAddProject({
        title: enteredTitle,
        description: enteredDescription,
        dueDate: enteredDueDate,
      });
    } else {
      // alert('Invalid inputs');
      modalRef.current?.openModal();
    }
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid input</h2>
        <p className="text-stone-600 mb-4">
          Oops... looks like you forgot to enter a value
        </p>
        <p className="text-stone-600 mb-4">Enter valid inputs</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancelProject}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="Title" type="text" />
          <Input ref={description} label="Description" textarea={true} />
          <Input ref={dueDate} label="Due Date" type="date" />
        </div>
      </div>
    </>
  );
}

export default NewProject;
